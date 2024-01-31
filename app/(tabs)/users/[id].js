import { router, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  ActivityIndicator,
  Button,
} from "react-native";

import { useJonggolQuery, useLoginMutation } from "../../redux/api/apiSlice";

export default function User() {
  const { id } = useLocalSearchParams();
  // const {isLoading, data, refetch, isError, error} = useJonggolQuery();
  const [login, { isLoading, data, isError, error }] = useLoginMutation();
  console.log("error : ", error);
  console.log("data : ", data);

  const goToJupiter = () => {
    const destination = id == 1 ? "users/counted" : "users/jupiter";
    router.push({
      pathname: destination,
    });
  };

  return (
    <View className="flex-1 items-center justify-center bg-yellow-100">
      <TouchableOpacity className="p-10" onPress={goToJupiter}>
        <Text>Navigate to Jupiter {id}</Text>
      </TouchableOpacity>
      {isError && (
        <Text className="text-red-500">ERROR WHILE FETCHING DATA</Text>
      )}
      <ActivityIndicator size="large" animating={isLoading} />
      {/* <Button title='Refetch' onPress={refetch}/> */}
      <Button
        title="Login"
        onPress={() =>
          login({ email: "testing@gmail.com", password: "rahasia123" })
        }
      />
    </View>
  );
}
