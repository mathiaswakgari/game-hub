import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitchButton from "./ColorModeSwitchButton";
import SearchBar from "./SearchBar";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding={"0 10px"}>
      <Image src={logo} boxSize={"100px"} />
      <SearchBar onSearch={onSearch} />
      <ColorModeSwitchButton />
    </HStack>
  );
};

export default NavBar;
