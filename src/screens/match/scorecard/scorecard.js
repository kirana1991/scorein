import React,{useEffect, useState} from 'react'
import { View,
    Text,
    FlatList,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
     } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'	
import { fetchMatchScorecardData } from './matchScorecardReducer'
import style from './styles'
import Accordion from 'react-native-collapsible/Accordion';
import Loader from '../../../components/loader'
import Icon from "react-native-vector-icons/MaterialIcons";


export default function Scorecard(props) {

    const [activeSections, setActiveSections] = useState([0]);
 
  const [collapsed, setCollapsed] = useState(true);


  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(fetchMatchScorecardData(props.route.params.matchId))
  }, [scorecard])

  const {scorecard, loading}  = useSelector((state) => state.matchScorecardScreen);




  const setSections = (sections) => {
    //setting up a active section state
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  const renderHeader = (section, _, isActive) => {
    //Accordion Header view
    return (
      <View style={style.inningHeaderContainer}>
                <Text style={style.inningHeaderTeamName}>{section.team_name}</Text>
                <Text style={style.inningHeaderTeamScore}>{`${section.runs}-${section.wicket} (${section.overs})`}</Text>
                <Icon name={isActive ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={20} color='white' />
            </View>
    );
  };
    
      const renderContent = (section, _, isActive) => {
        //Accordion Content view
        const yet_to_bat = section.yet_to_bat;
        const yetToBatPlayers = yet_to_bat.toString()
        return (
          <View
           
            style={[ isActive ? style.active : style.inactive]}
            transition="backgroundColor">
            
              {renderBatting(section.batting)}
              {renderExtras(section.extra)}
              {renderTotal(section)}
              {renderYetToBat(yetToBatPlayers.replace(/,/g,', '))}
              {renderBowling(section.bowling)}
              {renderFallOfWickets(section.fall_of_wickets)}


            
          </View>
        );
      };
      
      const renderBatting = (data) => {
        return (
            <View>
                <View style={style.sectionHeaderContainer}>
                   
                    <Text style={style.sectionHeaderRole}>Batsman</Text>
                    
                    <Text style={style.sectionHeaderPoint}>R</Text>
                    <Text style={style.sectionHeaderPoint}>B</Text>
                    <Text style={style.sectionHeaderPoint}>4s</Text>
                    <Text style={style.sectionHeaderPoint}>6s</Text>
                    <Text style={style.sectionHeaderPoint}>SR</Text>
                </View>
                <FlatList
                    data={data}
                    renderItem={renderBattingPoints}
                    ItemSeparatorComponent={_Separator}
                    keyExtractor={(item, index) => (index.toString())} />
            </View>
        )
    }

    const renderBattingPoints = ({ item }) => (
      <View style={style.pointsContainer}>
      
          <TouchableOpacity style={style.battingPlayer} activeOpacity={0.5} onPress={() => viewPlayerStats(item.player_id)}>
              <Text style={style.batsmanName}>{item.player_name}</Text>
              <Text style={style.battingStatus}>{item.batting_status}</Text>
          </TouchableOpacity>
              
  
          <Text style={style.points}>{item.runs}</Text>
          <Text style={style.points}>{item.balls}</Text>
          <Text style={style.points}>{item['4s']}</Text>
          <Text style={style.points}>{item['6s']}</Text>
          <Text style={style.points}>{item.strike_rate}</Text>
      </View>
  )

  const renderExtras = (extra) => {
    return (
        <View >
            {_Separator()}
            <View style={style.inningExtraContainer}>
                <Text style={style.extraTitle}>Extras</Text>
                <Text style={style.extraScore}>{extra.extra_score}</Text>
                <Text style={style.extraDetails}>{extra.extra_detail}</Text>
            </View>
            {_Separator()}
        </View>
    )
}

const renderTotal = (data) => {
    return (
        <View style={style.inningTotalContainer}>
            <Text style={style.inningTotalText}>Total</Text>
            <Text style={style.inningHeaderScore}>
            {`${data.runs}-${data.wicket} (${data.overs})`}</Text>
        </View>
    )
}

const renderYetToBat = (data) => {
    return (
        <View>
            {_Separator()}
            <View style={style.yetToBatContainer}>
                <Text style={style.yetToBatHeaderRole}>Did Not Bat</Text>
            </View>
            <View style={style.yetToBatPlayerContainer}>
                <Text style={style.yetToBatPlayersList}>{data}</Text>
            </View>
            {_Separator()}
        </View>
    )
}

const renderFallOfWickets = (data) => {
    return (
        <View>
            <View style={style.sectionHeaderContainer}>
                <Text style={style.sectionHeaderRole}>Fall of Wickets</Text>
                <Text style={style.sectionHeaderPoint}>Srore</Text>
                <Text style={style.sectionHeaderPoint}>Over</Text>
            </View>
            <FlatList
                data={data}
                renderItem={renderWicketsFall}
                ItemSeparatorComponent={_Separator}
                keyExtractor={(item, index) => (index.toString())} />
        </View>
    )
}

const renderBowling = (data) => {
    return (
        <View>
            <View style={style.sectionHeaderContainer}>
                <Text style={style.sectionHeaderRole}>Bowler</Text>
                <Text style={style.sectionHeaderPoint}>O</Text>
                <Text style={style.sectionHeaderPoint}>M</Text>
                <Text style={style.sectionHeaderPoint}>R</Text>
                <Text style={style.sectionHeaderPoint}>W</Text>
                <Text style={style.sectionHeaderPoint}>ER</Text>
            </View>
            <FlatList
                data={data}
                renderItem={renderBowlingPoints}
                ItemSeparatorComponent={_Separator}
                keyExtractor={(item, index) => (index.toString())} />
        </View>
    )
}

const renderBowlingPoints = ({ item }) => (
  <View style={style.pointsContainer}>
      <Text style={style.playerName}>{item.player_name}</Text>
      <Text style={style.points}>{item.overs}</Text>
      <Text style={style.points}>{item.maiden}</Text>
      <Text style={style.points}>{item.runs}</Text>
      <Text style={style.points}>{item.wicket}</Text>
      <Text style={style.points}>{item.economy_rate}</Text>
  </View>
)

const renderWicketsFall = ({ item }) => (
  <View style={style.pointsContainer}>
      <Text style={style.playerName}>{item.player_name}</Text>
      <Text style={style.points}>{item.score}</Text>
      <Text style={style.points}>{item.overs}</Text>
  </View>
)

  const viewPlayerStats = (player) => {
    props.navigation.navigate('PlayerProfile', { player })
}

const _Separator = () => <View style={style.separator} />
console.log(scorecard);
      return (
        <ScrollView>

        { loading &&  <Loader/>}
        { !loading && scorecard.innings &&
            <View >
              <Text style={style.matchStatus}>
                  {scorecard.match_status}
              </Text>
              
                
              <Accordion
              activeSections={activeSections}
              sections={scorecard.innings}
              touchableComponent={TouchableOpacity}
              expandMultiple={true}
              renderHeader={renderHeader}
              renderContent={renderContent}
              duration={100}
              onChange={setSections}
              renderAsFlatList={false}
            />
                
                {/*Code for Accordion/Expandable List ends here*/}
              
            </View>
        }     
        </ScrollView>
      );
}

