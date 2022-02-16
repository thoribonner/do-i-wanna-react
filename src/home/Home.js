import YesNoInfo from "./YesNoInfo";
import FlipCoinInfo from "./FlipCoinInfo";
import RandomPickerInfo from "./RandomPickerInfo";
import "./Home.css";
import React from "react";

export default function Home() {
  

  return (
    <main className="flex-col">
      <YesNoInfo />
      <FlipCoinInfo />
      <RandomPickerInfo />
    </main>
  );
}
