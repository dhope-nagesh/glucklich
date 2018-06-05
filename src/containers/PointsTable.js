import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import ProgressCircle from 'react-native-progress-circle'

export default class ExampleTwo extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: 'Points Table',
    headerTitleStyle: {
      fontSize: 18,
      width: '100%'
    }
  };
 
  render() {
    const width = Dimensions.get('window').width
    const cardWidth = (width / 2) - 30;
    let points = this.props.navigation.state.params.points;
    const tableTitle = Object.keys(points).map((v) => v.toUpperCase())
    const tableData = Object.values(points).map((v) => [v.score__sum ? v.score__sum : 0])

    return (
      <View style={styles.container}>
      <ProgressCircle
            percent={30}
            radius={cardWidth/2}
            borderWidth={8}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
        >
            <Text style={{ fontSize: 18 }}>{'30%'}</Text>
        </ProgressCircle>
        <ProgressCircle
            percent={30}
            radius={cardWidth/2}
            borderWidth={8}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
        >
            <Text style={{ fontSize: 18 }}>{'30%'}</Text>
        </ProgressCircle>
        <ProgressCircle
            percent={30}
            radius={cardWidth/2}
            borderWidth={8}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
        >
            <Text style={{ fontSize: 18 }}>{'30%'}</Text>
        </ProgressCircle>
        <ProgressCircle
            percent={30}
            radius={cardWidth/2}
            borderWidth={8}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
        >
            <Text style={{ fontSize: 18 }}>{'30%'}</Text>
        </ProgressCircle>
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