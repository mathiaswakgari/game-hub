import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import { AiFillCaretDown } from "react-icons/ai";
import useGameQueryStoreStore from "../stores/gameQueryStore";
import Platform from "../entities/Platform";

const PlatformSelector = () => {
  const setPlatformId = useGameQueryStoreStore((s) => s.setPlatformId);
  const platformId = useGameQueryStoreStore((s) => s.gameQuery.platformId);
  const { data: results } = usePlatforms();
  const selectedPlatform = results?.results.find(
    (p: Platform) => p.id === platformId
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<AiFillCaretDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {results?.results.map((platform: Platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => setPlatformId(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
