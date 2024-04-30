// import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import SearchBar from "./components/SearchBar";
import EmojiCards from "./components/EmojiCards";
import { useEmojiSearch } from "../hooks/useEmojiSearch";

function App() {
  const { setSearchVal, searchVal } = useEmojiSearch();
  return (
    <Box border={1} width={600} height={800}>
      <SearchBar searchValSetter={setSearchVal} searchVal={searchVal} />
      <EmojiCards />
    </Box>
  );
}

export default App;
