import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitchButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="red"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      ></Switch>
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitchButton;
