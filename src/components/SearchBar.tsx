import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
// import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

interface SearchBarProps {
  searchValSetter: React.Dispatch<React.SetStateAction<string>>;
  searchVal: string;
}

const SearchBar = ({ searchValSetter, searchVal }: SearchBarProps) => {
  return (
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
  );
};

export default SearchBar;
