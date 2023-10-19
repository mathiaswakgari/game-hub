import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { AiFillCaretDown } from "react-icons/ai";
import useGameQueryStoreStore from "../stores/gameQueryStore";

const SortSelector = () => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "created", label: "Date created" },
    { value: "updated", label: "Date Updated" },
    { value: "rating", label: "Rating" },
    { value: "metacritic", label: "Metacritic" },
    { value: "realsed", label: "Date released" },
  ];

  const setSortOrder = useGameQueryStoreStore((s) => s.setSortOrder);

  const sortOrder = useGameQueryStoreStore((s) => s.gameQuery.sortOrder);

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<AiFillCaretDown />}>
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem onClick={() => setSortOrder(order.value)} key={order.value}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
