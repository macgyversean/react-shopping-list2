import { useState } from "react";
import "./App.css";
import ShoppingForm from "./components/ShoppingForm";
import ShoppingList from "./components/ShoppingList";

function App() {
  const [someText, setSomeText] = useState("");
  const getFormData = (text) => {
    setSomeText(text);
  };
  return (
    <>
      <h1>Form Demo</h1>
      <ShoppingForm action={getFormData} />
    </>
  );
}

export default App;
