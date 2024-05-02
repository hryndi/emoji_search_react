import { IconButton, InputAdornment, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
// import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

interface SearchBarProps {
  searchValSetter: React.Dispatch<React.SetStateAction<string>>;
  searchVal: string;
  fetchClick: () => void;
}

const SearchBar = ({ searchValSetter, fetchClick, searchVal }: SearchBarProps) => {
  return (
    <div style={{ display: "flex", gap: "0.7rem" }}>
      <TextField
        placeholder="Search"
        type="text"
        variant="outlined"
        fullWidth
        size="small"
        onChange={(e) => searchValSetter(e.target.value)}
        value={searchVal}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),

          // endAdornment: value && (
          //   <IconButton
          //     aria-label="toggle password visibility"
          //     onClick={() => setValue("")}
          //   >
          //     <CancelRoundedIcon />
          //   </IconButton>
          // ),
        }}
      />
      <Button onClick={fetchClick} variant="contained" endIcon={<SearchIcon />}>
        Send
      </Button>
    </div>
  );
};

export default SearchBar;
