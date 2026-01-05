import { Portal, Select, createListCollection } from "@chakra-ui/react";
import useGameQueryStore from "../store";

const SortSelector = () => {
  const setSoretOrder = useGameQueryStore((s) => s.setSortOrder);
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const frameworks = createListCollection({ items: sortOrders });
  return (
    <Select.Root
      collection={frameworks}
      size="lg"
      width="250px"
      value={sortOrder ? [sortOrder] : []}
    >
      <Select.HiddenSelect />
      <Select.Label>Order by ...</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder={"Order by..."} />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {sortOrders.map((order) => (
              <Select.Item
                onClick={() => {
                  setSoretOrder(order.value);
                }}
                // value={order.value}
                item={order.value}
                key={order.value}
              >
                {order.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};

export default SortSelector;
