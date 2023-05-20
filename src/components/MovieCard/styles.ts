/**
 * @prettier
 *
 * File: styles.ts
 * Developed By Zeyad ALbazlamit
 * Date: 2023-05-09
 * Desc: All Time Off Balance Item styles live here.
 */

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 12,
    height: 135,
    marginVertical: 3,
    overflow: "hidden",
    borderRadius: 12,
    backgroundColor: "#FFF",
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  voteAverageContainer: {
    flexDirection: "row",
    alignItems: "flex-end"
  },
  voteAverageText: {
    color: "#47b613",
    fontWeight: 'bold'
  },
  genresContainer:{
  flexDirection:"row",
  gap:5,
  }
});

export default styles;
