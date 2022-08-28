import React from 'react';
import { ICar } from '../../common/models/customer';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  Container,
  CarModel,
  CarBrand,
  CarInfo,
  CarTitle,
  CarPlate,
  CarPhoto
} from './styles';
import { RectButtonProps } from 'react-native-gesture-handler';

interface Props extends RectButtonProps {
  carData: ICar;
}

export function Car({ carData, ...rest }: Props){
  return (
    <Container {...rest}>
      <CarInfo>
        <CarTitle>
          <CarModel>{carData.model}</CarModel>
          <CarBrand>{carData.brand}</CarBrand>
        </CarTitle>
        
        <CarPlate>{carData.plate}</CarPlate>
      </CarInfo>
      
      <CarPhoto>
        <Icon name="ios-car-sport" size={100} color="#1351D8"/>
      </CarPhoto>
    </Container>
  );
}