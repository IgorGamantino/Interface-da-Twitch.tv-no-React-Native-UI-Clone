import React from 'react';

import { Text } from 'react-native';
import data from './data';

import { List,Container,CategoryContainer,CategoryImage,CategoryName,CategoryStatus,
  RedCircle,Info} from './styles';

interface ItemProps {
  item: typeof data[0];
}


const CategoryList: React.FC = () => {
  const CategotyItem: React.FC<ItemProps> = ({item}) => (
    <CategoryContainer>
      <CategoryImage source={item.source} />
      <CategoryName numberOfLines={1} >{item.name}</CategoryName>
      <CategoryStatus>
        <RedCircle />
        <Info>{item.info}</Info>

      </CategoryStatus>

    </CategoryContainer>
  )
  return (
    <List>
      {data.map(item =>(
        <CategotyItem key={item.name} item={item} />
      ))}
    </List>
  );
};

export default CategoryList;
