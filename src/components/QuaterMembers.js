import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  Image,
  ListView,
  ScrollView
} from 'react-native'
import QuaterMember from './QuaterMember';
import { Container, Content } from 'native-base';

export default class QuaterMembers extends Component {
    constructor(props) {
        super(props)
        console.log(this.props.members)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.props.members),
        };
    }

    renderRow = (rowData) => {
        return <QuaterMember imagePath={rowData.user.image_path} name={rowData.username} isCaptain={rowData.is_captain} />
    }
  render() {
    return (
        <ListView
        contentContainerStyle={styles.listView}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => this.renderRow(rowData)} />
    );
  }
}

const styles = StyleSheet.create({
    listView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    } 
});