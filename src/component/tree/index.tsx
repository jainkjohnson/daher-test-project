import * as React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native-web";
import { ITreeData } from "src/types";
import styles from "./styles";

interface ITreeProps {
  data: ITreeData[]
}

const Tree: any = (props: ITreeProps) => {
  const { data } = props;
  const [collapsed, setCollapsed] = React.useState<any>({});

  const hasChild = (node: ITreeData) => Boolean(node.child);

  const handleCollapse = (type: string, key: number) => () => {
    let tmpState = collapsed;
    tmpState = {
      ...tmpState,
      [type + key]: !tmpState[type + key],
    };
    setCollapsed(tmpState);
  };

  const displayNode = (node: ITreeData, type: string, key: number) => {
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

  const getEachNode = (node: ITreeData, key: number, type: string) => (
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

  const createTree = (type: string, data: ITreeData[]) => {
    const nodes: React.ReactElement[] = [];
    data.forEach((eachData: ITreeData, eachKey: number) => {
      nodes.push(getEachNode(eachData, eachKey, type));
    });
    return nodes;
  };

  return <View>{createTree("root", data)}</View>;
};

export default Tree;
