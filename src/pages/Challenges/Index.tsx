import {Box, Grid, InputAdornment, TextField, Typography} from "@mui/material";
import PageHeader from "../layout/PageHeader";
import TitleHashButton, {HashType} from "../../components/TitleHashButton";
import PointCard from "./PointCard";
import ChallengesTabs from "./Tabs";
import {Wallet} from "@mui/icons-material";

export default function ChallengesPage() {
  const address =
    "0x6dac61438922414d2aeb46e4ecda950022d0d9778f4a33b7244a1657dd217236";

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={12} lg={12}>
        <PageHeader />
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Typography variant="h3" marginBottom={2}>
          Challenges
        </Typography>
      </Grid>
      <Grid item xs={12} md={8} lg={9} alignSelf="center">
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
        />
        <TitleHashButton hash={address} type={HashType.ACCOUNT} />
      </Grid>
      <Grid item xs={12} md={4} lg={3} marginTop={{md: 0, xs: 2}}>
        <PointCard address={address} />
      </Grid>
      <Grid item xs={12} md={12} lg={12} marginTop={4}>
        <ChallengesTabs address={address} />
      </Grid>
    </Grid>
  );
}
