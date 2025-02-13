import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Index from "./index"; // Подключаем навигатор

export default function App() {
  return (
    <NavigationContainer>
      <Index />
    </NavigationContainer>
  );
}