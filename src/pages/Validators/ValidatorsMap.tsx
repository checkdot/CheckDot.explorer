import React, {useEffect, useState} from "react";
import {Stack, useMediaQuery, useTheme} from "@mui/material";
import Map from "./Components/Map";
import {grey} from "../../themes/colors/colorPalette";
import MapMetrics from "./Components/MapMetrics";
import {SkeletonTheme} from "react-loading-skeleton";

export default function ValidatorsMap() {
  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === "dark";
  const isOnMobile = !useMediaQuery(theme.breakpoints.up("md"));
  const backgroundColor = isDarkTheme ? grey[800] : grey[50];

  const validatorGeoGroups = [
    {
      country: "Japan",
      countryLat: 35.67608333333334,
      countryLng: 139.69811666666666,
      nodes: [
        {
          peer_id:
            "0a6eb54c274da96778a6702740a763f6aa7b02eef3d1efc2623d28289d185118",
          epoch: 5646,
          country: "Japan",
          region: "Remote",
          city: "Tokyo",
          latitude: 35.6895,
          longitude: 139.6917,
        },
        {
          peer_id:
            "ae139fd4e266beb28925227dcd220d89348117680e48d4aa20685ae102ae2a13",
          epoch: 3976,
          country: "Japan",
          region: "Remote",
          city: "Tokyo",
          latitude: 35.6895,
          longitude: 139.6917,
        },
        {
          peer_id:
            "6c8a3474cb49202515d121fea0f3217d303e41f6bdc43e615f1cd90855118089",
          epoch: 5646,
          country: "Japan",
          region: "Remote",
          city: "Tokyo",
          latitude: 35.6895,
          longitude: 139.6917,
        },
        {
          peer_id:
            "3eaf3ebc49555c705c34ec1ffe77404bdb7383b388476c36538b92b7b1b806c9",
          epoch: 5646,
          country: "Japan",
          region: "Remote",
          city: "Tokyo",
          latitude: 35.6895,
          longitude: 139.6917,
        },
        {
          peer_id:
            "ea733e480c379c61dae9cfb3f14a388f6a683d7a797c135f86b924fb7a2e8cdb",
          epoch: 5646,
          country: "Japan",
          region: "Remote",
          city: "Ōi",
          latitude: 35.609,
          longitude: 139.7302,
        },
        {
          peer_id:
            "189093e65faaea1d0c1c367b7c78b4d2ea569fc3d1e7d20b226eec0361b1a116",
          epoch: 5646,
          country: "Japan",
          region: "Remote",
          city: "Tokyo",
          latitude: 35.6895,
          longitude: 139.6917,
        },
      ],
      cities: [
        {
          name: "Tokyo",
          count: 5,
        },
        {
          name: "Ōi",
          count: 1,
        },
      ],
    },
    {
      country: "United States",
      countryLat: 38.040414285714284,
      countryLng: -94.41109285714285,
      nodes: [
        {
          peer_id:
            "a4a00989d8ecc6d116b2283503f58de94d7fc33fff9e28010868abeb70d7d051",
          epoch: 5646,
          country: "United States",
          region: "Americas",
          city: "Ashburn",
          latitude: 39.0437,
          longitude: -77.4875,
        },
        {
          peer_id:
            "df0996b6998ec080ea7931ccd87400fa74eb57f8129bb0f11996ae8bae12d565",
          epoch: 5646,
          country: "United States",
          region: "Americas",
          city: "Ashburn",
          latitude: 39.0437,
          longitude: -77.4875,
        },
        {
          peer_id:
            "ed84f8724f703c17075fb528b5713424e794f79ac82273d8f747b3f26fdd9ecd",
          epoch: 5646,
          country: "United States",
          region: "Americas",
          city: "Hilliard",
          latitude: 40.0334,
          longitude: -83.1582,
        },
        {
          peer_id:
            "dca6aaf410e984463b37e192652b3c09b0ae3968b3e0171bb076ae0e21112ef9",
          epoch: 5646,
          country: "United States",
          region: "Americas",
          city: "Ashburn",
          latitude: 39.0437,
          longitude: -77.4875,
        },
        {
          peer_id:
            "bfa99851a3abd9f64e919c5c33c32b591564eb0ebb3e838fcc456d7ae0cc6ec2",
          epoch: 5646,
          country: "United States",
          region: "Americas",
          city: "Ashburn",
          latitude: 39.0437,
          longitude: -77.4875,
        },
        {
          peer_id:
            "6fdb6516f550ceada7d1fb687b52e4d334c0805a856f17c85f1eb852cbe66ffb",
          epoch: 5646,
          country: "United States",
          region: "Americas",
          city: "San Diego",
          latitude: 32.7454,
          longitude: -117.1272,
        },
        {
          peer_id:
            "a651c7c52d64a2014379902bbc92439d196499bcc36d94ff0395aa45837c66db",
          epoch: 5646,
          country: "United States",
          region: "Americas",
          city: "Dallas",
          latitude: 32.7831,
          longitude: -96.8067,
        },
        {
          peer_id:
            "ee49776eff9fd395eb90d601449542080645e63704f518b31c6f72b6a95d7868",
          epoch: 3975,
          country: "United States",
          region: "Americas",
          city: "Ashburn",
          latitude: 39.0437,
          longitude: -77.4875,
        },
        {
          peer_id:
            "50b27eee627c0648ff4867894e264d67de2049ee9a8b92040cb35020b74afa39",
          epoch: 5646,
          country: "United States",
          region: "Americas",
          city: "Phoenix",
          latitude: 33.4484,
          longitude: -112.074,
        },
        {
          peer_id:
            "ddf23883328d39d8cbb4fad97f0e4bd45827ea999b66aa2a1cffa76615b9ef01",
          epoch: 5646,
          country: "United States",
          region: "Americas",
          city: "Omaha",
          latitude: 41.2403,
          longitude: -95.998,
        },
        {
          peer_id:
            "fc90c3e74dfb562827ef85dea5669beeca7717faee0c3ba520c3ab08f9b53135",
          epoch: 5646,
          country: "United States",
          region: "Americas",
          city: "New York City",
          latitude: 40.7143,
          longitude: -74.006,
        },
        {
          peer_id:
            "32f23e884c0c6f663997c7d4602ef0916bae15492833ee8e7266135e40ff8b14",
          epoch: 5646,
          country: "United States",
          region: "Americas",
          city: "Phoenix",
          latitude: 33.4484,
          longitude: -112.074,
        },
        {
          peer_id:
            "2784eb9f3b368be1db73256336014a01c02b1b06ab01df7387bb8945ca73045e",
          epoch: 5646,
          country: "United States",
          region: "Americas",
          city: "San Jose",
          latitude: 37.3394,
          longitude: -121.895,
        },
        {
          peer_id:
            "08d2e8081f90d85e52b70427f3c9807d99181aae2ea423a01485e153af436c4f",
          epoch: 2192,
          country: "United States",
          region: "Americas",
          city: "The Dalles",
          latitude: 45.5946,
          longitude: -121.1787,
        },
      ],
      cities: [
        {
          name: "Ashburn",
          count: 5,
        },
        {
          name: "Phoenix",
          count: 2,
        },
        {
          name: "Hilliard",
          count: 1,
        },
        {
          name: "San Diego",
          count: 1,
        },
        {
          name: "Dallas",
          count: 1,
        },
        {
          name: "Omaha",
          count: 1,
        },
        {
          name: "New York City",
          count: 1,
        },
        {
          name: "San Jose",
          count: 1,
        },
        {
          name: "The Dalles",
          count: 1,
        },
      ],
    },
    {
      country: "France",
      countryLat: 49.179375,
      countryLng: 5.233224999999999,
      nodes: [
        {
          peer_id:
            "b4a4f1ef8b0702d85547dc444571a473f736e1205a86db36dad13815ad9bbbf6",
          epoch: 5646,
          country: "France",
          region: "Western_Europe",
          city: "Strasbourg",
          latitude: 48.5839,
          longitude: 7.7455,
        },
        {
          peer_id:
            "9a41af5c002f91dc29cb2843ab823e3d6cdaa6cc86e6331646a4f1328609a744",
          epoch: 5646,
          country: "France",
          region: "Western_Europe",
          city: "Strasbourg",
          latitude: 48.5839,
          longitude: 7.7455,
        },
        {
          peer_id:
            "85bec1dcb618004064ab52a594321e8f047bac53be8244c5d10ac136128e30f7",
          epoch: 5646,
          country: "France",
          region: "Western_Europe",
          city: "Aubervilliers",
          latitude: 48.9167,
          longitude: 2.3833,
        },
        {
          peer_id:
            "ff3e9c10dd3781a1e0750a75ae9e5b04133cd7e8ca18b9936ffcf3b2a2538a49",
          epoch: 5646,
          country: "France",
          region: "Western_Europe",
          city: "Lille",
          latitude: 50.633,
          longitude: 3.0586,
        },
      ],
      cities: [
        {
          name: "Strasbourg",
          count: 2,
        },
        {
          name: "Aubervilliers",
          count: 1,
        },
        {
          name: "Lille",
          count: 1,
        },
      ],
    },
    {
      country: "Germany",
      countryLat: 50.155407142857136,
      countryLng: 10.73427142857143,
      nodes: [
        {
          peer_id:
            "b5064f2e6d2d4887c836c8cbd90d23a75cd7afd4530e4a82f06bf528abcb30d6",
          epoch: 3975,
          country: "Germany",
          region: "Western_Europe",
          city: "Frankfurt am Main",
          latitude: 50.1155,
          longitude: 8.6842,
        },
        {
          peer_id:
            "1c6a051d9a5ec4cf4200bab21a794d3afe8259d625f6b78aa4d01ab4652327d5",
          epoch: 5646,
          country: "Germany",
          region: "Western_Europe",
          city: "Frankfurt am Main",
          latitude: 50.1155,
          longitude: 8.6842,
        },
        {
          peer_id:
            "db5247f859ce63dbe8940cf8773be722a60dcc594a8be9aca4b76abceb251b8e",
          epoch: 5646,
          country: "Germany",
          region: "Western_Europe",
          city: "Frankfurt am Main",
          latitude: 50.1155,
          longitude: 8.6842,
        },
        {
          peer_id:
            "81d41a31fb5d3f827d188511e6fca1ddbed6cfa0ffbd46fa6d84a7adfe59f356",
          epoch: 5646,
          country: "Germany",
          region: "Western_Europe",
          city: "Munich",
          latitude: 48.1374,
          longitude: 11.5755,
        },
        {
          peer_id:
            "c067ce10f1faa4812fe608e2d4b3e1fe0bb629e91cfff532cccc23803a624414",
          epoch: 5646,
          country: "Germany",
          region: "Western_Europe",
          city: "Falkenstein",
          latitude: 50.4779,
          longitude: 12.3713,
        },
        {
          peer_id:
            "302b69423fde5c7dd333ee50d48df16f076072e61f95e0f6db5685ee6c70d35b",
          epoch: 5646,
          country: "Germany",
          region: "Western_Europe",
          city: "Frankfurt am Main",
          latitude: 50.1155,
          longitude: 8.6842,
        },
        {
          peer_id:
            "f2b6feeea4546648c257c7e33ff4f0aa8db3bb2949cca065c9db015478363458",
          epoch: 5646,
          country: "Germany",
          region: "Western_Europe",
          city: "Falkenstein",
          latitude: 50.4779,
          longitude: 12.3713,
        },
        {
          peer_id:
            "18a3ef480b7883d05b917873a8b6d5f5a5f763372b650242ede89836a67cdce8",
          epoch: 5646,
          country: "Germany",
          region: "Western_Europe",
          city: "Falkenstein",
          latitude: 50.4779,
          longitude: 12.3713,
        },
        {
          peer_id:
            "d2dc57e95669c9bf102cb5693fe8b2a8b10d330213d7ddd9fb417f86f183dc1d",
          epoch: 5646,
          country: "Germany",
          region: "Western_Europe",
          city: "Falkenstein",
          latitude: 50.4779,
          longitude: 12.3713,
        },
        {
          peer_id:
            "06099edbe54f242bad50020dfd67646b1e46282999483e7064e70f02f7ea3c15",
          epoch: 5646,
          country: "Germany",
          region: "Western_Europe",
          city: "Frankfurt am Main",
          latitude: 50.1155,
          longitude: 8.6842,
        },
        {
          peer_id:
            "e1abb4ea11673aad3137052dce831eb20a1907815cb4a03ccac38ba7a9e988d3",
          epoch: 5646,
          country: "Germany",
          region: "Western_Europe",
          city: "Falkenstein",
          latitude: 50.4779,
          longitude: 12.3713,
        },
        {
          peer_id:
            "904bc056aa17a45c2715113e06cb42f5762581a7b839206f5348938db69425be",
          epoch: 5646,
          country: "Germany",
          region: "Western_Europe",
          city: "Falkenstein",
          latitude: 50.4779,
          longitude: 12.3713,
        },
        {
          peer_id:
            "550fe3956e44112599b8410404e0977e74cc5bcb59a11b0706da734cd0f9beb2",
          epoch: 5646,
          country: "Germany",
          region: "Western_Europe",
          city: "Frankfurt am Main",
          latitude: 50.1155,
          longitude: 8.6842,
        },
        {
          peer_id:
            "bcb83e07eed46120a0143bd9861ea82495293228b9cd64cc43bda722edaeb7ad",
          epoch: 5646,
          country: "Germany",
          region: "Western_Europe",
          city: "Falkenstein",
          latitude: 50.4779,
          longitude: 12.3713,
        },
      ],
      cities: [
        {
          name: "Falkenstein",
          count: 7,
        },
        {
          name: "Frankfurt am Main",
          count: 6,
        },
        {
          name: "Munich",
          count: 1,
        },
      ],
    },
    {
      country: "Finland",
      countryLat: 61.05038,
      countryLng: 25.3017,
      nodes: [
        {
          peer_id:
            "86da6288dd50be1653aa2a8269acf881d3b4b414938ca7ab3b662c2dfeb794df",
          epoch: 4379,
          country: "Finland",
          region: "Western_Europe",
          city: "Vaala",
          latitude: 64.5739,
          longitude: 26.7669,
        },
        {
          peer_id:
            "48179547b95487f77214c12e2561d53531122a91e5f79ee9be968ce8185bc444",
          epoch: 4379,
          country: "Finland",
          region: "Western_Europe",
          city: "Helsinki",
          latitude: 60.1695,
          longitude: 24.9354,
        },
        {
          peer_id:
            "06be5d9afa759b48140a69c737e9b066270146c7065455d04c2c76842c3e23d4",
          epoch: 5646,
          country: "Finland",
          region: "Western_Europe",
          city: "Helsinki",
          latitude: 60.1695,
          longitude: 24.9354,
        },
        {
          peer_id:
            "4cfeaf68aacfd0cd459c292837854ce058b9ba6c1cc35e8684b1a5030b1dc922",
          epoch: 5646,
          country: "Finland",
          region: "Western_Europe",
          city: "Helsinki",
          latitude: 60.1695,
          longitude: 24.9354,
        },
        {
          peer_id:
            "447fc1fc130cf9245d9ca291785d0f8a00c3ebdc26b2e4c6165801b0af01c917",
          epoch: 5646,
          country: "Finland",
          region: "Western_Europe",
          city: "Helsinki",
          latitude: 60.1695,
          longitude: 24.9354,
        },
      ],
      cities: [
        {
          name: "Helsinki",
          count: 4,
        },
        {
          name: "Vaala",
          count: 1,
        },
      ],
    },
    {
      country: "Sweden",
      countryLat: 59.3294,
      countryLng: 18.0687,
      nodes: [
        {
          peer_id:
            "22dd12212d76bc5844b4a0605bf59fa56547f42a40fb42267e29adca5efecfc8",
          epoch: 5646,
          country: "Sweden",
          region: "Western_Europe",
          city: "Stockholm",
          latitude: 59.3294,
          longitude: 18.0687,
        },
        {
          peer_id:
            "209154f6e735562ff13b963b91588039a162fa95f409c068f917f27b762dfff8",
          epoch: 5646,
          country: "Sweden",
          region: "Western_Europe",
          city: "Stockholm",
          latitude: 59.3294,
          longitude: 18.0687,
        },
        {
          peer_id:
            "c48683f9f684d2845c18e8d33d5f6c8581acfc1eb1c78b1de25562d136877e10",
          epoch: 5646,
          country: "Sweden",
          region: "Western_Europe",
          city: "Stockholm",
          latitude: 59.3294,
          longitude: 18.0687,
        },
        {
          peer_id:
            "0e8a71d40da724ac1ff522d9686dbf1da21bab2d803441df73c86c4bae76d399",
          epoch: 5430,
          country: "Sweden",
          region: "Western_Europe",
          city: "Stockholm",
          latitude: 59.3294,
          longitude: 18.0687,
        },
        {
          peer_id:
            "fd92966377f67c75c9165fd7c591b26294edc01d3ea2b71bd4b75375d08445ab",
          epoch: 5646,
          country: "Sweden",
          region: "Western_Europe",
          city: "Stockholm",
          latitude: 59.3294,
          longitude: 18.0687,
        },
      ],
      cities: [
        {
          name: "Stockholm",
          count: 5,
        },
      ],
    },
    {
      country: "South Korea",
      countryLat: 37.566,
      countryLng: 126.9784,
      nodes: [
        {
          peer_id:
            "4c893cf8d614f503e982df5b48e9443bab4ea6be4f922a5d3858305c0a3af3ee",
          epoch: 3975,
          country: "South Korea",
          region: "Remote",
          city: "Seoul",
          latitude: 37.566,
          longitude: 126.9784,
        },
        {
          peer_id:
            "947c6451ad9a8659cba4e60a6da41086eb66e73fc07936bd3b7044873b5e094d",
          epoch: 5646,
          country: "South Korea",
          region: "Remote",
          city: "Seoul",
          latitude: 37.566,
          longitude: 126.9784,
        },
        {
          peer_id:
            "371dfdee9fbecaa358683936c5946aa28393067fa60e1e185c4250da461e15cf",
          epoch: 5646,
          country: "South Korea",
          region: "Remote",
          city: "Seoul",
          latitude: 37.566,
          longitude: 126.9784,
        },
        {
          peer_id:
            "a286a9187c86b4a3cef60478e5c61bb45757b795a8e6577ebbf0fa990db574cc",
          epoch: 5646,
          country: "South Korea",
          region: "Remote",
          city: "Seoul",
          latitude: 37.566,
          longitude: 126.9784,
        },
        {
          peer_id:
            "d4e43fa15a4cf475b35f7278f02ae5a694e14fbd7ef2494e39e7978781b3eefe",
          epoch: 5646,
          country: "South Korea",
          region: "Remote",
          city: "Seoul",
          latitude: 37.566,
          longitude: 126.9784,
        },
        {
          peer_id:
            "2fa9d01fb4a1c2fdac5f45419b98213604bc215817d4b394ab372e5d59d2753c",
          epoch: 5646,
          country: "South Korea",
          region: "Remote",
          city: "Seoul",
          latitude: 37.566,
          longitude: 126.9784,
        },
        {
          peer_id:
            "faed6de6eacfb745f602d61a1ad559b0dda7fb2723d7d168c50b94687247a8b0",
          epoch: 5646,
          country: "South Korea",
          region: "Remote",
          city: "Seoul",
          latitude: 37.566,
          longitude: 126.9784,
        },
        {
          peer_id:
            "be4e66094c14a8c69361173fbd6694279db5fd8401bcb1d9c5df066755820a30",
          epoch: 5646,
          country: "South Korea",
          region: "Remote",
          city: "Seoul",
          latitude: 37.566,
          longitude: 126.9784,
        },
        {
          peer_id:
            "9df537cbe360f51499f53ca27b83f1c3a92fb7b068bc79eb8e33c85a50f84380",
          epoch: 5583,
          country: "South Korea",
          region: "Remote",
          city: "Seoul",
          latitude: 37.566,
          longitude: 126.9784,
        },
      ],
      cities: [
        {
          name: "Seoul",
          count: 9,
        },
      ],
    },
    {
      country: "Taiwan",
      countryLat: 25.0478,
      countryLng: 121.5319,
      nodes: [
        {
          peer_id:
            "99d623e94981c2a6d41306785d69d66c237c6d3ac305cb6f32307785fde7fda2",
          epoch: 3976,
          country: "Taiwan",
          region: "Remote",
          city: "Taipei",
          latitude: 25.0478,
          longitude: 121.5319,
        },
      ],
      cities: [
        {
          name: "Taipei",
          count: 1,
        },
      ],
    },
    {
      country: "Singapore",
      countryLat: 1.293690909090909,
      countryLng: 103.82268181818182,
      nodes: [
        {
          peer_id:
            "4cc22e5d2e84794c3c672b0b34145898ee971a4ff042eabae23627547f6dac80",
          epoch: 5646,
          country: "Singapore",
          region: "Remote",
          city: "Singapore",
          latitude: 1.2897,
          longitude: 103.8501,
        },
        {
          peer_id:
            "e8fac9c24a3bfc71ed79d466fa3c2c2b4787f1f9686e1d1e9e97fde473898788",
          epoch: 4379,
          country: "Singapore",
          region: "Remote",
          city: "Singapore",
          latitude: 1.3215,
          longitude: 103.6957,
        },
        {
          peer_id:
            "adbfddd3d10cad1eed59d2c0793df0bfd1d16255309c38b34b8351daaddecccc",
          epoch: 5646,
          country: "Singapore",
          region: "Remote",
          city: "Singapore",
          latitude: 1.2897,
          longitude: 103.8501,
        },
        {
          peer_id:
            "649127a4d1b26b4cf936f7b795917dbcb571c59c2926ae473fe4d9df3575790e",
          epoch: 5646,
          country: "Singapore",
          region: "Remote",
          city: "Singapore",
          latitude: 1.2897,
          longitude: 103.8501,
        },
        {
          peer_id:
            "5ae6127c854988607bb3375484e61ba10e2ce5e6ca9ff92a7b322149ddbbf552",
          epoch: 5064,
          country: "Singapore",
          region: "Remote",
          city: "Singapore",
          latitude: 1.27,
          longitude: 103.8573,
        },
        {
          peer_id:
            "52b0fd0daaf4f24ddf389768bf24be0a291aabbbdae4ec7b46bc7ed7df41cbe9",
          epoch: 5646,
          country: "Singapore",
          region: "Remote",
          city: "Singapore",
          latitude: 1.3215,
          longitude: 103.6957,
        },
        {
          peer_id:
            "46cbb9afc2255c8afcf2a0c134fe9066a9edaf0ada139fc234030c09b984100d",
          epoch: 5646,
          country: "Singapore",
          region: "Remote",
          city: "Singapore",
          latitude: 1.2897,
          longitude: 103.8501,
        },
        {
          peer_id:
            "eb5d1dfba88204036132b2bf4f4600f20822738e01985401ba45e75c464d1965",
          epoch: 5646,
          country: "Singapore",
          region: "Remote",
          city: "Singapore",
          latitude: 1.2897,
          longitude: 103.8501,
        },
        {
          peer_id:
            "4e28ca55c3ccde886560d667d60cd2d1193e742ff5aede3ba93b3860a97e207f",
          epoch: 5646,
          country: "Singapore",
          region: "Remote",
          city: "Singapore",
          latitude: 1.2897,
          longitude: 103.8501,
        },
        {
          peer_id:
            "29cf6ca262ee369b944bc3daa18879e1911f7d5aea120b3c9a54174f610f4630",
          epoch: 5646,
          country: "Singapore",
          region: "Remote",
          city: "Singapore",
          latitude: 1.2897,
          longitude: 103.8501,
        },
        {
          peer_id:
            "d60280852b50c341b22bba06562a817293d7b834eac251e7600b25d8bdd9efa3",
          epoch: 5646,
          country: "Singapore",
          region: "Remote",
          city: "Singapore",
          latitude: 1.2897,
          longitude: 103.8501,
        },
      ],
      cities: [
        {
          name: "Singapore",
          count: 11,
        },
      ],
    },
    {
      country: "Ireland",
      countryLat: 53.3331,
      countryLng: -6.2489,
      nodes: [
        {
          peer_id:
            "29a37d38db6717a61ba0cad4ffe01d15a320888601f15b3cf920feb0f9813abf",
          epoch: 3975,
          country: "Ireland",
          region: "Western_Europe",
          city: "Dublin",
          latitude: 53.3331,
          longitude: -6.2489,
        },
        {
          peer_id:
            "99d3561f2c46a3755e681a5b2199886720257404856cd3eb2b1c2566e585ea11",
          epoch: 3975,
          country: "Ireland",
          region: "Western_Europe",
          city: "Dublin",
          latitude: 53.3331,
          longitude: -6.2489,
        },
        {
          peer_id:
            "60b7bb4774ca6bebe6fd9204252f3abcd528afa497854d8fd0e19c1c6d7616f7",
          epoch: 3975,
          country: "Ireland",
          region: "Western_Europe",
          city: "Dublin",
          latitude: 53.3331,
          longitude: -6.2489,
        },
        {
          peer_id:
            "8dd8b23892be142c2ec4b7e1427584c97403e570cde4e6d9a81d2b220c884af5",
          epoch: 5646,
          country: "Ireland",
          region: "Western_Europe",
          city: "Dublin",
          latitude: 53.3331,
          longitude: -6.2489,
        },
        {
          peer_id:
            "f25c7b01c68f7ca3583dde23cbaefd14f930f6655237be627435b9727b7c9034",
          epoch: 3975,
          country: "Ireland",
          region: "Western_Europe",
          city: "Dublin",
          latitude: 53.3331,
          longitude: -6.2489,
        },
        {
          peer_id:
            "29c4513282335179295fa7c6a225ca9e2e17b3e14e30a463969d29b87ccb8db6",
          epoch: 3975,
          country: "Ireland",
          region: "Western_Europe",
          city: "Dublin",
          latitude: 53.3331,
          longitude: -6.2489,
        },
        {
          peer_id:
            "5d31f0d7a171e5ee6a6e2f11917f5a157d745e993f299a8b75acb961bd9da4e0",
          epoch: 3975,
          country: "Ireland",
          region: "Western_Europe",
          city: "Dublin",
          latitude: 53.3331,
          longitude: -6.2489,
        },
        {
          peer_id:
            "1187093055547879056b22e3d3e80f491bc1b4387c3642d934da0fedaa5e5f28",
          epoch: 3975,
          country: "Ireland",
          region: "Western_Europe",
          city: "Dublin",
          latitude: 53.3331,
          longitude: -6.2489,
        },
        {
          peer_id:
            "b87476d8877cfc324a520cef4d0cd6e42e26ec3ce613a8127220e2e444561e16",
          epoch: 5646,
          country: "Ireland",
          region: "Western_Europe",
          city: "Dublin",
          latitude: 53.3331,
          longitude: -6.2489,
        },
        {
          peer_id:
            "b840f1cfae5aaa4b50a11a6a23e2e859717e2f355fcd614592b219fc4d4e44a3",
          epoch: 5646,
          country: "Ireland",
          region: "Western_Europe",
          city: "Dublin",
          latitude: 53.3331,
          longitude: -6.2489,
        },
      ],
      cities: [
        {
          name: "Dublin",
          count: 10,
        },
      ],
    },
    {
      country: "Costa Rica",
      countryLat: 9.9333,
      countryLng: -84.0833,
      nodes: [
        {
          peer_id:
            "fcbc1da54b125c093d49bf4a604a1854d38f99b6cffc09255d8af5446898ddba",
          epoch: 4379,
          country: "Costa Rica",
          region: "Americas",
          city: "San José",
          latitude: 9.9333,
          longitude: -84.0833,
        },
        {
          peer_id:
            "30952a7b88b02028e7c6c7209722cc047acaef85d3d303f375d8ea89fc6ba0c6",
          epoch: 5646,
          country: "Costa Rica",
          region: "Americas",
          city: "San José",
          latitude: 9.9333,
          longitude: -84.0833,
        },
      ],
      cities: [
        {
          name: "San José",
          count: 2,
        },
      ],
    },
    {
      country: "United Kingdom",
      countryLat: 51.48938571428572,
      countryLng: -0.04730000000000001,
      nodes: [
        {
          peer_id:
            "ffb19e4519bc434d3a064652064d14dd34fabc8f785f6be8670d7465d8419c45",
          epoch: 3618,
          country: "United Kingdom",
          region: "Western_Europe",
          city: "London",
          latitude: 51.5085,
          longitude: -0.1257,
        },
        {
          peer_id:
            "6fd3ee60a084952162d62ead1a09f4ccd611f17608789ae45eba4f54967a295e",
          epoch: 5646,
          country: "United Kingdom",
          region: "Western_Europe",
          city: "London",
          latitude: 51.5085,
          longitude: -0.1257,
        },
        {
          peer_id:
            "7425cde20dc18a8e5e169614c47c0e4435fd1b6c475efdefbdbbb73785d331e3",
          epoch: 5646,
          country: "United Kingdom",
          region: "Western_Europe",
          city: "Bexley",
          latitude: 51.4416,
          longitude: 0.1487,
        },
        {
          peer_id:
            "b43fe1ef756cae4fefea16dad049fb0760b7d8593ace12527e302520d934d0d7",
          epoch: 5646,
          country: "United Kingdom",
          region: "Western_Europe",
          city: "London",
          latitude: 51.5085,
          longitude: -0.1257,
        },
        {
          peer_id:
            "401a881d9770f054a1b8cd6829f3d65a040bbe9b387ebcce50bddf0f853077d9",
          epoch: 5646,
          country: "United Kingdom",
          region: "Western_Europe",
          city: "London",
          latitude: 51.5085,
          longitude: -0.1257,
        },
        {
          peer_id:
            "9da88926fd4d773fd499fc41830a82fe9c9ff3508435e7a16b2d8f529e77cdda",
          epoch: 5646,
          country: "United Kingdom",
          region: "Western_Europe",
          city: "Bexley",
          latitude: 51.4416,
          longitude: 0.1487,
        },
        {
          peer_id:
            "d89481a2f4ff5598f8a6e83e67f21dba6a0df56a1bc35b9c67a2de6dce166b30",
          epoch: 5646,
          country: "United Kingdom",
          region: "Western_Europe",
          city: "London",
          latitude: 51.5085,
          longitude: -0.1257,
        },
      ],
      cities: [
        {
          name: "London",
          count: 5,
        },
        {
          name: "Bexley",
          count: 2,
        },
      ],
    },
    {
      country: "Brazil",
      countryLat: -23.5475,
      countryLng: -46.6361,
      nodes: [
        {
          peer_id:
            "3d654d35d558d6381fe6a0484d81c4fed128cd8adc1ca7a1482c297da80ee039",
          epoch: 5646,
          country: "Brazil",
          region: "Remote",
          city: "São Paulo",
          latitude: -23.5475,
          longitude: -46.6361,
        },
        {
          peer_id:
            "52b48fb6e6883d4cdf244cde8d7e972ea2d8ece9b5e484ed5085aacef0e306a1",
          epoch: 5646,
          country: "Brazil",
          region: "Remote",
          city: "São Paulo",
          latitude: -23.5475,
          longitude: -46.6361,
        },
        {
          peer_id:
            "da557f6d45952778e0c4c7296dc8f8303d846d5453800efd7b03cfbd5f8def04",
          epoch: 5646,
          country: "Brazil",
          region: "Remote",
          city: "São Paulo",
          latitude: -23.5475,
          longitude: -46.6361,
        },
        {
          peer_id:
            "35b922386bd35db0f33c732a70d7b6a2e91e463812c8d710f925f6da0e0ace07",
          epoch: 5646,
          country: "Brazil",
          region: "Remote",
          city: "São Paulo",
          latitude: -23.5475,
          longitude: -46.6361,
        },
        {
          peer_id:
            "c92d451e6b5c1bca83d002c3dad857cb8fafb1e49ef5ddadf25c0f40f9d5728c",
          epoch: 5646,
          country: "Brazil",
          region: "Remote",
          city: "São Paulo",
          latitude: -23.5475,
          longitude: -46.6361,
        },
      ],
      cities: [
        {
          name: "São Paulo",
          count: 5,
        },
      ],
    },
    {
      country: "Canada",
      countryLat: 45.13897142857143,
      countryLng: -74.57872857142857,
      nodes: [
        {
          peer_id:
            "dc3d30891191132b668fef5304e32b869e53741ee4f3fbb514e9ae2b05dcfc50",
          epoch: 3257,
          country: "Canada",
          region: "Americas",
          city: "Montréal",
          latitude: 45.504,
          longitude: -73.5747,
        },
        {
          peer_id:
            "b3254509d1cd652d6e1ca06fd37f3d20aaa42f7faeaf297577b85cf92d2f7462",
          epoch: 5646,
          country: "Canada",
          region: "Americas",
          city: "Montréal",
          latitude: 45.5088,
          longitude: -73.5878,
        },
        {
          peer_id:
            "8be2ba62bfd783e5fbff57a07acf2a9a95f4d234b3729fbfda9c63f3f42fb78f",
          epoch: 5646,
          country: "Canada",
          region: "Americas",
          city: "Beauharnois",
          latitude: 45.3134,
          longitude: -73.8725,
        },
        {
          peer_id:
            "c1f31446852220ffdf2fe294fd42fa5d7ced48c7d0f1378d6813ae8d972f1adf",
          epoch: 5646,
          country: "Canada",
          region: "Americas",
          city: "Beauharnois",
          latitude: 45.3134,
          longitude: -73.8725,
        },
        {
          peer_id:
            "2537e9d461d311dc6f1dee690f093b4e353f472abc2493c64275a3d5572532cc",
          epoch: 5646,
          country: "Canada",
          region: "Americas",
          city: "Beauharnois",
          latitude: 45.3134,
          longitude: -73.8725,
        },
        {
          peer_id:
            "925ec5ab56572964dc3cc69bb86c224367dbfc186f6831c26639f9428326c2b4",
          epoch: 5646,
          country: "Canada",
          region: "Americas",
          city: "Toronto",
          latitude: 43.7064,
          longitude: -79.3986,
        },
        {
          peer_id:
            "346361873c235e1a300fd67a2e8b7bd1ea3744001b2e0d1942317c4c8521f5dd",
          epoch: 5646,
          country: "Canada",
          region: "Americas",
          city: "Beauharnois",
          latitude: 45.3134,
          longitude: -73.8725,
        },
      ],
      cities: [
        {
          name: "Beauharnois",
          count: 4,
        },
        {
          name: "Montréal",
          count: 2,
        },
        {
          name: "Toronto",
          count: 1,
        },
      ],
    },
    {
      country: "India",
      countryLat: 19.0728,
      countryLng: 72.8826,
      nodes: [
        {
          peer_id:
            "6d00d52f94579e51308ae83841b5133e3a7e93b51fcd8cf338d766e3f0331026",
          epoch: 5646,
          country: "India",
          region: "Remote",
          city: "Mumbai",
          latitude: 19.0728,
          longitude: 72.8826,
        },
        {
          peer_id:
            "6214524acdb638d3ace8a705c7e9bf6f73992d1e030003ac18155e46f0b81b91",
          epoch: 5646,
          country: "India",
          region: "Remote",
          city: "Mumbai",
          latitude: 19.0728,
          longitude: 72.8826,
        },
      ],
      cities: [
        {
          name: "Mumbai",
          count: 2,
        },
      ],
    },
    {
      country: "Netherlands",
      countryLat: 52.54304,
      countryLng: 5.2251,
      nodes: [
        {
          peer_id:
            "9bfd93ebaa1efd65515642942a607eeca53a0188c04c21ced646d2f0b9f551e8",
          epoch: 5646,
          country: "Netherlands",
          region: "Western_Europe",
          city: "Groningen",
          latitude: 53.2192,
          longitude: 6.5667,
        },
        {
          peer_id:
            "ef191e643c2ed2d103de4109a506e020f5dde818cbc1ffe5e4ee36328cd22e9b",
          epoch: 5646,
          country: "Netherlands",
          region: "Western_Europe",
          city: "Amsterdam",
          latitude: 52.374,
          longitude: 4.8897,
        },
        {
          peer_id:
            "c807d24a6ac70599cc9b72c649eb6b00c34a0e9c704447c44d75fade07213a26",
          epoch: 5646,
          country: "Netherlands",
          region: "Western_Europe",
          city: "Amsterdam",
          latitude: 52.374,
          longitude: 4.8897,
        },
        {
          peer_id:
            "2ded75e99c6efbe143a9648a3e88ebf9d0cf249b2af44d510bdd0287e8adcc79",
          epoch: 5646,
          country: "Netherlands",
          region: "Western_Europe",
          city: "Amsterdam",
          latitude: 52.374,
          longitude: 4.8897,
        },
        {
          peer_id:
            "67af497cdd68361b18dda2409f244ebf6f776aee99094e16a5f371e39456de35",
          epoch: 2172,
          country: "Netherlands",
          region: "Western_Europe",
          city: "Amsterdam",
          latitude: 52.374,
          longitude: 4.8897,
        },
      ],
      cities: [
        {
          name: "Amsterdam",
          count: 4,
        },
        {
          name: "Groningen",
          count: 1,
        },
      ],
    },
    {
      country: "Hong Kong",
      countryLat: 22.2783,
      countryLng: 114.17470000000002,
      nodes: [
        {
          peer_id:
            "46b51b26710797faed701722bfc809386110c9720328f2b431e193cb5dc161f7",
          epoch: 5646,
          country: "Hong Kong",
          region: "Remote",
          city: "Hong Kong",
          latitude: 22.2783,
          longitude: 114.1747,
        },
        {
          peer_id:
            "32ad233a939bfbafb8d9056c0ae2eba58828d8baf5582277578ced38477f0f14",
          epoch: 5646,
          country: "Hong Kong",
          region: "Remote",
          city: "Hong Kong",
          latitude: 22.2783,
          longitude: 114.1747,
        },
        {
          peer_id:
            "ed84b96729eeaca42cdd0b84c3df69f76c4378a0406595a958cf515cdb024b20",
          epoch: 5646,
          country: "Hong Kong",
          region: "Remote",
          city: "Hong Kong",
          latitude: 22.2783,
          longitude: 114.1747,
        },
        {
          peer_id:
            "881f164c09b7c8032fde6f8ea0de2ab839becf391556b5650eb75a36a6f52c35",
          epoch: 5646,
          country: "Hong Kong",
          region: "Remote",
          city: "Hong Kong",
          latitude: 22.2783,
          longitude: 114.1747,
        },
        {
          peer_id:
            "0eb87b07f24f6111b5ab41ef30700ad9da780454bdf257722a100e897076a67f",
          epoch: 5646,
          country: "Hong Kong",
          region: "Remote",
          city: "Hong Kong",
          latitude: 22.2783,
          longitude: 114.1747,
        },
        {
          peer_id:
            "9c721c79ee082aafcdd99b1a71a833accdc48dba1a9a1bc5b5f8cc47ff7d49c0",
          epoch: 5646,
          country: "Hong Kong",
          region: "Remote",
          city: "Hong Kong",
          latitude: 22.2783,
          longitude: 114.1747,
        },
        {
          peer_id:
            "0d7b10a9ddee853b3585dd1efd4902ab3ad4f482b94425a3780cc39e79e6d398",
          epoch: 5646,
          country: "Hong Kong",
          region: "Remote",
          city: "Hong Kong",
          latitude: 22.2783,
          longitude: 114.1747,
        },
        {
          peer_id:
            "2fd1e866773ea3670cbef6dc6e952ba6fa13130a69fabc98ad234bd834c3bcaf",
          epoch: 5646,
          country: "Hong Kong",
          region: "Remote",
          city: "Hong Kong",
          latitude: 22.2783,
          longitude: 114.1747,
        },
      ],
      cities: [
        {
          name: "Hong Kong",
          count: 8,
        },
      ],
    },
    {
      country: "Poland",
      countryLat: 52.2284,
      countryLng: 21.0522,
      nodes: [
        {
          peer_id:
            "71debfa733376c4f2dc8970de8962931fe107c7dc1daad3bf189101bfd4adc4b",
          epoch: 5646,
          country: "Poland",
          region: "Western_Europe",
          city: "Warsaw",
          latitude: 52.2284,
          longitude: 21.0522,
        },
      ],
      cities: [
        {
          name: "Warsaw",
          count: 1,
        },
      ],
    },
    {
      country: "Russia",
      countryLat: 55.7522,
      countryLng: 37.6156,
      nodes: [
        {
          peer_id:
            "4b2c524fc36698caf9d049b6088faa002cea3bbcbf5ed764f59768b4fe96efcf",
          epoch: 5646,
          country: "Russia",
          region: "Western_Europe",
          city: "Moscow",
          latitude: 55.7522,
          longitude: 37.6156,
        },
      ],
      cities: [
        {
          name: "Moscow",
          count: 1,
        },
      ],
    },
    {
      country: "Mexico",
      countryLat: 20.570566666666668,
      countryLng: -100.29283333333332,
      nodes: [
        {
          peer_id:
            "8e943e68e8e4a1ebb7e5a250b081af507d40e616283f38d2d2a2a4b6523c02ac",
          epoch: 5646,
          country: "Mexico",
          region: "Americas",
          city: "El Colorado",
          latitude: 20.5618,
          longitude: -100.2452,
        },
        {
          peer_id:
            "9dfeca70acb3e01328d9dbbda4a6c23913fcd81ef25f74fab52cb2e96b0a1486",
          epoch: 5646,
          country: "Mexico",
          region: "Americas",
          city: "El Colorado",
          latitude: 20.5618,
          longitude: -100.2452,
        },
        {
          peer_id:
            "efaec1debc26828f8142a71a906ba180cae526b0688f304a28e57fb66f2b9a5c",
          epoch: 5646,
          country: "Mexico",
          region: "Americas",
          city: "Santiago de Querétaro",
          latitude: 20.5881,
          longitude: -100.3881,
        },
      ],
      cities: [
        {
          name: "El Colorado",
          count: 2,
        },
        {
          name: "Santiago de Querétaro",
          count: 1,
        },
      ],
    },
    {
      country: "South Africa",
      countryLat: -33.9258,
      countryLng: 18.4232,
      nodes: [
        {
          peer_id:
            "568fdb6acf26aae2a84419108ff13baa3ebf133844ef18e23a9f47b5af16b698",
          epoch: 5646,
          country: "South Africa",
          region: "Remote",
          city: "Cape Town",
          latitude: -33.9258,
          longitude: 18.4232,
        },
      ],
      cities: [
        {
          name: "Cape Town",
          count: 1,
        },
      ],
    },
    {
      country: "Chile",
      countryLat: -33.4569,
      countryLng: -70.6483,
      nodes: [
        {
          peer_id:
            "60b00bc1f6cda15c9cee94bab2e44dc7727701503da80d88c23c8436c4d597a4",
          epoch: 5064,
          country: "Chile",
          region: "Remote",
          city: "Santiago",
          latitude: -33.4569,
          longitude: -70.6483,
        },
      ],
      cities: [
        {
          name: "Santiago",
          count: 1,
        },
      ],
    },
    {
      country: "Belgium",
      countryLat: 50.8505,
      countryLng: 4.3488,
      nodes: [
        {
          peer_id:
            "6a1d3313a58719cf5abc1aaee6b4b74bc7e2c69036a8a02f02eb4f3ab4a3d678",
          epoch: 5646,
          country: "Belgium",
          region: "Western_Europe",
          city: "Brussels",
          latitude: 50.8505,
          longitude: 4.3488,
        },
      ],
      cities: [
        {
          name: "Brussels",
          count: 1,
        },
      ],
    },
    {
      country: "Lithuania",
      countryLat: 54.6892,
      countryLng: 25.2798,
      nodes: [
        {
          peer_id:
            "da418307cff595ced2af5eb471ec11b1ad6a4907ef57d6e2eeb253bdd5bd9d0d",
          epoch: 5646,
          country: "Lithuania",
          region: "Western_Europe",
          city: "Vilnius",
          latitude: 54.6892,
          longitude: 25.2798,
        },
        {
          peer_id:
            "f08bb83cf89d299e4cddee7ef987b850a35a399900ba22860cc1553da3682a84",
          epoch: 5646,
          country: "Lithuania",
          region: "Western_Europe",
          city: "Vilnius",
          latitude: 54.6892,
          longitude: 25.2798,
        },
      ],
      cities: [
        {
          name: "Vilnius",
          count: 2,
        },
      ],
    },
    {
      country: "Philippines",
      countryLat: 14.6042,
      countryLng: 120.9822,
      nodes: [
        {
          peer_id:
            "70ac104168697addf1569c26ffc00958435d6bd87e2a61e49e0c6eb16d07a10b",
          epoch: 5646,
          country: "Philippines",
          region: "Remote",
          city: "Manila",
          latitude: 14.6042,
          longitude: 120.9822,
        },
      ],
      cities: [
        {
          name: "Manila",
          count: 1,
        },
      ],
    },
    {
      country: "Vietnam",
      countryLat: 21.0245,
      countryLng: 105.8412,
      nodes: [
        {
          peer_id:
            "a7375edf245124aa2531c74dcd0cbfb4c7aea02dbea32c7fbf72784533730874",
          epoch: 5646,
          country: "Vietnam",
          region: "Remote",
          city: "Hanoi",
          latitude: 21.0245,
          longitude: 105.8412,
        },
      ],
      cities: [
        {
          name: "Hanoi",
          count: 1,
        },
      ],
    },
  ];
  const validatorGeoMetric = {
    nodeCount: 151,
    countryCount: 26,
    cityCount: 45,
  };
  const [isSkeletonLoading, setIsSkeletonLoading] = useState<boolean>(true);

  const curEpoch = 5648;
  const totalVotingPower = 90763030788445253;
  const numberOfActiveValidators = 125;

  useEffect(() => {
    if (curEpoch && totalVotingPower && numberOfActiveValidators) {
      setIsSkeletonLoading(false);
    }
  }, [curEpoch, totalVotingPower, numberOfActiveValidators]);

  return (
    <SkeletonTheme baseColor={isDarkTheme ? grey[500] : undefined}>
      {isOnMobile ? (
        <Stack
          direction="column"
          justifyContent="space-between"
          marginY={4}
          sx={{backgroundColor: backgroundColor}}
          overflow="hidden"
        >
          <Map validatorGeoGroups={validatorGeoGroups} />
          <MapMetrics
            validatorGeoMetric={validatorGeoMetric}
            isOnMobile={isOnMobile}
            isSkeletonLoading={isSkeletonLoading}
          />
        </Stack>
      ) : (
        <Stack
          direction="row"
          justifyContent="space-between"
          marginY={4}
          sx={{backgroundColor: backgroundColor}}
          overflow="hidden"
        >
          <MapMetrics
            validatorGeoMetric={validatorGeoMetric}
            isOnMobile={isOnMobile}
            isSkeletonLoading={isSkeletonLoading}
          />
          <Map validatorGeoGroups={validatorGeoGroups} />
        </Stack>
      )}
    </SkeletonTheme>
  );
}
