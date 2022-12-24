import { Button, Flex, Heading, Spacer } from "@chakra-ui/react";
import { Card, CardHeader, CardBody } from "@chakra-ui/react";
import "../styles/MainPage.css";
import { ImGithub } from "react-icons/im";

export function Main() {
  return (
    <div className="Main">
      <header>
        <Flex align="center" justify="center" height="100%">
          <Flex id="headerFlex">
            <Heading size="lg">I-Campus Task Manager</Heading>
            <Spacer />
            <Button id="headerBtn" leftIcon={<ImGithub />}>
              GitHub
            </Button>
          </Flex>
        </Flex>
      </header>
      <Flex
        flexDirection="column"
        align="center"
        justify="center"
        height="100%"
      >
        <Card>
          <CardHeader>
            <h1>Calendar view</h1>
          </CardHeader>
          <CardBody>
            <h1>날짜별보기!!!</h1>
          </CardBody>
        </Card>
      </Flex>
    </div>
  );
}
