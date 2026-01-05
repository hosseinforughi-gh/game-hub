import { ColorModeButton } from "./ui/color-mode";
import { HStack } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  return (
    <HStack>
      <ColorModeButton size="xl" />
    </HStack>
  );
};

export default ColorModeSwitch;
