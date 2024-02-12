import {Box, Grid, InputAdornment, TextField, Typography} from "@mui/material";
import PageHeader from "../layout/PageHeader";
import TitleHashButton, {HashType} from "../../components/TitleHashButton";
import PointCard from "./PointCard";
import ChallengesTabs from "./Tabs";
import {Wallet} from "@mui/icons-material";
import { ethers } from "ethers";
import { useNavigate } from "../../routing";

export default function ChallengesPage() {
  const navigate = useNavigate();

  const submitSearch = (e: any) => {
    const accountAddressOrTxHash = e.target.value;

    if (ethers.utils.isAddress(accountAddressOrTxHash)) {
      navigate(`/account/${accountAddressOrTxHash}/challenges`);
    } else if (/^0x([A-Fa-f0-9]{64})$/.test(accountAddressOrTxHash)) {
    }
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={12} lg={12}>
        <PageHeader />
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Typography variant="h3" marginBottom={2}>
          Leaderboard Challenges
        </Typography>
      </Grid>
      <Grid item xs={12} md={12} lg={12} alignSelf="center">
        <TextField
          fullWidth
          placeholder="Search Address"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Wallet />
              </InputAdornment>
            ),
          }}
          sx={{marginBottom: 2}}
          onKeyDown={(ev) => {
            if (ev.key === 'Enter') {
              // Do code here
              submitSearch(ev);
              ev.preventDefault();
            }
          }}
        />
        {/* <TitleHashButton hash={address} type={HashType.ACCOUNT} /> */}
      </Grid>
      {/* <Grid item xs={12} md={4} lg={3} marginTop={{md: 0, xs: 2}}>
        <PointCard address={address} />
      </Grid> */}
      <Grid item xs={12} md={12} lg={12} marginTop={4}>
        <ChallengesTabs address={''} />
      </Grid>
    </Grid>
  );
}
