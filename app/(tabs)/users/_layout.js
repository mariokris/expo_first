import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="[id]"
        options={{
            headertitle: "User Page",
            title:"User"
        }}
      />
      <Stack.Screen
        name="counted"
        options={{
            headertitle: "Inc & Desc Page",
            title:"Inc & Desc"
        }}
      />
      <Stack.Screen
        name="jupiter"
        options={{
            headertitle:"Jupiter Page",
            title:"Jupiter",
        }}
      />
    </Stack>
  );
}