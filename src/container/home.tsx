import * as React from "react";
import { View } from "react-native-web";
import Header from "src/component/header";
import Tree from "src/component/tree";
import config from "src/config";
import generateJSON from "src/utils";

const Home: React.FC = () => (
    <View>
      <Header />
      <Tree data={generateJSON(config)} />
    </View>
  );

export default Home
