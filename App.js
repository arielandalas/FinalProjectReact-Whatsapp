import React, { Component } from 'react';
import { 
  Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,
 Tabs, Tab, TabHeading, Badge} from 'native-base';

  import {StatusBar} from 'react-native';
  import appStyles from './appStyles';
  import ChatsScreen from "./screens/chats";
  import StatusScreen from "./screens/status";
  import CallsScreen from "./screens/calls";

  export default class App extends Component {
  constructor(props){
    super(props);
    setTimeout(() => {
      StatusBar.setBackgroundColor('#128C7E');
    }, 100);
  }
  render() {
    return (
      <Container>
        <Header noLeft style={appStyles.headerBackgroundColor}>
          <Body>
            <Title style={appStyles.appTitle}>WhatsApp</Title>
          </Body>
          <Right>
            <Button trasnparent style={{backgroundColor: '#075E54'}}>
              <Icon type="MaterialIcons" name="search"/>
            </Button>
            <Button trasnparent style={{backgroundColor: '#075E54'}}>
              <Icon type="MaterialIcons" name="more-vert"/>
            </Button>
          </Right>
        </Header>

        <Tabs 
          initialPage={1} tabBarBackgroundColor="#075E54"
          tabContainerStyle={{elevation: 0}}
          tabBarUnderlineStyle={appStyles.tabBarUnderLine}>
          
          <Tab heading={
            <TabHeading style={{backgroundColor: '#075E54'}}>
              <Icon name="photo-camera" type="MaterialIcons" />
            </TabHeading>}>
            <Text 
              style={{
                textAlign: 'center',
                flex: 1,
                textAlignVertical: 'center',
              }}>
                Camera Screen
              </Text>
          </Tab>

          <Tab heading={
            <TabHeading style={{backgroundColor: '#075E54'}}>
              <Text style={appStyles.tabsText}>CHATS</Text>
              <Badge style={appStyles.badge}>
                <Text style={appStyles.badgeStyle}>2</Text>
              </Badge>
            </TabHeading>}>
                <ChatsScreen />
          </Tab>

          <Tab heading={
            <TabHeading style={{backgroundColor: '#075E54'}}>
              <Text style={appStyles.tabsText}>STATUS</Text>
            </TabHeading>}>
              <StatusScreen />
          </Tab>

          <Tab heading={
            <TabHeading style={{backgroundColor: '#075E54'}}>
              <Text style={appStyles.tabsText}>CALLS</Text>
            </TabHeading>}>
              <CallsScreen />
            
          </Tab>
          

        </Tabs>
        <Content>

        </Content>
      </Container>
    );
  }
}