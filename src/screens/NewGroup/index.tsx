import { useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

import { AppError } from "@utils/AppError";
import { groupCreate } from "@storage/group/groupCreate";

import { Container, Content, Icon } from "./style";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Highlight } from "@components/HigthLigth";
import Input from "@components/Input";

export function NewGroup() {
  const [group, setGroup] = useState('')

  const navigation = useNavigation()

  async function handleNew() {

    try {
      if(group.trim().length === 0) {
        return Alert.alert('Novo Grupo', 'informe o nome da turma')
      }
    } catch (error) {
      
    }

    try {
      await groupCreate(group);
      navigation.navigate('players', { group })

    } catch (error) {
      
      if (error instanceof AppError) {
        Alert.alert('Novo Grupo', error.message)

      } else {
        Alert.alert('Novo Grupo', 'Não foi possível cadastrar')
        console.log(error);  
      }
    } 
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Input
          placeholder="Nome da turma"
          onChangeText={setGroup}
        />

        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNew}
        />
      </Content>
    </Container>
  )
}