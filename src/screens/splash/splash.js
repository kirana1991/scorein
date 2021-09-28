import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Image} from 'react-native'
import style  from './styles'
import DeviceInfo from 'react-native-device-info';

export default function SplashScreen({ navigation }) {

    useEffect(() => {

        navigateToHomeScreen();
    }, [])

    const navigateToHomeScreen = () => {
        const deviceInfo = DeviceInfo.getDeviceId();
        
        setTimeout(() => {
            navigation.navigate('Home')
        }, 3000);
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
