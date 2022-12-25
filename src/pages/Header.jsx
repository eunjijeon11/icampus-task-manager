import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  Spacer,
  Icon,
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { ImGithub, ImCog } from "react-icons/im";
import "../styles/Header.css";

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <header>
      <Flex id="headerFlex">
        <Heading id="headerText" size="lg">
          아캠정복자
        </Heading>
        <Stack flex="1" direction="row" px={7}>
          <Spacer />
          <Text display="inline" px={3}>
            은지님, 안녕하세요!
          </Text>
          <Icon as={ImCog} boxSize={6} onClick={onOpen} />
        </Stack>
        <Button
          id="headerBtn"
          leftIcon={<ImGithub />}
          onClick={() => {
            window.open("https://github.com/eunjijeon11");
          }}
        >
          GitHub
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>설정</DrawerHeader>

            <DrawerBody>
              <h1>Choose a color theme</h1>
              <p>
                <h1>로그아웃</h1>
              </p>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button bg="brand.200" color="white">
                Save
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Flex>
    </header>
  );
}
