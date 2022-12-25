import { Card, CardHeader, CardBody, Flex } from "@chakra-ui/react";

export default function HistoryView() {
  return (
    <Flex height="100%" direction="column" justify="center">
      <Card height="75%" mx="10vw" shadow="2xl">
        <CardHeader>This is History view!</CardHeader>
        <CardBody></CardBody>
      </Card>
    </Flex>
  );
}
