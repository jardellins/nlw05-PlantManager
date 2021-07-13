import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import EnviromentButton from "../components/EnviromentButton";

import Header from "../components/Hearder";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

const PlantSelect = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header/>

        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subtitle}>você quer colocar sua planta?</Text>
      </View>

      <FlatList
        data={[1,2,3,4,5,6]}
        renderItem={({ item }) => (
            <EnviromentButton key={item} title='Cozinha' />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.enviromentList}
      />

    </View>
  );
};

export default PlantSelect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
      paddingHorizontal: 30,
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.text,
    lineHeight: 20,
    marginTop: 15,
  },
  subtitle: {
    fontFamily: fonts.text,
    fontSize: 17,
    lineHeight: 20,
    color: colors.heading,
  },
  enviromentList: {
      height: 40,
      justifyContent: 'center',
      paddingBottom: 5,
      marginLeft: 32,
      marginVertical: 32,
  },
});
