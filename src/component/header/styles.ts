import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "rgb(251, 210, 51)",
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  leftSide: {
    flexDirection: "row",
    flex: 0.5,
    alignItems: 'center',
  },
  rightSide: {
    flexDirection: "row",
    flex: 0.5,
    justifyContent: "flex-end",
    alignItems: 'center',
  },
  title: {
    fontSize: 18
  },
  image: {
    height: 50,
    width: 150
  },
  sourceCodeTitle: {
    fontSize: 12,
    padding: 10
  },
  githubImage: {
    height: 20,
    width: 20,
  }
});

export default styles;
