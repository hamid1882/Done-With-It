import { useState,useRef } from 'react';
import {
  Text, 
  View,
  StyleSheet,
  Pressable,
  Image,
  DrawerLayoutAndroid,Button,
  SafeAreaView
  } from 'react-native';
import Homepage from "./Components/Homepage";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './Components/Main';


export default function App() {
  

  const Stack = createNativeStackNavigator();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const drawer = useRef(null);

  const handleDrawer = (event) => {
    if(event === "opened") {
      setIsDrawerOpen(true);
    } else if(event === "closed") {
      setIsDrawerOpen(false)
    }
  }

  const navigationView = () => (
    <SafeAreaView>
      <Text>hamid</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </SafeAreaView>
  );

  return (
    <NavigationContainer>
      <>
       <DrawerLayoutAndroid
               ref={drawer}
               drawerWidth={200}
               drawerPosition={"right"}
               renderNavigationView={navigationView}
               drawerBackgroundColor="brown"
               onDrawerOpen={() => handleDrawer("opened")}
               onDrawerClose={() => handleDrawer("closed")}
               >
           <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={Main}
          />
             <Stack.Screen 
              name="Homepage" 
              component={Homepage} 
              options={{
                headerRight: () => (
                  <Pressable 
                  onPress={() => drawer.current.openDrawer()}
                  >
                  <Image 
                    source={isDrawerOpen ? require("./assets/menu-active.png") : require("./assets/menu-not-active.png")} 
                    style={styles.MoreIcon} />
                </Pressable>
                ),
              }}
              />
           </Stack.Navigator>
         </DrawerLayoutAndroid>
      </>
   </NavigationContainer>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efefef",
  },
  Topbar: {
    width: "100%",
    flex: 0.1,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: "row",
    marginBottom: -40
  },
  Logo: {
    color: "#0084ff",
    fontSize: 20,
    fontFamily: "sans-serif",
    fontWeight: "bold"
  },
  MoreIcon: {
    width: 25,
    height: 25,
  },
});