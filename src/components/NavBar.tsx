import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitchButton from "./ColorModeSwitchButton";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <HStack padding={"0 10px"}>
      <Image src={logo} boxSize={"100px"} />
      <SearchBar />
      <ColorModeSwitchButton />
    </HStack>
  );
};

export default NavBar;
