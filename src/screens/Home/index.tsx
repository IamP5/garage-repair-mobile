import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Dimensions, Text, View } from 'react-native';
import { Car } from '../../components/Car';
import { Customer, ICar } from '../../common/models/customer';
import { api } from '../../common/service/api';

import {
  Container,
  Avatar,
  UserContainer,
  UserInfo,
  UserName,
  UserCPF,
  CarList
} from './styles';

const CUSTOMER_ID = '03e06877-bc19-4054-a555-576d49f50de4';

export function Home(){
  const [customer, setCustomer] = useState<Customer>({} as Customer);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCustomer() {
      try {
        const response = await api.get<Customer>(`customer/${CUSTOMER_ID}`);
        setCustomer(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchCustomer();
  }, []);

  const navigation = useNavigation<any>();

  function handleCarItem(car: ICar) {
    navigation.navigate('CarMaintenances', { car });
  }

  if(loading) {
    return <Text>Loading</Text>
  }

  return (
    <Container>
      <UserContainer>
        <Avatar />
        <UserInfo>
          <UserName>{customer.name}</UserName>
          <UserCPF>{customer.cpf}</UserCPF>
        </UserInfo>
      </UserContainer>

      <CarList>
        { customer.car.map(car => 
          <Car key={car.id} carData={car} onPress={() => handleCarItem(car)}/>
        )}
      </CarList>
    </Container>    
  );
}