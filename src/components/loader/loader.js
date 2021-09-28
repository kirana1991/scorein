import React,{ useState} from 'react'
import { Modal, View, Text, ActivityIndicator } from 'react-native';


export default function Loader(props) {

    const [visible,setVisible] = useState(props.visible);

    const handleOnRequestClose = () =>{
        if (props.cancelable) {
            close();
        }
    }

    close = () => {
        setVisible(false);
    }

    return (
        <Modal transparent={true} visible={visible} onRequestClose={() => handleOnRequestClose()}>

            <View style={{ flex: 1, backgroundColor: 'rgba(50,50,50,0.70)', justifyContent: 'center', alignItems: 'center' }}>

                <View style={{ height: 150, width: 150, backgroundColor: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator
                        color={props.spinnerColor}
                        size={Platform.OS === 'android' ? 50 : 'large'}
                    />
                    <Text style={{ marginTop: 15, fontSize: 16, color: props.titleColor }}> Please wait </Text>
                </View>
            </View>

        </Modal>
    )
}
