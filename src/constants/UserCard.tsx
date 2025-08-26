// UserCard.tsx
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

type Props = {
  name: string;
  email: string;
  avatar: string;
};

const UserCard: React.FC<Props> = ({ name, email, avatar }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    margin: 8,
    borderRadius: 10,
    backgroundColor: "#f0f4ff",
    elevation: 3,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  email: {
    fontSize: 14,
    color: "gray",
  },
});
