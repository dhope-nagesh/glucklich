import React from 'react';
import { StyleSheet,View,Image,Text} from 'react-native';
import { Bars, Bubbles } from 'react-native-loader';

const Loader = () => (
<View style={{flex: 1}}>
  <Bubbles size={10} color='blue' />
  <Text>Loading...</Text>
</View>
)

export default Loader;
