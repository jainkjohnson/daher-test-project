import * as React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native-web";
import { data } from "../constant";

const styles = StyleSheet.create({
  icon: {
    width: 10,
    height: 10,
    margin: 10,
  },
  childrenNode: { paddingLeft: 30 },
});

const Tree: any = () => {
  const [collapsed, setCollapsed] = React.useState<any>({});

  const hasChild = (node: any) => Boolean(node.child);

  const handleCollapse = (type: any, key: any) => () => {
    let tmpState = collapsed;
    tmpState = {
      ...tmpState,
      [type + key]: !tmpState[type + key],
    };
    setCollapsed(tmpState);
  };

  const displayNode = (node: any, type: string, key: Number) => {
    let icon = collapsed[type + key]
      ? require("src/asset/left.png")
      : require("src/asset/down.png");
    icon = !hasChild(node) ? require("src/asset/dot.png") : icon;
    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image style={styles.icon} source={icon} />
        <Text>{node.label}</Text>
      </View>
    );
  };

  const getEachNode = (node: any, key: number, type: string) => (
    <View key={key}>
      <TouchableOpacity onPress={handleCollapse(type, key)}>
        {displayNode(node, type, key)}
      </TouchableOpacity>
      <View style={styles.childrenNode}>
        {collapsed[type + key]
          ? null
          : createTree(`child_${node.label}`, node.child || [])}
      </View>
    </View>
  );

  const createTree = (type: string, data: any) => {
    const nodes: any = [];
    data.forEach((eachData: any, eachKey: number) => {
      nodes.push(getEachNode(eachData, eachKey, type));
    });
    return nodes;
  };

  return <View>{createTree("root", data)}</View>;
};

export default Tree;
