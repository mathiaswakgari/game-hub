import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import { AiFillCaretDown } from "react-icons/ai";

interface Props {
  onSelectedPlatform: (platfromId: number) => void;
  selectedPlatformId: number | undefined;
}

const PlatformSelector = ({
  onSelectedPlatform,
  selectedPlatformId,
}: Props) => {
  const { data: results } = usePlatforms();
  const selectedPlatform = results?.results.find(
    (p) => p.id === selectedPlatformId
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<AiFillCaretDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {results?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectedPlatform(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
