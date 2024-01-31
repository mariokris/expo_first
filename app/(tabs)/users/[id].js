import {router, useLocalSearchParams} from 'expo-router';
import {useEffect} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  ActivityIndicator,
  Button,
} from 'react-native';

import {useJonggolQuery, useLoginMutation} from '../../redux/api/apiSlice';

export default function User() {
  const {id} = useLocalSearchParams();
  const {
    isLoading: isLoadingJonggol,
    data: dataJonggol,
    refetch: refetchJonggol,
    isError: isErrorJonggol,
    error: errorJonggol,
  } = useJonggolQuery();
  const [
    login,
    {
      isLoading: isLoadingLogin,
      data: dataLogin,
      isError: isErrorLogin,
      error: errorLogin,
    },
  ] = useLoginMutation();
  console.log('errorJonggol : ', errorJonggol);
  console.log('dataJonggol : ', dataJonggol);
  console.log('errorLogin : ', errorLogin);
  console.log('dataLogin : ', dataLogin);

  const goToJupiter = () => {
    const destination = id == 1 ? 'users/counted' : 'users/jupiter';
    router.push({
      pathname: destination,
    });
  };

  return (
    <View className="flex-1 items-center justify-center bg-yellow-100">
      <TouchableOpacity className="p-10" onPress={goToJupiter}>
        <Text>Navigate to Jupiter {id}</Text>
      </TouchableOpacity>
      {isErrorLogin && (
        <Text className="text-red-500">ERROR WHILE FETCHING DATA</Text>
      )}
      <ActivityIndicator size="large" animating={isLoadingLogin} />
      {/* <Button title='Refetch' onPress={refetch}/> */}
      <Button
        title="Login"
        onPress={() =>
          login({email: 'testing@gmail.com', password: 'rahasia123'})
        }
      />
    </View>
  );
}
