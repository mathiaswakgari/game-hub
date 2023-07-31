import { Button, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { AiFillCaretDown } from "react-icons/ai";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<AiFillCaretDown />}>
        Order by
      </MenuButton>
      <MenuList>A</MenuList>
      <MenuList>B</MenuList>
      <MenuList>C</MenuList>
      <MenuList>D</MenuList>
    </Menu>
  );
};

export default SortSelector;
