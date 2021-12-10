import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';






function HomeScreen ({navigation}) {
  return(
     <View style={styles.container}>
    <Image 
          source={{uri: 'https://media-exp1.licdn.com/dms/image/C4E03AQFPE8Ow3AYwAQ/profile-displayphoto-shrink_800_800/0/1613316809495?e=1644451200&v=beta&t=3fEpTYpzrV7tBQqsbFKZAVtSQd4KXH1dE2rAFrbU1bg',}}
          style={ styles.photo}/>
      <Text style={styles.title}>
      Erywelton Williams Andrade de Souza
      </Text>
      <Text style={styles.paragraph}>
        Estudante/Open To Work
      </Text>
      <Text style={styles.paragraph}>
        4° Periodo em Sistemas Para Internet - UNICAP
      </Text>
      <Text style={styles.title}>
      </Text>
      <Button 
        title="Hobbies"
        color="#841584"
        onPress={() => navigation.navigate('Hobbies')}
      />
      <Button 
        title="Extras"
        color="#841584"
        onPress={() => navigation.navigate('Extras')}
      />
    </View>
  );
}

function Hobbies ({navigation}) {
  return(
     <View style={styles.container}>
      <Text style={styles.title}>
      Hobbies
      </Text>
      <Text>
        Musculação
      </Text>
      <Text>
        Filmes
      </Text>
      <Text>
        Notícias
      </Text>
      <Text>
      Livros
      </Text>
      <Text>
        Séries
      </Text>
    </View>
  );
}

function Extras ({navigation}) {
  return(
     <View style={styles.container}>
      <Text style={styles.title}>
      Atividades Extras
      </Text>
      <Text>
        Cursos Extras
      </Text>
      <Text>
        Projetos Acadêmicos
      </Text>
      <Text>
        Idiomas
      </Text>
    </View>
  );
}


const Stack = createNativeStackNavigator();

export default function App() {
  return (
  
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} 
        options={{
          headerStyle:{backgroundColor:"#00FFFF"},
          headerTitleStyle:{fontWeight:'bold'},
        }}
        />
        <Stack.Screen name="Hobbies" component={Hobbies}  options={{ title: 'Hobbies',                headerStyle:{backgroundColor:"#00FFFF"},
          headerTitleStyle:{fontWeight:'bold'} }}
        />
        <Stack.Screen name="Extras" component={Extras}  options={{ title: 'Extras',                   headerStyle:{backgroundColor:"#00FFFF"},
          headerTitleStyle:{fontWeight:'bold'} }}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 16,
    textAlign: 'center',
  },
  title:{
        margin: 24,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  photo: {
    width:190,
    height:220,
    borderRadius:50
  }
});