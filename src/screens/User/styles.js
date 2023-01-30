import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 15,
  },
  title: {
    fontSize: 25,
    color: colors.white,
  },
  buttonBackContainer: {
    width: "25%",
    marginLeft: 5,
  },
  buttonBack: {
    backgroundColor: colors.default,
  },
});
