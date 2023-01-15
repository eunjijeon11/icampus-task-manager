import {
  Card,
  CardBody,
  Grid,
  GridItem,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  MdVideoLibrary,
  MdOutlineFavorite,
  MdTaskAlt,
  MdOutlineWorkOutline,
  MdCreate,
} from "react-icons/md";
import "../styles/Monthly.css";

function showTask(lis, num, icon, color) {
  if (num) {
    lis.push(
      <GridItem
        display="flex"
        direction="row"
        alignItems="center"
        color={color}
      >
        <Icon as={icon} />
        <Text px="10px">{num}</Text>
      </GridItem>
    );
  }
  return lis;
}

function calendarItem(key, date, tasks, color) {
  var lis = [];
  lis = showTask(lis, tasks.lesson, MdVideoLibrary, "task.lesson");
  lis = showTask(lis, tasks.task, MdCreate, "task.task");
  lis = showTask(lis, tasks.meet, MdOutlineFavorite, "task.meet");
  lis = showTask(lis, tasks.work, MdOutlineWorkOutline, "task.work");
  lis = showTask(lis, tasks.etc, MdTaskAlt, "task.etc");
  return (
    <GridItem
      h="100"
      borderWidth={"1px"}
      key={key}
      color={color}
      px="10px"
      paddingTop="5px"
    >
      {date}
      <Grid
        height="fit-content"
        templateColumns="repeat(3, 1fr)"
        templateRows="repeat(2, 1fr)"
      >
        {lis}
      </Grid>
    </GridItem>
  );
}

function showMonth(year, month) {
  var first = new Date(year, month);
  var startDay = first.getDay();
  var before = new Date(year, month, 0);
  var endDay = new Date(year, month + 1, 0);

  var lis = [];
  for (let i = startDay - 2; i >= 0; i--) {
    lis.push(
      calendarItem(
        (month - 1).toString() + i.toString(),
        before.getDate() - i,
        {
          lesson: 5,
          task: 4,
          meet: 3,
          work: 2,
          etc: 1,
        },
        "gray.400"
      )
    );
  }

  for (let i = 1; i <= endDay.getDate(); i++) {
    lis.push(
      calendarItem(
        month.toString() + i.toString(),
        i,
        {
          lesson: 5,
          task: 4,
          meet: 3,
          work: 2,
          etc: 1,
        },
        "black"
      )
    );
  }

  for (let i = 1; i <= 7 - endDay.getDay(); i++) {
    lis.push(
      calendarItem(
        month.toString() + i.toString(),
        i,
        {
          lesson: 5,
          task: 4,
          meet: 3,
          work: 2,
          etc: 1,
        },
        "gray.400"
      )
    );
  }

  return lis;
}

export default function MonthlyView() {
  const [date, setDate] = useState(new Date());
  var lis = showMonth(2023, 0); // Jan: 0

  return (
    <Card height="100%" mx="4vw" shadow="2xl" overflow="hidden">
      <CardBody>
        <Stack display="flex">
          <Grid templateColumns="repeat(7, 1fr)" ml="50px">
            <GridItem className="week">월</GridItem>
            <GridItem className="week">화</GridItem>
            <GridItem className="week">수</GridItem>
            <GridItem className="week">목</GridItem>
            <GridItem className="week">금</GridItem>
            <GridItem className="week">토</GridItem>
            <GridItem className="week">일</GridItem>
          </Grid>
          <Stack flex="1" direction="row">
            <Grid templateRows="repeat(5, 1fr)" w="50px">
              <GridItem className="schoolWeek">1주차</GridItem>
              <GridItem className="schoolWeek">2주차</GridItem>
              <GridItem className="schoolWeek">3주차</GridItem>
              <GridItem className="schoolWeek">4주차</GridItem>
              <GridItem className="schoolWeek">5주차</GridItem>
            </Grid>
            <Stack
              width="100%"
              height="500"
              overflow="hidden"
              scrollBehavior="outside"
            >
              <Grid
                width="100%"
                templateColumns="repeat(7, 1fr)"
                templateRows="repeat(5, 1fr)"
                flex="1"
              >
                {lis}
              </Grid>
            </Stack>
          </Stack>
        </Stack>
      </CardBody>
    </Card>
  );
}
