import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native-web';


const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "red",
    height: 50,
    justifyContent: 'center'
  }
});

const Header: React.FC = () => (
  <View style={styles.headerContainer}>
    <Text>Daher Test Project</Text>
  </View>
)

export default Header;