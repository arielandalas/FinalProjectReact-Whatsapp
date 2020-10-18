import React, { Component } from 'react';
import {  ListItem,
    Left,
    Thumbnail,
    Body,
    Content,
    Text,
    Container,
    Fab,
    Icon,
    Button } from 'native-base';
import {StatusBar} from 'react-native';
import appStyles from '../appStyles';

export default class StatusScreen extends Component {
    constructor(props){
        super(props);
        setTimeout(() => {
          StatusBar.setBackgroundColor('#128C7E');
        }, 100);
        this.state = {
            active: false,
          };
      }
      render() {
        return (
          <Container>
            <Content>

              <ListItem avatar noBorder>
                <Left>
                  <Thumbnail
                    source={{
                      uri:
                        'https://scontent.fkno3-1.fna.fbcdn.net/v/t1.0-9/119666498_4393894350684698_14644550953382699_o.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_eui2=AeG0mu6ZMS3szICgmRKQ9eJuk7M8UMD7toyTszxQwPu2jKQFB6eBmv_v5DMFS8IDutsOTHhlPQ28_oeh3py9GwJ1&_nc_ohc=rit8dt_0HMEAX-r2J88&_nc_ht=scontent.fkno3-1.fna&oh=7986c6c328372649975791c2e26baddc&oe=5FB2FF62',
                    }}
                  />
                  <Icon
                    type="MaterialIcons"
                    name="add-circle"
                    style={appStyles.addStatusIcon}
                  />
                </Left>
                <Body>
                  <Text>My Status</Text>
                  <Text note>4 mintues ago</Text>
                </Body>
              </ListItem>


              <ListItem itemDivider style={appStyles.listItemDivider}>
                <Text note style={{fontSize: 12}}>
                  Recent Updates
                </Text>
              </ListItem>


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
                  <Text note>Today, 11:24 pm</Text>
                </Body>
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
                  <Text note>Today, 10:12 pm</Text>
                </Body>
              </ListItem>

            </Content>
            
            <Fab
              style={appStyles.fabColor}
              active={true}
              direction="up"
              position="bottomRight">
              <Icon type="MaterialIcons" name="photo-camera" />
              <Button style={{backgroundColor: '#F5F5F5'}}>
                <Icon type="MaterialIcons" name="edit" style={{color: '#075E54'}} />
              </Button>
            </Fab>
          </Container>
        );
      }
    }