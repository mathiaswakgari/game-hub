import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitchButton from "./ColorModeSwitchButton";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding={"0 10px"}>
      <Link to="/">
        <Image src={logo} boxSize={"60px"} objectFit={"cover"} />
      </Link>

      <SearchBar />
      <ColorModeSwitchButton />
    </HStack>
  );
};

export default NavBar;
