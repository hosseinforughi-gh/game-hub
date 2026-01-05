import { Portal, Select, createListCollection } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
  const setSelectedPlatformID = useGameQueryStore((s) => s.setPlatformId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const { data, error } = usePlatform();
  const PlatformOption =
    data?.results.map((platform) => ({
      value: platform.name,
      label: platform.name,
    })) ?? [];
  const frameworks = createListCollection({ items: PlatformOption });

  if (error) return null;
  return (
    <Select.Root
      collection={frameworks}
      size="lg"
      width="250px"
      value={platformId ? [String(platformId)] : []}
    >
      <Select.HiddenSelect />
      <Select.Label>Platforms</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder={"select Platforms"} />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {data?.results.map((platform) => (
              <Select.Item
                onClick={() => {
                  setSelectedPlatformID(platform.id);
                }}
                // value={platform.id}
                item={String(platform.id)}
                key={platform.id}
              >
                {platform.name}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};

export default PlatformSelector;
