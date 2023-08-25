import React from "react"; // import React
import { View, Text, StyleSheet, StatusBar } from "react-native";

const App = () => {
  // creating a function component for App
  const name = "Muhammad Awais Siddiqui"; // declaring a variable for name
  const rollNumber = "201370006"; // declaring a variable for roll number

  return (
    // returning the JSX
    <View style={styles.container}>
      <StatusBar backgroundColor="#3498db" barStyle="light-content" />
      <View style={styles.content}>
        <Text style={styles.heading}>Mobile Computing Assignment</Text>
        <Text style={styles.subheading}>Created by:</Text>
        <Text style={styles.info}>Name: {name}</Text>
        <Text style={styles.info}>Roll: {rollNumber}</Text>
        <Text style={styles.message}>Explore and Enjoy!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // creating a stylesheet object for styling
  container: {
    flex: 1,
    backgroundColor: "#3498db",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    alignItems: "center",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#3498db",
    textAlign: "center",
  },
  subheading: {
    fontSize: 20,
    color: "#777",
    marginBottom: 5,
  },
  info: {
    fontSize: 18,
    color: "#333",
    marginBottom: 8,
  },
  message: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    color: "#3498db",
    textAlign: "center",
  },
});

export default App; // exporting the component as default
