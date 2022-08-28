import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const UserContainer = styled.View`
  height: 200px;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
`;

export const Avatar = styled.View`
  height: 80px;
  width: 80px;

  border-radius: 160px;
  background-color: #404040;
`;

export const UserInfo = styled.View`
  display: flex;

  flex-direction: column;
  margin-left: 20px;
`;

export const UserName = styled.Text`
  font-size: 36px;
`;

export const UserCPF = styled.Text`
  font-size: 18px;
  color: #666565;
`;

export const CarList = styled.ScrollView`
  padding: 20px;
`

