import React from "react";
import {InputAdornment, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ethers } from "ethers";
import { useNavigate } from "../../../routing";

export default function SearchInput({...params}) {

  const navigate = useNavigate();

  const submitSearch = (e: any) => {
    const accountAddressOrTxHash = e.target.value;

    if (ethers.utils.isAddress(accountAddressOrTxHash)) {
      navigate(`/account/${accountAddressOrTxHash}`);
    } else if (/^0x([A-Fa-f0-9]{64})$/.test(accountAddressOrTxHash)) {
      navigate(`/tx/${accountAddressOrTxHash}`);
    }
  };

  return (
    <form onSubmit={(e) => { submitSearch(e); e.preventDefault();}} style={{width: "100%"}}>
      <TextField
        {...params}
        InputProps={{
          sx: {
            fontSize: "1.1rem",
            lineHeight: "1.1rem",
          },
          "aria-label": "search",
          ...params.InputProps,
          startAdornment: (
            <InputAdornment
              position="start"
              sx={{ml: 0.5, marginTop: "0!important"}}
            >
              <SearchIcon fontSize="large" color="secondary" />
            </InputAdornment>
          ),
        }}
        placeholder="Search Explorer"
        helperText="Account Address / Txn Hash"
        fullWidth
        onKeyDown={(ev) => {
          if (ev.key === 'Enter') {
            // Do code here
            submitSearch(ev);
            ev.preventDefault();
          }
        }}
      />
    </form>
  );
}
