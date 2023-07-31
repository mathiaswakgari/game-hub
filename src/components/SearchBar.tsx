import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<AiOutlineSearch />} />
      <Input placeholder="Search games..." borderRadius={"20px"} />
    </InputGroup>
  );
};

export default SearchBar;
