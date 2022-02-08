import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Image, Alert } from 'react-native'
import style  from './styles'
import VersionCheck from 'react-native-version-check';

export default function SplashScreen({ navigation }) {
    const currentVersion = VersionCheck.getCurrentVersion();
    const latestVersion = VersionCheck.getLatestVersion().then(latestVersion => {
        console.log(latestVersion);  
    });
    useEffect(() => {
        const updateCheck = checkversion();
        navigateToHomeScreen();
    }, [])

    const navigateToHomeScreen = () => {      
        setTimeout(() => {
            navigation.navigate('Home')
        }, 3000);
    }
   
    console.log(currentVersion);

    const checkversion = () =>{
       if(latestVersion > currentVersion)
       {
        Alert.alert(
            "Update Now",
            "My Alert Msg",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );
       }
       return false
    }
    return (
        <SafeAreaView style={style.safeArea}>
            <View style={style.container}>
                <Image
                    style={style.logo}
                    source={require('./../../../assets/images/logo.png')} />
                <Image
                    style={style.scoreIn}
                    source={require('./../../../assets/images/scorein.png')} />
            </View>
        </SafeAreaView>
    )
}
