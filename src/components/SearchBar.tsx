import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";

interface Props {
  onSearch: (seatchText: string) => void;
}

const SearchBar = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) onSearch(ref.current?.value);
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
