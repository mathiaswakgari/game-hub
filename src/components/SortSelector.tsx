import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { AiFillCaretDown } from "react-icons/ai";

interface Props {
  onSelectSort: (order: string) => void;
  selectedSortOrder: string;
}

const SortSelector = ({ onSelectSort, selectedSortOrder }: Props) => {
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

  const currentSortOrder = sortOrders.find(
    (order) => order.value === selectedSortOrder
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<AiFillCaretDown />}>
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem onClick={() => onSelectSort(order.value)} key={order.value}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
