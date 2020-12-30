import React from 'react';

import streamThumbnail from '../../images/stream_thumbnail.jpg'
import data from '../CategoryList/data';
import minhaFoto from '../../images/minhaFoto.jpg';

import { StreamContainer,StreamThumbnail,StreamColumn,StreamRow,StreamHeader,
  StreamAvatar,StreamUserName,TagRow,TagView,TagText,List,StreamDescription,StreamCategory} from './styles';

  interface ItemProps {
    item: typeof data[0];
  }

const StreamList: React.FC = () => {
  const StreamItem:React.FC<ItemProps> = ({item}) => (
    <StreamContainer>
      <StreamThumbnail source={item.source} />
      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar  source={minhaFoto}/>
            <StreamUserName numberOfLines={1} >Igor_Amantino</StreamUserName>
          </StreamHeader>
            <StreamDescription numberOfLines={1} >{item.label}</StreamDescription>
          <StreamCategory numberOfLines={1} >
              Science & Technology
          </StreamCategory>
        </StreamRow>

        <TagRow>
          <TagView>
            <TagText>Portuguese</TagText>
          </TagView>
          <TagView>
            <TagText>{item.Category}</TagText>
          </TagView>
        </TagRow>
      </StreamColumn>
    </StreamContainer>
  );

  return (
    <List>
      {data.map(item =>(
        <StreamItem key={item.name} item={item} />
      ))}
    </List>
  );
};

export default StreamList;
