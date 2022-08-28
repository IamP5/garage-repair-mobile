import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 40px; 
  padding: 10px;

  margin-top: 20px;
`;

export const Maintenances = styled.ScrollView`
  width: 100%;
  display: flex;

  flex-direction: column;
  margin-top: 4px;
`;

export const EmptyWarning = styled.View`
  flex: 1;
  height: 100%;

  margin-top: 60px;

  padding: 40px;
`;

export const WarningText = styled.Text`
  font-size: 39px;
  text-align: center;
  color: #888886;
`;