import React, { Component } from "react";
import {
  Platform,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  ScrollView
} from "react-native";

export default class DetailsScreen extends React.Component {
    constructor(props){
      super(props);
        this.state={
          newsShow: true,
          NEWS_Data:[{"heading":"NOVILE VIRUS SPREAD Issue",
          "Desctiption":"“Shortages of the most basic protective equipment leave doctors, nurses and other frontline workers dangerously vulnerable as they care for COVID-19 patients,” Dr. Etienne said in a press briefing today.  "}
          ,{"heading":"COVID - 19","Desctiption":"The PAHO Director said, “A pandemic like COVID-19 would overwhelm any health system, but its impact on those without sufficient health workers will be devastating.” "}
          ,{"heading":"HOSPITAL MANAGEMENT","Desctiption":"The coronavirus is spreading around the world exponentially. Governments, healthcare providers, and businesses are introducing drastic measures to slow down the spreading of the virus. "}
          ,{"heading":"PATIENTS DAY BY DAY","Desctiption":"This group of players is currently in the first line of fighting the pandemic."}
          ,{"heading":"DEATHS CASES","Desctiption":"This group of players is currently in the first line of fighting the pandemic."}
          ,{"heading":"RECOVERY CASES","Desctiption":"Even though the first wave of the COVID-19 pandemic might end in a few weeks or months, we will be much better prepared to manage the potential"}
          ,{"heading":"FACILITIES PROVIDED","Desctiption":"We must also care for our health workers through support networks that allow them to preserve their mental and physical health. "}
          ,{"heading":"STATE WISE MANAGEMENT ","Desctiption":"Countries must work together to ensure that supply chains are able to deliver protective equipment to the hospitals and health centers who need it most. Solidarity and coordination among countries will be essential to ensure we make the most of the limited supplies available."}
          ,{"heading":"GOVERNMENT STEPS ","Desctiption":"For them, this might provide a long-awaited opportunity to enter the digital health market. This is especially true for diagnostic arms and respiratory franchises of those companies."}]
        }
    }

    hidenewsShow = () => {
      this.setState({ newsShow: !this.state.newsShow });
    };

    keyExtractor = (item, index) => index + "";
    renderItem = ({ item }) => {
      if (!item) return;
      return (
        <View style={{
          padding:10,
          left:0
         }}>
          <View>
            <Text style={{ fontSize: 16 ,justifyContent:'flex-start'}}>{item.heading}</Text>
          </View>
          <View>
          <Text style={{ fontSize: 12 ,justifyContent:'flex-end'}}>{item.Desctiption}</Text>
          </View>
        </View>
      );
    };

  render() {
    let assignToData =
      this.state.NEWS_Data.length > 2 && this.state.newsShow
        ? this.state.NEWS_Data.slice(0, 2)
        : this.state.NEWS_Data;
        console
    return (
      <View style={{ flex:1,justifyContent: "center", alignItems: "center",padding:8}}>
        <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
          {
            this.state.NEWS_Data.length > 2
              ? <View >
                <View style={{ borderBottomColor: '#DDDADA',
                            borderBottomWidth:1}}>
                  <Text style={{ color: '#666',
                  fontSize: 20,
                  fontWeight: 'bold',
                  fontFamily: 'Roboto-Medium',
                  paddingVertical:10,
                  paddingHorizontal:0}}>News Feed</Text>
                </View>
                <View>
                  <FlatList
                    data={assignToData}
                    extraData={this.state}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                  />
                  <TouchableWithoutFeedback
                    onPress={this.hidenewsShow}
                  >
                    <View>
                    <Text>{this.state.newsShow ? "<" : ">" }</Text>
                      <Text>
                        {this.state.newsShow
                          ? "Read More (" +
                          this.state.NEWS_Data.length +
                          ") Feeds"
                          : "Read Less"}
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              </View>
              : null
          }

</ScrollView>
      </View>
    );
  }
}
