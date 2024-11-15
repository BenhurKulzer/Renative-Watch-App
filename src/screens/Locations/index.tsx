import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, FlatList, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Container } from './styles';

import { AppNavigatorRoutesData } from '../../@types/routes';
import { api } from '../../services/api';

import { LocationsDTO } from '../../@types/locations';

function Locations() {
  const { navigate } = useNavigation<AppNavigatorRoutesData>();

  const [isLoading, setIsLoading] = useState(false);
  const [locations, setLocations] = useState<LocationsDTO[]>([]);

  async function handleGetLocations() {
    try {
      setIsLoading(true);

      const response = await api.get('/locations');

      setLocations(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    handleGetLocations();
  }, []);

  return (
    <Container>
      {
        isLoading
          ? <ActivityIndicator animating={isLoading} size='large' />
          : <FlatList
              data={locations}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item, index }) => (
                <View style={{ flex: 1, marginBottom: 6, backgroundColor: '#ccc' }} key={index}>
                  <Text>{item.name}</Text>
                </View>
              )}
            />
      }
    </Container>
  )
}

export default Locations;
