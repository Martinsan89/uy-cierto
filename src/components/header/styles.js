import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    marginTop: 40,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 120,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: colors.black,
  },
});
