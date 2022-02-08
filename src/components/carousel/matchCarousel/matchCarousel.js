import React,{ useState, useRef, useEffect  } from 'react'
import { ScrollView, View, Text } from 'react-native'
import style from './styles'
import  { THEME_PRIMARY } from './../../../utils/constant'

export default function MatchCarousel(props, {navigation}) {

  var DOT_SIZE = 6;
  var DOT_SAPCE = 4;
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [initialSelectedIndex, setInitialSelectedIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollViewRef = useRef();
  const caraouselIndicator = [];

  adjustCardSize = (e) => {
    setWidth(e.nativeEvent.layout.width);
    setHeight(e.nativeEvent.layout.height);
  }

  handleHorizontalScroll = (e) => {
    let selectedIndex = e.nativeEvent.position;

    selectedIndex = Math.round(
        e.nativeEvent.contentOffset.x / width,
    );
    setSelectedIndex(selectedIndex); 
  }

  const renderIndicator = (item) => {
    const caraouselIndicator = [];
    for (var i = 0; i < item.length; i++) {
        caraouselIndicator.push(
            <View style={{
                width: DOT_SIZE,
                height: DOT_SIZE,
                borderRadius: DOT_SIZE / 2,
                backgroundColor: '#E0E1E2',
                marginLeft: DOT_SAPCE,
                marginRight: DOT_SAPCE,
                opacity: selectedIndex === i ? 1.0 : 0.7,
                backgroundColor: selectedIndex === i ? THEME_PRIMARY : 'grey'
            }} key={'idc_' + i} />
        );
    }
    return caraouselIndicator;
    
  }



  const renderItems = () => {
    return props.data.map((item, index) => {
        return (<View style={{
            width: width,
            alignContent: 'center',
            justifyContent: 'center'
        }}
            key={index}>
            {item}
        </View>)
    })
  }

  
    return (
      <View style={props.style}>
                <ScrollView style={style.matchScrollView}
                    contentOffset={{
                        x: width * initialSelectedIndex,
                        y: width * initialSelectedIndex,
                    }}
                    ref={scrollViewRef}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    horizontal={true}
                    scrollEnabled={(props.data && props.data.length > 1) ? true : false}
                    onLayout={adjustCardSize}
                    scrollEventThrottle={10}
                    removeClippedSubviews={true}
                    automaticallyAdjustContentInsets={false}
                    onScroll={handleHorizontalScroll}
                    pagingEnabled={true}>
                    {renderItems()}
                </ScrollView>

                {((props.data && props.data.length > 1)) ?
                    <View style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                        alignSelf: 'center',
                        backgroundColor: 'transparent'
                    }}>
                        {renderIndicator(props.data)}
                    </View> : null}
            </View>
  )
}
