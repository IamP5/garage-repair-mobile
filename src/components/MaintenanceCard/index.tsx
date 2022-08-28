import React from 'react';
import { format, formatISO, parseISO } from 'date-fns';
import {
  Container,
  Info,
  Title,
  Status,
  Date,
  Id,
} from './styles';
import { pt } from 'date-fns/locale';

interface Props {
  maintenance: Maintenance;
}

export function MaintenanceCard({ maintenance }: Props){

  function formatDate(date: any) {
    return format(parseISO(date), 'basic', { locale: pt });
  }

  return (
    <Container>
      <Info>
        <Title>
          <Status>{maintenance.status}</Status>
          <Date>{maintenance.updatedAt.slice(0,10)}</Date>
        </Title>
        
        <Id>{maintenance.id}</Id>
      </Info>
    </Container>
  );
}