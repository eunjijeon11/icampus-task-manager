import {
  Card,
  CardBody,
  Grid,
  GridItem,
  Icon,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  MdVideoLibrary,
  MdOutlineFavorite,
  MdTaskAlt,
  MdOutlineWorkOutline,
  MdCreate,
} from "react-icons/md";
import "../styles/Monthly.css";
import ShowModal from "./TaskModal";
import { useState, useEffect } from "react";
import * as config from "../config";

function showTask(key, lis, num, icon, color) {
  if (num) {
    lis.push(
      <GridItem
        display="flex"
        direction="row"
        alignItems="center"
        color={color}
        key={key}
      >
        <Icon as={icon} />
        <Text px="10px">{num}</Text>
      </GridItem>
    );
  }
  return lis;
}

function CalendarItem(key, date, tasks, color) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  var lis = [];
  lis = showTask(0, lis, tasks.lesson, MdVideoLibrary, "task.lesson");
  lis = showTask(1, lis, tasks.task, MdCreate, "task.task");
  lis = showTask(2, lis, tasks.meet, MdOutlineFavorite, "task.meet");
  lis = showTask(3, lis, tasks.work, MdOutlineWorkOutline, "task.work");
  lis = showTask(4, lis, tasks.etc, MdTaskAlt, "task.etc");

  return (
    <>
      <GridItem
        h="100px"
        borderWidth={"1px"}
        borderColor="gray.100"
        key={key}
        color="black"
        background={color}
        px="10px"
        paddingTop="5px"
        onClick={onOpen}
      >
        {date}
        <Grid
          height="fit-content"
          templateColumns="repeat(3, 1fr)"
          templateRows="repeat(2, 1fr)"
        >
          {lis}
        </Grid>

        {ShowModal(isOpen, onClose, date)}
      </GridItem>
    </>
  );
}

function showMonth() {
  var lis = [];
  var date = new Date(2023, 1, 12);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  var color;

  for (let i = 0; i < 15 * 7; i++) {
    date.setDate(date.getDate() + 1);

    if (date < today) color = "gray.100";
    else if (date >= today) color = "white";

    lis.push(
      CalendarItem(
        i,
        date.getDate(),
        {
          lesson: 5,
          task: 4,
          meet: 3,
          work: 2,
          etc: 1,
        },
        color
      )
    );
  }

  return lis;
}

export default function MonthlyView() {
  var lis = showMonth(); // Jan: 0

  return (
    <Card height="100%" mx="4vw" shadow="2xl" overflow="hidden">
      <CardBody>
        <Stack display="flex" height="100%">
          <Grid templateColumns="repeat(7, 1fr)" ml="50px">
            <GridItem className="week">월</GridItem>
            <GridItem className="week">화</GridItem>
            <GridItem className="week">수</GridItem>
            <GridItem className="week">목</GridItem>
            <GridItem className="week">금</GridItem>
            <GridItem className="week">토</GridItem>
            <GridItem className="week">일</GridItem>
          </Grid>
          <Stack
            id="monthlyScroll"
            height="500px"
            overflowY="scroll"
            scrollBehavior="inherit"
          >
            <Stack direction="row" display="flex">
              <Grid templateRows="repeat(15, 1fr)" w="50px">
                <GridItem className="schoolWeek">1주차</GridItem>
                <GridItem className="schoolWeek">2주차</GridItem>
                <GridItem className="schoolWeek">3주차</GridItem>
                <GridItem className="schoolWeek">4주차</GridItem>
                <GridItem className="schoolWeek">5주차</GridItem>
                <GridItem className="schoolWeek">6주차</GridItem>
                <GridItem className="schoolWeek">7주차</GridItem>
                <GridItem className="schoolWeek">8주차</GridItem>
                <GridItem className="schoolWeek">9주차</GridItem>
                <GridItem className="schoolWeek">10주차</GridItem>
                <GridItem className="schoolWeek">11주차</GridItem>
                <GridItem className="schoolWeek">12주차</GridItem>
                <GridItem className="schoolWeek">13주차</GridItem>
                <GridItem className="schoolWeek">14주차</GridItem>
                <GridItem className="schoolWeek">15주차</GridItem>
              </Grid>
              <Grid
                templateColumns="repeat(7, 1fr)"
                templateRows="repeat(15, 1fr)"
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
