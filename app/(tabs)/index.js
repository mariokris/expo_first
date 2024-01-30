import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from "../redux/store";
import { Link, Stack, router } from "expo-router";
import { setToken } from "../redux/authSlice";

export default function Page() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.auth);
  console.log('state : ', state);
  return (
    <View>
      <Link href={"users/1"}>Go to user 1</Link>
      <Pressable onPress={() => router.push({
        pathname: "users/[id]",
        params: {id: 2},
      })}>
        <Text>Go to user 2</Text>
      </Pressable>
      <Text className="text-3xl font-bold">Token: {state.token}</Text>
      <Button title="ubah token" onPress={() => dispatch(setToken('n12312h1kj34hj3HJDFHhjhj'))}/>
    </View>
  );
}
