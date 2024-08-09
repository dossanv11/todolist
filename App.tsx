import { SafeAreaView, StatusBar } from "react-native";
import Home from './src/screens/Home';
import CustomStatusBar from "./src/components/CustomStatusBar";

export default function App() {
  return (
    <>
      <CustomStatusBar>
        <Home />
      </CustomStatusBar>
    </>
  );
}
