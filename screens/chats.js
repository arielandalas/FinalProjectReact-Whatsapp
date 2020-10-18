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
    Icon, 
  } from 'native-base';
import {StatusBar} from 'react-native';
import appStyles from '../appStyles';

export default class ChatsScreen extends Component {
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
                        'https://scontent.fkno3-1.fna.fbcdn.net/v/t1.0-9/39077856_2066930653382298_6226187739939733504_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_eui2=AeGLpSvkXAFVPiWnY2PaDvzCL_dH4oAmkM8v90figCaQz6I6yto_eLKG4iXb1jpJlfDVg2iEO5b6JBRmHtCHMEdj&_nc_ohc=_0pQ2Nv-hGsAX8CHSIo&_nc_ht=scontent.fkno3-1.fna&oh=9d6d4f662e0a9eb2d7f5fb44b015148b&oe=5FB34772',
                    }}
                  />
                </Left>
                <Body>
                  <Text>Fachru Dahri</Text>
                  <Text note>Sehat Bro?</Text>
                </Body>
                <Right>
                  <Text note style={{color: '#25D366'}}>
                    3:43 pm
                  </Text>
                  <Badge style={appStyles.badgeChats}>
                    <Text style={appStyles.badgeTextChats}>1</Text>
                  </Badge>
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
                  <Text note>100 Juta udah di TF?</Text>
                </Body>
                <Right>
                  <Text note style={{color: '#25D366'}}>
                    3:43 pm
                  </Text>
                  <Badge style={appStyles.badgeChats}>
                    <Text style={appStyles.badgeTextChats}>4</Text>
                  </Badge>
                </Right>
              </ListItem>


              {/* <ListItem avatar>
                <Left>
                  <Thumbnail
                    source={{
                      uri:
                        'https://s3.amazonaws.com/uifaces/faces/twitter/vicivadeline/128.jpg',
                    }}
                  />
                </Left>
                <Body>
                  <Text>Brian</Text>
                  <Text note>How are you Harinder?</Text>
                </Body>
                <Right>
                  <Text note>3:43 pm</Text>
                </Right>
              </ListItem> */}


              {/* <ListItem avatar>
                <Left>
                  <Thumbnail
                    source={{
                      uri:
                        'https://s3.amazonaws.com/uifaces/faces/twitter/naitanamoreno/128.jpg',
                    }}
                  />
                </Left>
                <Body>
                  <Text>Michael</Text>
                  <Text note>How are you Harinder?</Text>
                </Body>
                <Right>
                  <Text note>3:43 pm</Text>
                </Right>
              </ListItem> */}


            </Content>
            <Fab style={appStyles.fabColor} position="bottomRight">
              <Icon type="MaterialIcons" name="chat" />
            </Fab>
          </Container>
        );
      }
    }