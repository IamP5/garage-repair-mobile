import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled<any>(RectButton)`
  width: 100%;
  height: 150px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background-color: white;
  border-radius: 10px;
  padding: 20px;

  margin-top: 10px;
`;

export const CarInfo = styled.View`
  display: flex;
  height: 100%;
  flex-direction: column;

  justify-content: space-between;
`;

export const CarTitle = styled.View`
  display: flex;
  flex-direction: column;
`;

export const CarPlate = styled.Text`
  font-size: 16px;

  color: #666565;
`;

export const CarModel = styled.Text`
  font-size: 30px;
`;

export const CarBrand = styled.Text`
  font-size: 20px;
  color: #666565;
`;

export const CarPhoto = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
`;