// HomeScreen.tsx
import React from "react";
import { View, FlatList } from "react-native";
import UserCard from "./UserCard";

const users = [
  { id: "1", name: "Saad", email: "saad@mail.com", avatar: "https://i.pravatar.cc/100?img=1" },
  { id: "2", name: "Amit", email: "amit@mail.com", avatar: "https://i.pravatar.cc/100?img=2" },
  { id: "3", name: "Riya", email: "riya@mail.com", avatar: "https://i.pravatar.cc/100?img=3" },
];

export default function HomeScreen() {
  return (
    <View>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <UserCard name={item.name} email={item.email} avatar={item.avatar} />
        )}
      />
    </View>
  );
}
