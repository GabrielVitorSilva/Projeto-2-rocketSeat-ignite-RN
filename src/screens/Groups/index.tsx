import { useState, useCallback } from 'react';
import { FlatList } from 'react-native';

import { useNavigation, useFocusEffect } from '@react-navigation/native'

import { groupsGetAll } from '@storage/group/groupsGetAll';

import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/HigthLigth';
import ListEmpty from '@components/ListEmpty';
import { Button } from '@components/Button';

import { Container } from './styles';
import { err } from 'react-native-svg/lib/typescript/xml';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('new');
  }

  async function fetchGroups() {
    try {
      const data = await groupsGetAll();

      setGroups(data)
    } catch (error) {
      console.log(error);
      alert('Não foi possível carregar os dados')
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players', { group });
  }

  try {
    useFocusEffect(useCallback(() => {
      fetchGroups()
    }, []))
  } catch (error) {
    console.log(error);
  }
 


  return (
    <Container>
      <Header />
      <Highlight
        title="Turmas"
        subtitle="jogue com sua turma"
      />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard
            title={item}
            onPress={() => handleOpenGroup(item)}
          />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />

      <Button
        title='Criar nova turma'
        onPress={handleNewGroup}
      />
    </Container>
  );
}