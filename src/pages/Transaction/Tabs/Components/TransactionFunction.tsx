import React from "react";
import {Box, Stack, SxProps, Theme} from "@mui/material";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import {CodeLineBox} from "../../../../components/CodeLineBox";
import {Link} from "../../../../routing";

function ScriptCodeLine({sx}: {sx?: SxProps<Theme>}): JSX.Element {
  return (
    <CodeLineBox sx={[...(Array.isArray(sx) ? sx : [sx])]}>
      <Stack direction="row" alignItems="center" spacing={1.5}>
        <DescriptionOutlinedIcon sx={{fontSize: 17, padding: 0}} />
        <Box>{`Script`}</Box>
      </Stack>
    </CodeLineBox>
  );
}

export default function TransactionFunction({
  transaction,
  sx,
}: {
  transaction: any;
  sx?: SxProps<Theme>;
}) {
  if (!("payload" in transaction)) {
    return null;
  }

  if (transaction.payload.type === "script_payload") {
    return <ScriptCodeLine sx={[...(Array.isArray(sx) ? sx : [sx])]} />;
  }

  if (!("function" in transaction.payload)) {
    return null;
  }

  const functionName = transaction.payload.function;

  return (
    <CodeLineBox clickable sx={[...(Array.isArray(sx) ? sx : [sx])]}>
      <Link to={`/account`} underline="none" style={{color: "inherit"}}>
        {functionName}
      </Link>
    </CodeLineBox>
  );
}
