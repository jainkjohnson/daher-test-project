import * as React from 'react';
import { Linking } from 'react-native';
import { Image, Text, View } from 'react-native-web';
import styles from './styles';


const Header: React.FC = () => (
  <View style={styles.headerContainer}>
    <View style={styles.leftSide}>
      <Image style={styles.image} source={require("src/asset/header.png")} />
      <Text style={styles.title}>Daher Test Project</Text>
    </View>
    <View style={styles.rightSide}>
      <Image style={styles.githubImage} source={require("src/asset/github.png")}/>
      <Text style={styles.sourceCodeTitle} onPress={() => Linking.openURL("https://github.com/jainkjohnson/daher-test-project")}>Click here for source code</Text>
    </View>
  </View>
)

export default Header;