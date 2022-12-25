import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
} from "@chakra-ui/react";
import { Header } from "./Header";
import HistoryView from "./History";
import SubjectView from "./Subjects";
import WeeklyView from "./Monthly";

export function Main() {
  return (
    <Flex className="Main" direction="column" height="100%">
      <Header></Header>
      <Flex justify="center" flex="1" px="5vh" pb="3vh">
        <Tabs flex="1" variant="soft-rounded" colorScheme="orange">
          <TabList height="7%" display="flex" justifyContent="center">
            <Tab className="tab" mr="15px" shadow="lg">
              달력
            </Tab>
            <Tab className="tab" shadow="lg">
              과목별
            </Tab>
            <Tab className="tab" ml="15px" shadow="lg">
              기록
            </Tab>
          </TabList>
          <TabPanels height="93%">
            <TabPanel height="100%">
              <WeeklyView />
            </TabPanel>
            <TabPanel height="100%">
              <SubjectView />
            </TabPanel>
            <TabPanel height="100%">
              <HistoryView />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Flex>
  );
}
