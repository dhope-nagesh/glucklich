import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import ProgressCircle from 'react-native-progress-circle'

export default class ExampleTwo extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: 'Standings',
    headerTitleStyle: {
      fontSize: 18,
      width: '100%'
    }
  };
 
  render() {
    const width = Dimensions.get('window').width
    const cardWidth = (width / 2) - 30;
    let points = this.props.navigation.state.params.points;
    const tableData = Object.values(points).map((v) => v.score__sum?v.score__sum:0)
    const sum = tableData.reduce((a, c) => a + c, 0)

    const renderCircles = Object.keys(points).map((v, index) => {
      const point = points[v].score__sum?points[v].score__sum:0
      const quarter = v.toUpperCase()
      return (
        <View
        style={{
          margin: 10,
        }}>
          <ProgressCircle
          key={index}
          percent={(point/sum) * 100}
          radius={cardWidth/2 - 10}
          borderWidth={10}
          color="#3399FF"
          shadowColor="lightgrey"
          bgColor="#fff">
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 40 }}>{quarter}</Text>
              <Text style={{ fontSize: 40 }}>{point}</Text>
            {/* {`${quarter}\n${point}`} */}
            </View>
        </ProgressCircle>
        </View>
      )
    })
    return (
      <View style={styles.container}>
      {renderCircles}
      </View>
    )
  }
}
 
const width = Dimensions.get('window').width
const cardWidth = (width / 2) - 30

const styles = StyleSheet.create({
  container: { 
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10
   },
  head: {  height: 40,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: 28  },
  text: { textAlign: 'center' },
  card: {
    width: cardWidth,
    marginTop: 10
  },
  image: {
    width: cardWidth,
    height: cardWidth,
    borderRadius: cardWidth / 2,
    borderColor: 'blue',
    borderWidth: 4,
  },
  circleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  lower: {
    height: cardWidth / 2,
    width: cardWidth - (cardWidth * 0.2),
    borderTopWidth: 2,
    borderStyle: 'dashed',
    borderColor: 'red',
    textAlign: 'center'
  },
  upper: {
    height: cardWidth / 2,
    
  },
  textContainer: {
    
  }
});
