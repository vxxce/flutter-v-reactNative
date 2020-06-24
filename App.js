import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, View, TextInput, Text, Button, Image, TouchableHighlight } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack  = createStackNavigator()
const Tab = createBottomTabNavigator()

const And = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="!"
                component={Chk}
                options={{title: '!'}}
            />
            <Stack.Screen
                name="@"
                component={At}
                options={{title: '@'}}
            />
        </Stack.Navigator>
    )
}

const Chk = ({navigation}) => {
    return (
        <View style={{...styles.container, backgroundColor: '#eeeedd'}}>
            <Image style={{width: '75%', height: 300}} source={{uri: "https://upload.wikimedia.org/wikipedia/commons/e/ec/RandomBitmap.png"}} />
            <TouchableHighlight underlayColor="white" opacity={5} >
                <View style={{backgroundColor: '#cfe3e3', borderRadius: 10}}>
                <Text
                    style={
                        { paddingTop: 5
                        , paddingRight: 9
                        , paddingBottom: 5
                        , paddingLeft: 9
                        , borderWidth: 5
                        , borderRadius: 10
                        , borderColor:'tomato'
                        , fontSize: 30
                        , letterSpacing: 3
                        , color: 'tomato'
                        }
                    }
                    onPress={() => navigation.push('@')}
                >
                    NEXT
                </Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}

const At = ({navigation}) => {
    return (
        <View style={{...styles.container, backgroundColor: '#eeccaa'}} >
            <Text style={styles.text}>{'@@@'}</Text>
            <TextInput style={styles.input}/>
            <TouchableHighlight underlayColor="white" opacity={5} >
                <View style={{backgroundColor: '#c3e1bc', borderRadius: 10}}>
                    <Text
                        style={
                            { paddingTop: 5
                                , paddingRight: 9
                                , paddingBottom: 5
                                , paddingLeft: 9
                                , borderWidth: 5
                                , borderRadius: 10
                                , borderColor:'#243d60'
                                , fontSize: 30
                                , letterSpacing: 3
                                , color: '#243d60'
                            }
                        }
                        onPress={() => navigation.push('!')}
                    >
                        NEXT
                    </Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}

const Hash = () => {
    return (
        <View style={{...styles.container, backgroundColor: '#c9e2ac'}}>
            <Text style={styles.text}>###</Text>
        </View>
    )
}


export default function App() {

  return (
      <NavigationContainer>
          <Tab.Navigator tabBarOptions={{activeTintColor: 'tomato', labelStyle: {fontSize : 30}}} >
              <Tab.Screen name="&" component={And} />
              <Tab.Screen name="#" component={Hash} />
          </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    container: {
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
    text: {
        fontSize: 80
    }
});
