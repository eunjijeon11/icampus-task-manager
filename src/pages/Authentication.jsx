import { Button, Flex, Heading } from "@chakra-ui/react";
import "../styles/Authentication.css";

export function NewMain(props) {
  return (
    <Flex flexDirection="column" align="center" justify="center" height="100%">
      <Heading className="title" color="brand.300" size="3xl">
        아캠정복자
      </Heading>
      <Button
        id="AuthenticationBtn"
        bg="brand.200"
        color="white"
        onClick={() => {
          props.onChangeMode();
        }}
      >
        Sign in with I-Campus
      </Button>
    </Flex>
  );
}
