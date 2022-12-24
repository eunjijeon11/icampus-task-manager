import { Button, Flex, Heading } from "@chakra-ui/react";
import "../styles/Authentication.css";

export function NewMain(props) {
  return (
    <Flex flexDirection="column" align="center" justify="center" height="100%">
      <Heading className="title">I-Campus Task Manager</Heading>
      <Button
        id="AuthenticationBtn"
        colorScheme="green"
        onClick={() => {
          props.onChangeMode();
        }}
      >
        Sign in with I-Campus
      </Button>
    </Flex>
  );
}
