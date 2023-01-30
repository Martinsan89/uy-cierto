import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
  subContainer: {
    flexDirection: "column",
    borderColor: colors.white,
    justifyContent: "space-between",
    alignItems: "center",
  },
  subTitle: {
    color: colors.white,
    fontSize: 25,
  },
  subText: {
    color: colors.white,
    fontSize: 20,
    marginVertical: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 20,
    justifyContent: "space-around",
    width: "60%",
    alignSelf: "center",
  },
  buttonHome: {
    color: colors.black,
    backgroundColor: colors.primary,
    padding: 15,
  },
});
