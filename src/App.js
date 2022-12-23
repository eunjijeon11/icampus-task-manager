import "./App.css";
import { ChakraProvider, Button, ButtonGroup } from "@chakra-ui/react";

function App() {
    return (
        <ChakraProvider>
            <div className="App">
                <Button colorScheme="green">Button</Button>
            </div>
        </ChakraProvider>
    );
}

export default App;
