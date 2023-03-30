import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface GroupsProps {}

const Groups = (props: GroupsProps) => {
  return (
    <View style={styles.container}>
      <Text>Groups</Text>
    </View>
  );
};

export default Groups;

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
});
