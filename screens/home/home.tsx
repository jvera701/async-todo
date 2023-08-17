import { Text, View, Button } from "react-native";
import styles from "./home.styles";

const HomeScreen = (props: any) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Text>{"This is the home page"}</Text>
      <Button
        title="Go to next"
        onPress={() => navigation.navigate("Detail Screen")}
      />
    </View>
  );
};

export default HomeScreen;
