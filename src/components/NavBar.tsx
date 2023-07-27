import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitchButton from "./ColorModeSwitchButton";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"0 10px"}>
      <Image src={logo} boxSize={"100px"} />
      <ColorModeSwitchButton />
    </HStack>
  );
};

export default NavBar;
