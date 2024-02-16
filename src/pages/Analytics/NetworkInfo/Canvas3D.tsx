/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {useTheme} from "@mui/material";
import React, {Suspense, useEffect, useRef} from "react";
import {CardWithStyle} from "../../../components/Card";
import { style } from "@mui/system";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

let StyleCard = css``;

const StyleCanvas = css`
  border-radius: inherit;
  height: auto !important;

  & > canvas {
    width: 100% !important;
    height: auto !important;
    border-radius: inherit;
  }
`;

type Canvas3DProps = {
  cube1: number;
  cube2: number;
  cube3: number;
};

const Canvas3D = ({cube1, cube2, cube3}: Canvas3DProps) => {
  const theme = useTheme();
  const spline = useRef<any>();
  const LiquidCube1 = useRef<any>();
  const LiquidCube2 = useRef<any>();
  const LiquidCube3 = useRef<any>();
  const Backdrop = useRef<any>();

  if (theme.palette.mode === "light") {
    StyleCard = css`
      background-color: #cceae5!important;
      padding: 23px;
      height: 121px;
      padding-top: 0px;
    `;
  } else {
    StyleCard = css`
      background-color: #0e1820!important;
      padding: 23px;
      height: 121px;
      padding-top: 0px;
    `;
  }

  const initMesh = (id: string) => {
    if (!spline.current) return;
    const obj = spline.current.findObjectByName(id);
    if (!obj) return;
    return obj;
  };

  const updateCube = (cube: any, scale: number) => {
    if (!cube) return;
    if (scale < 0.1) scale = 0.1;
    cube.scale.y = scale;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateBackdropTheme = () => {
    if (!Backdrop.current) return;
    if (theme.palette.mode === "light") {
      Backdrop.current.scale.x = 0;
      Backdrop.current.scale.z = 0;
    } else {
      Backdrop.current.scale.x = 1;
      Backdrop.current.scale.z = 1;
    }
  };

  function onLoad(splineApp: any) {
    spline.current = splineApp;
    LiquidCube1.current = initMesh("LiquidCube1");
    LiquidCube2.current = initMesh("LiquidCube2");
    LiquidCube3.current = initMesh("LiquidCube3");
    Backdrop.current = initMesh("Backdrop");

    updateCube(LiquidCube1.current, cube1);
    updateCube(LiquidCube2.current, cube2);
    updateCube(LiquidCube3.current, cube3);

    updateBackdropTheme();
  }

  useEffect(() => {
    updateBackdropTheme();
  }, [theme.palette.mode, updateBackdropTheme]);

  return (
    <CardWithStyle css={StyleCard}>
      <Suspense fallback={<div>Loading...</div>}>
        <Spline
          css={StyleCanvas}
          scene="https://draft.spline.design/S0BkmAOqJNfImY29/scene.splinecode"
          onLoad={onLoad}
        />
      </Suspense>
    </CardWithStyle>
  );
};

export default Canvas3D;
