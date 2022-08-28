import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { Car } from '../../components/Car';
import { MaintenanceCard } from '../../components/MaintenanceCard';
import { ICar } from '../../common/models/customer';
import { api } from '../../common/service/api';

import {
  Container,
  Maintenances,
  EmptyWarning,
  WarningText,
  Title
} from './styles';

interface Params {
  car: ICar
}

export function CarMaintenances(){
  const route = useRoute();
  const { car } = route.params as Params;

  const [maintenances, setMaintenances] = useState<Maintenance[]>([] as Maintenance[]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCarMaintenances() {
      try {
        const response = await api.get<Maintenance[]>(`maintenance/car/${car.id}`);
        setMaintenances(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchCarMaintenances();
  }, []);


  if(loading) {
    return <Text>Loading...</Text>
  }
  
  return (
    <Container>
      <Car carData={car} />

      <Title>Maintenances</Title>

      { maintenances.length === 0 
        ? <EmptyWarning>
            <WarningText>
              This car have no maintenances yet
            </WarningText>
          </EmptyWarning>

        : <Maintenances>
          { maintenances.map(maintenance => 
            <MaintenanceCard key={maintenance.id} maintenance={maintenance}/>
          )}
        </Maintenances>
      }
    </Container>
  );
}