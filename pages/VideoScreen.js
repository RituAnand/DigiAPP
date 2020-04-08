import React, { Component } from 'react';
import { View, Text, Button,StyleSheet,ScrollView } from 'react-native';


  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    videoContainer: {
      margin: 10
    }
  })

  export default class VideoScreen  extends React.Component {

    render() {
      return (
        <ScrollView style={styles.container}>

          <Text>video1 content above</Text>

          <Text>Implementation Remaining</Text>

          <Text>video2 content below</Text>

        </ScrollView>
      )
    }
  }