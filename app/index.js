import { StyleSheet, Text, View } from "react-native";
import { Provider } from 'react-redux';
import "../global.css"
import { store } from "./redux/store";
import Counted from "./components/counted";

export default function Page() {
  return (
    <Provider store={store}>
        <Counted />
    </Provider>
  );
}
