import { Box, Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  if (ref.current) console.log(ref.current.value);
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <Box alignContent="center">
        <InputGroup startElement={<BsSearch />}>
          <Input
            variant="subtle"
            ref={ref}
            borderRadius={20}
            placeholder="Search games"
            size="lg"
            onKeyDown={(e) => {
              if (e.key === "Enter" && ref.current) {
                navigate("/");
                setSearchText(ref.current.value);
              }
            }}
          />
        </InputGroup>
      </Box>
    </form>
  );
};

export default SearchInput;
