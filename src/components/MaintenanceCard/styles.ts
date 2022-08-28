import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 150px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background-color: #1351D8;
  border-radius: 10px;
  padding: 20px;

  margin-top: 10px;
`;

export const Info = styled.View`
  display: flex;
  height: 100%;
  flex-direction: column;

  justify-content: space-between;
`;

export const Title = styled.View`
  display: flex;
  flex-direction: column;
`;

export const Id = styled.Text`
  font-size: 16px;

  color: white;
`;

export const Status = styled.Text`
  font-size: 30px;
  color: white;
`;

export const Date = styled.Text`
  font-size: 20px;
  color: white;
`;