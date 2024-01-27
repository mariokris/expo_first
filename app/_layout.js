import { Stack } from 'expo-router';
import { Provider } from 'react-redux';
import { store } from './redux/store';

// export default function RootLayout() {
//   return (
//     <Stack
//       // https://reactnavigation.org/docs/headers#sharing-common-options-across-screens
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: '#f4511e',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: 'bold',
//         },
//       }}>
//       {/* Optionally configure static options outside the route. */}
//       <Stack.Screen name="index" options={{
//         headerTitle: 'Home'
//       }} />
//       <Stack.Screen name="users/[id]" options={{
//         headerTitle: 'User Page'
//       }} />
//     </Stack>
//   );
// }

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name='(tabs)' options={{headerShown: false}}/>
      </Stack>
    </Provider>
    
  );
}