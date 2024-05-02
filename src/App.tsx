// import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import SearchBar from "./components/SearchBar";
import EmojiCards from "./components/EmojiCards";
import { useEmojiSearch } from "../hooks/useEmojiSearch";

function App() {
  const { setSearchVal, searchVal, fetchedData, emojiFetch } = useEmojiSearch();
  return (
    <Box border={1} width={600} height={800}>
      <SearchBar fetchClick={emojiFetch} searchValSetter={setSearchVal} searchVal={searchVal} />
      <EmojiCards fetchedData={fetchedData} />
    </Box>
  );
}

export default App;
