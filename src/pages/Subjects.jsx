import { Card, CardHeader, CardBody, Flex } from "@chakra-ui/react";

export default function SubjectView() {
  return (
    <Flex height="100%" direction="column" justify="center">
      <Card height="75%" m="10vw" shadow="2xl">
        <CardHeader>This is Subjects view!</CardHeader>
        <CardBody></CardBody>
      </Card>
    </Flex>
  );
}
