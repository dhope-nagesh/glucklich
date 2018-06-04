import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

export default class NewsFeed extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const feed = this.props.feed
    const schedule = new Date(feed.schedule)
    console.log(feed, 'feedddd')
    return (
      <Card>
      <CardItem>
        <Left>
          <Thumbnail source={require('../assets/glucklich-logo.jpeg')} />
          <Body>
            <Text>{feed.name}</Text>
            <Text note>{feed.description}</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem cardBody>
        <Image source={require('../assets/points-table.png')} style={{height: 200, width: null, flex: 1}}/>
      </CardItem>
      <CardItem>
        <Left>
          <Button transparent>
            <Icon active name="arrow-back" />
            <Text>{feed.comment_set?feed.comment_set.length:0} Comments</Text>
          </Button>
        </Left>
        <Right>
          <Text>{`${schedule.getDate()}-${schedule.getMonth()}-${schedule.getFullYear()} @ ${schedule.getHours()}:${schedule.getMinutes()}`}</Text>
        </Right>
      </CardItem>
    </Card>
    );
  }
}