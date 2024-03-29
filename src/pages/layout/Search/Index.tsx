import React, {useEffect, useState} from "react";
import {Autocomplete, AutocompleteInputChangeReason} from "@mui/material";
import SearchInput from "./SearchInput";
import ResultLink from "./ResultLink";

export default function HeaderSearch() {
  const [inputValue, setInputValue] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");
  const [open, setOpen] = useState(false);

  const options: any[] = [];

  // inputValue is the value in the text field
  // searchValue is the value that we search
  // searchValue is updated 0.5s after the inputValue is changed
  // this is to wait for users to stop typing then execute searching
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchValue(inputValue);
    }, 500);

    return () => clearTimeout(timer);
  }, [inputValue]);

  const handleInputChange = (
    event: any,
    newInputValue: React.SetStateAction<string>,
    reason: AutocompleteInputChangeReason,
  ) => {
    if (newInputValue.length === 0) {
      if (open) {
        setOpen(false);
      }
    } else {
      if (!open) {
        setOpen(true);
      }
    }

    if (event && event.type === "blur") {
      setInputValue("");
    } else if (reason !== "reset") {
      setInputValue(newInputValue);
    }
  };

  const handleSubmitSearch = async () => {};

  return (
    <Autocomplete
      open={open}
      sx={{
        mb: {sm: 1, md: 2},
        flexGrow: 1,
        width: "100%",
        "&.MuiAutocomplete-root .MuiFilledInput-root": {
          py: 1.5,
          px: 2,
        },
        "&.MuiAutocomplete-root .MuiFormHelperText-root": {
          opacity: "0",
          mt: 0.5,
          mb: 0,
          fontFamily: "apparat",
          fontWeight: "light",
        },
        "&.Mui-focused .MuiFormHelperText-root": {
          opacity: "0.6",
        },
      }}
      autoHighlight
      handleHomeEndKeys
      forcePopupIcon={false}
      selectOnFocus={true}
      freeSolo
      clearOnBlur
      autoSelect={false}
      getOptionLabel={() => ""}
      filterOptions={(x) => x.filter((x) => !!x)}
      options={options}
      inputValue={inputValue}
      onInputChange={handleInputChange}
      onClose={() => setOpen(false)}
      renderInput={(params) => {
        return <SearchInput {...params} />;
      }}
      renderOption={(props, option) => {
        return (
          <li {...props} key={props.id}>
            <ResultLink to={option.to} text={option.label} />
          </li>
        );
      }}
      onHighlightChange={(event, option) => {}}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          handleSubmitSearch();
          event.preventDefault();
        }
      }}
    />
  );
}
