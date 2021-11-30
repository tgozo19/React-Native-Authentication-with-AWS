import * as React from 'react';
import { StyleSheet, Pressable, Text, View } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { RootTabScreenProps } from '../types';
import { Auth } from 'aws-amplify';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const logOut = () => {
    Auth.signOut();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello I am Takudzwa. I created this simple authentication application using React Native and for the backend I used AWS</Text>
      <Pressable onPress={logOut} style={{backgroundColor: 'red', height: 35, width: 100, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginVertical: 15}}>
        <Text style={{color: 'white'}}>Logout</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
