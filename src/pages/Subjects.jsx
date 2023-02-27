import {
  Card,
  CardHeader,
  CardBody,
  Flex,
  Grid,
  Stack,
  GridItem,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import * as config from "../config";

function readCourses(data) {
  var lis = [];

  for (let i = 0; i < 9; i++) {
    lis.push(
      <GridItem key={i}>
        <Card height="100%" m="1vw" shadow="2xl">
          <CardHeader>{data[i].name}</CardHeader>
          <CardBody></CardBody>
        </Card>
      </GridItem>
    );
  }

  return lis;
}

export default function SubjectView() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const headers = {
      Authorization:
        "Bearer I7gDFd8b5xfwOHt4sOJv8lh4FKJNl3tZdT4Gsi2l82EV98qVonXpxnw5007MvmFH",
      Accept: "application / json",
    };
    fetch("https://canvas.skku.edu/api/v1/users/self/favorites/courses", {
      headers,
    })
      .then((response) => response.json())
      .then((data) => setCourses(readCourses(data)));
  });

  return (
    <Stack mx="4vw" overflow="inherit">
      <Grid templateColumns="repeat(3, 1fr)" templateRows="repeat(3, 1fr)">
        {courses}
      </Grid>
    </Stack>
  );
}
