import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from "../Screens/Home";
import Profil from "../Screens/Profil";
import Notification from "../Screens/Notification";
import Search from "../Screens/Search";
import Anggota from "../Screens/Anggota";
import Informasi from "../Screens/Informasi";
import Event from "../Screens/Event";
import Registrasi from "../Screens/Registrasi";
import Visimisi from "../Screens/Visimisi";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  // let colorSelected = focused ? color : 'grey'
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'ios-home'
            : 'ios-home';
        } else if (route.name === 'Search') {
          iconName = focused ? 'ios-search' : 'ios-search';
        } else if (route.name === 'Notification') {
          iconName = focused ? 'notifications' : 'notifications';
        }else{
          iconName = focused ? 'ios-person' : 'ios-person';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#00005C',
      tabBarInactiveTintColor: 'gray',
    })}
    tabBarOptioon={{
      style: {
        backgroundColor: 'yellow',
      },
    }}
    >
      <Tab.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Tab.Screen name="Search" component={Search} options={{headerShown:false}}/>
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Profil" component={Profil} options={{headerShown:false}}/>
    </Tab.Navigator>
  );
};

const RouterNav = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Home" component={MainApp} options={{headerShown:false}}/>
      <Tab.Screen name="Anggota" component={Anggota}/>
      <Tab.Screen name="Informasi" component={Informasi}/>
      <Tab.Screen name="Event" component={Event}/>
      <Tab.Screen name="Registrasi" component={Registrasi}/>
      <Tab.Screen name="Visimisi" component={Visimisi} options={{headerShown:true}}/>
    </Stack.Navigator>
  );
};

export default RouterNav;

const styles = StyleSheet.create({});
