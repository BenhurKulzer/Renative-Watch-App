import { Button, Text } from 'react-native'
import React from 'react'
import { Container } from './styles'
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesData } from '../../@types/routes';

function Robots() {
  const { navigate } = useNavigation<AppNavigatorRoutesData>();

  return (
    <Container>
      <Text>Robots Index</Text>
      <Button title='Locations' onPress={() => navigate('Home')} />
    </Container>
  )
}

export default Robots;
