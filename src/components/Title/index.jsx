import { View, Text } from "react-native";
import styles from "./styles";

const Title = ({ titulo }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title1}>{titulo}</Text>
    </View>
  );
};

export default Title;
