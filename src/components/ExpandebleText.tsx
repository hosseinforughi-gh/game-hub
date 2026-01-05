import { Button, Text } from "@chakra-ui/react";
import React, { Children, useState } from "react";

interface Props {
  children: String;
}

const ExpandebleText = ({ children }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const limit = 300;
  if (!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>;
  const summary = isExpanded ? children : children.substring(0, limit) + "...";
  return (
    <Text textAlign="justify">
      {summary}
      <Button
        size={"xs"}
        marginLeft={1}
        fontWeight={"bold"}
        backgroundColor={"yellow.300"}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Show Less" : "Show More"}
      </Button>
    </Text>
  );
};

export default ExpandebleText;
