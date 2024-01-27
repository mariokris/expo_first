import { Pressable, StyleSheet, Text, View } from "react-native";
import { Provider } from 'react-redux';
import { store } from "../redux/store";
import { Link, Stack, router } from "expo-router";

export default function Page() {
  return (
    <View>
      <Text>User </Text>
      <Link href={"users/1"}>Go to user 1</Link>
      <Pressable onPress={() => router.push({
        pathname: "users/[id]",
        params: {id: 2},
      })}>
        <Text>Go to user 2</Text>
      </Pressable>
    </View>
  );
}
