import * as React from "react";
import { View } from "react-native-web";
import Header from "src/component/Header";
import Tree from "src/component/Tree";

const Home: React.FC = () => {
  return (
    <View>
      <Header />
      <Tree />
    </View>
  );
}

export default Home
