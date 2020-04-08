import React, { Component } from "react";
import { Image, Dimensions } from 'react-native';
import ImageViewer from '@dwqs/react-native-image-viewer';

export default class ProfileScreen extends React.Component {
  constructor(props){
    super(props)
    this.state={
      shown:true,
        curIndex:0
    }
  }
  closeViewer=()=>{
    this.setState({
        shown:false,
        curIndex:0
    })
    this.props.navigation.navigate("Settings")
}
    render() {
      let imgsArr = [
        'https://facebook.github.io/react/logo-og.png',
        'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
        'http://img.sc115.com/uploads1/sc/jpgs/1508/apic22412_sc115.com.jpg',
        'http://h.hiphotos.baidu.com/zhidao/pic/item/0df431adcbef7609bca7d58a2adda3cc7cd99e73.jpg'
    ];
    
  
        return (
          <ImageViewer shown={this.state.shown}
          imageUrls={imgsArr}
          onClose={this.closeViewer}
          index={this.state.curIndex}>
</ImageViewer>
        )
    }
}