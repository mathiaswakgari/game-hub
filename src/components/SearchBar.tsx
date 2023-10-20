import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import useGameQueryStoreStore from "../stores/gameQueryStore";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const setSearchText = useGameQueryStoreStore((s) => s.setSearchText);
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) setSearchText(ref.current?.value);
        navigate("/");
      }}
    >
      <InputGroup>
        <InputLeftElement children={<AiOutlineSearch />} />
        <Input ref={ref} placeholder="Search games..." borderRadius={"20px"} />
      </InputGroup>
    </form>
  );
};

export default SearchBar;
