import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, View, TextInput, Text, Button, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {ScrollView} from "react-native-web";

const Stack  = createStackNavigator()
const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

const S1 = ({navigation}) => {
    return (
        <View style={styles.container} >
        <TextInput style={styles.input}/>
        <Button title="FORWARD" onPress={() => {
            return navigation.push('S2')
        }}/>
      </View>
    )
}

const S2 = ({navigation}) => {

    return (
            <Tab.Navigator>
                <Tab.Screen name="S3" component={S3} />
                <Tab.Screen name="S4" component={S4} navigation={navigation}/>
            </Tab.Navigator>

    )
}

const S3 = () => {
    return (
        <View style={styles.container} >
            <Text>S3</Text>
            <Image style={styles.stretch} source={{uri: "https://upload.wikimedia.org/wikipedia/commons/e/ec/RandomBitmap.png"}} />
        </View>
    )
}

const S4 = ({navigation}) => {
    return (
        <View style={styles.container} >
            <Text>S4</Text>
            <Button onPress={() => navigation.navigate('S5')} title="asdf" />
        </View>
    )
}

const S5 = () => {
    return (
<>
        <Drawer.Navigator>
            <Drawer.Screen name="S6" component={S6} />
            <Drawer.Screen name="S7" component={S7} />
        </Drawer.Navigator>
    </>
    )
}

const S6 = () => {
    return (
        <View style={styles.container} >
            <Text>S6</Text>
        </View>
    )
}

const S7 = () => {
    return (
        <View style={styles.container} >
            <Text>S6</Text>
        </View>
    )
}

export default function App() {

  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen
                  name="S1"
                  component={S1}
                  options={{title: 'Yr on S1'}}
                  n={0}
              />
              <Stack.Screen
                  name="S2"
                  component={S2}
                  options={{title: 'Yr on S2'}}
              />
              <Stack.Screen
                  name="S5"
                  component={S5}
                  options={{title: 'Yr on S5'}}
              />
          </Stack.Navigator>
          </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#cdffaa',
      flex: 1,
      justifyContent: 'space-evenly',
      alignItems: 'center'
    },
    input: {
        backgroundColor: '#eeeeee'
        , borderWidth: 5
        , width: '50%'
        , height: 50
        , padding: 7
    },
    stretch: {
        width: 300,
        height: 300,
        resizeMode: 'stretch',
    },
});
