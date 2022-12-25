import { Card, CardBody, Divider, Grid } from "@chakra-ui/react";

export default function WeeklyView() {
  return (
    <Card height="100%" mx="4vw" shadow="2xl" direction="row" overflow="hidden">
      <Grid templateColumns={8} templateRows={5}></Grid>
      <CardBody>hihi</CardBody>
    </Card>
  );
}
