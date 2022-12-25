import "./styles/App.css";
import { NewMain } from "./pages/Authentication";
import { Main } from "./pages/MainPage";
import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import Fonts from "./fonts";
import theme from "./theme";

function App() {
  const [mode, setMode] = useState("new");
  let content = null;
  if (mode === "new") {
    content = (
      <NewMain
        onChangeMode={() => {
          // Authentication with canvas
          setMode("old");
        }}
      ></NewMain>
    );
  } else {
    content = <Main></Main>;
  }
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <div className="App">{content}</div>
    </ChakraProvider>
  );
}

export default App;
