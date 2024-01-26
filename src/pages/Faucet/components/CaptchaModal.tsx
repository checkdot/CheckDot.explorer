import {Box, Button, TextField, Typography} from "@mui/material";
import {useTheme} from "@mui/system";
import {useEffect, useRef, useState} from "react";
import {grey, primary} from "../../../themes/colors/colorPalette";
import StyledDialog from "../../../components/StyledDialog";
import {RestartAlt} from "@mui/icons-material";

interface CaptchaModalProps {
  open: boolean;
  handleDialogClose: any;
  handleFaucet: any;
}

export default function CaptchaModal({
  open,
  handleDialogClose,
  handleFaucet,
}: CaptchaModalProps) {
  const theme = useTheme();
  const ref = useRef<HTMLCanvasElement>(null);
  const [captcha, setCaptcha] = useState<{first: number; second: number}>();
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    if (open) {
      setAnswer("");
      setCaptcha({
        first: Math.floor(Math.random() * 90) + 10,
        second: Math.floor(Math.random() * 90) + 10,
      });
    }
  }, [ref, open]);

  useEffect(() => {
    if (ref.current && captcha) {
      const canvas = ref.current;
      const context = canvas.getContext("2d");

      if (context) {
        context.fillStyle =
          theme.palette.mode === "dark" ? grey[700] : grey["50"];
        context.fillRect(0, 0, 240, 100);

        context.font = "50px 'Give You Glory'";
        context.fillStyle =
          theme.palette.mode === "dark" ? primary[600] : primary[700];
        context.fillText(`${captcha.first} + ${captcha.second}`, 20, 65);

        context.strokeStyle =
          theme.palette.mode === "dark" ? primary[500] : primary[800];
        context.beginPath();
        const startX = Math.random() * 100;
        const endX =
          startX >= 50 ? Math.random() * 50 : 120 - Math.random() * 50;
        context.moveTo(10, startX);
        context.lineTo(230, endX);
        context.stroke();

        const startY = Math.random() * 200;
        const endY =
          startX >= 100 ? Math.random() * 100 : 200 - Math.random() * 100;
        context.moveTo(startY, 10);
        context.lineTo(endY, 90);
        context.stroke();
      }
    }
  }, [ref, captcha]);

  const onAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  const onSubmit = () => {
    if (parseInt(answer) === (captcha?.first ?? 0) + (captcha?.second ?? 0)) {
      handleFaucet();
      handleDialogClose();
    } else {
    }
  };

  const onRefresh = () => {
    setCaptcha({
      first: Math.floor(Math.random() * 90) + 10,
      second: Math.floor(Math.random() * 90) + 10,
    });
  };

  return (
    <StyledDialog open={open} handleDialogClose={handleDialogClose}>
      <Box display={"flex"} alignItems={"center"}>
        <canvas ref={ref} width={240} height={100} />
        <Typography variant="h5" padding={"0 16px"}>
          =
        </Typography>
        <TextField
          value={answer}
          onChange={onAnswerChange}
          sx={{width: "60px"}}
        />
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        marginTop={3}
      >
        <Button color="secondary" onClick={onRefresh} sx={{minWidth: "fit-content"}}>
          <RestartAlt />
        </Button>
        <Button
          variant="contained"
          onClick={onSubmit}
          sx={{
            width: "8rem",
            height: "3rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          Faucet
        </Button>
      </Box>
    </StyledDialog>
  );
}
