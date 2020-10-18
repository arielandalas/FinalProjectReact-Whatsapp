import React, { Component } from 'react';
import { ListItem,
    Left,
    Thumbnail,
    Body,
    Right,
    Content,
    Text,
    Badge,
    Container,
    Fab,
    Icon, } from 'native-base';
import {StatusBar} from 'react-native';
import appStyles from '../appStyles';
import {View} from 'react-native';

export default class CallsScreen extends Component {
    constructor(props){
        super(props);
        setTimeout(() => {
          StatusBar.setBackgroundColor('#128C7E');
        }, 100);
      }
      render() {
        return (
          <Container>
            <Content>
              <ListItem avatar>
                <Left>
                 <Thumbnail
                    source={{
                      uri:
                        'https://scontent.fkno3-1.fna.fbcdn.net/v/t1.0-9/49523737_1126604254179703_8429163340361629696_o.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_eui2=AeHRYr26rTbcvyhsBkN9YhY0LokTg1Pe4fAuiRODU97h8LA0QktrdghCXUgNQRwRTFuY2J0kaS3yfffw6l1CcC9B&_nc_ohc=K6qjwb7xkFcAX8Sez5v&_nc_ht=scontent.fkno3-1.fna&oh=d24f8cec41ace3a8d1fc41cca8e0c0c1&oe=5FB1D716',
                    }}
                  />
                </Left>
                <Body>
                  <Text>Jaka</Text>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Icon
                      type="MaterialIcons"
                      name="call-made"
                      style={[appStyles.callIcon, {color: '#25D366'}]}
                    />
                    <Text note>Yesterday, 08:23 pm</Text>
                  </View>
                </Body>
                <Right>
                  <Icon
                    style={{color: '#075E54'}}
                    type="MaterialIcons"
                    name="call"
                  />
                </Right>
              </ListItem>
              <ListItem avatar>
                <Left>
                 <Thumbnail
                    source={{
                      uri:
                        'https://scontent.fkno3-1.fna.fbcdn.net/v/t1.0-9/49523737_1126604254179703_8429163340361629696_o.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_eui2=AeHRYr26rTbcvyhsBkN9YhY0LokTg1Pe4fAuiRODU97h8LA0QktrdghCXUgNQRwRTFuY2J0kaS3yfffw6l1CcC9B&_nc_ohc=K6qjwb7xkFcAX8Sez5v&_nc_ht=scontent.fkno3-1.fna&oh=d24f8cec41ace3a8d1fc41cca8e0c0c1&oe=5FB1D716',
                    }}
                  />
                </Left>
                <Body>
                  <Text>Jaka</Text>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Icon
                      type="MaterialIcons"
                      name="call-received"
                      style={[appStyles.callIcon, {color: '#FF0000'}]}
                    />
                    <Text note>Yesterday, 08:23 pm</Text>
                  </View>
                </Body>
                <Right>
                  <Icon
                    style={{color: '#075E54'}}
                    type="MaterialIcons"
                    name="videocam"
                  />
                </Right>
              </ListItem>
            </Content>
            <Fab style={appStyles.fabColor} position="bottomRight">
              <Icon type="MaterialIcons" name="phone-in-talk" />
            </Fab>
          </Container>
        );
      }
    }