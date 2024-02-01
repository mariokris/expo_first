import {StatusBar} from 'expo-status-bar';
import {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {
  increment,
  decrement,
  incrementByAmount,
} from '../../redux/counterReducer';

export default function Counted() {
  const dispatch = useDispatch();
  const counterState = useSelector(state => state.counter);
  const [count, setCount] = useState(0);
  const incrementJupiter = () => {
    setCount(count + 1);
  };
  const decrementJupiter = () => {
    setCount(count - 1);
  };
  return (
    <View className="flex-1 items-center justify-center bg-yellow-100">
      <View className="p-4 border-2 border-lightblue-500 rounded">
        <Text className="text-3xl font-bold">
          Hello Jupiter {counterState.value}
        </Text>
      </View>
      <Button title="Increment Jupiter" onPress={() => dispatch(increment())} />
      <Button title="Decrement Jupiter" onPress={() => dispatch(decrement())} />
      <Button
        title="Increment Jupiter Number"
        onPress={() => dispatch(incrementByAmount(90))}
      />
      <StatusBar style="auto" />
    </View>
  );
}
