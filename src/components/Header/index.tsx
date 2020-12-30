import React from 'react';
import { Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import colors from '../../styles/colors';
import minhFoto from '../../images/minhaFoto.jpg'

import { Container,Avatar,OnlineStatus,RightSide,Button } from './styles';
import { ViewBase } from 'react-native';
import { View } from 'react-native';

const Header: React.FC = () => {
  return (
    <Container>
      <View>
        <Avatar source={minhFoto} />
        <OnlineStatus />
      </View>
      <RightSide>
        <Button>
          <MaterialIcons
            name="notifications-none"
            size={26}
            color={colors.black} />
        </Button>

        <Button>
          <MaterialCommunityIcons
            name="message-outline"
            size={26}
            color={colors.black} />
        </Button>

        <Button>
          <Feather
            name="search"
            size={26}
            color={colors.black} />
        </Button>

      </RightSide>
    </Container>
  );
};

export default Header;
