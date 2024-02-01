import {router, useLocalSearchParams} from 'expo-router';
import {useEffect, useState} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  ActivityIndicator,
  Button,
  TextInput,
} from 'react-native';

import {useJonggolQuery, useLoginMutation} from '../../redux/api/apiSlice';

export default function User() {
  const {id} = useLocalSearchParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [credential, setCredential] = useState({email: '', password: ''});
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
      <View className="p-4 border-2 border-lightblue-500 rounded mb-5">
        <TextInput
          placeholder="Input Email"
          placeholderTextColor="grey"
          onChangeText={email =>
            setCredential({...credential, email: email.toLowerCase()})
          }
          style={{color: 'black'}}
        />
      </View>
      <View className="p-4 border-2 border-lightblue-500 rounded">
        <TextInput
          placeholder="Input Password"
          placeholderTextColor="grey"
          onChangeText={password =>
            setCredential({...credential, password: password.toLowerCase()})
          }
          style={{color: 'black'}}
          secureTextEntry
        />
      </View>
      {isErrorLogin && (
        <Text className="text-red-500">{errorLogin?.data?.message}</Text>
      )}
      <ActivityIndicator size="large" animating={isLoadingLogin} />
      {/* <Button title='Refetch' onPress={refetch}/> */}
      <Button title="Login" onPress={() => login(credential)} />
    </View>
  );
}
