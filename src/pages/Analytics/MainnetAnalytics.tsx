import React, {useState} from "react";
import {Grid} from "@mui/material";
import ChartRangeDaysSelect, {
  ChartRangeDays,
} from "./Components/ChartRangeDaysSelect";
import DailyActiveUserChart from "./Charts/DailyActiveUserChart";
import DailyAvgGasUnitPriceChart from "./Charts/DailyAvgGasUnitPriceChart";
import DailyDeployedContractsChart from "./Charts/DailyDeployedContractsChart";
import DailyPeakTPSChart from "./Charts/DailyPeakTPSChart";
import DailyNewAccountsCreatedChart from "./Charts/DailyNewAccountsCreatedChart";
import DailyUserTransactionsChart from "./Charts/DailyUserTransactionsChart";
import NetworkInfo from "./NetworkInfo/NetworkInfo";
import DailyGasConsumptionChart from "./Charts/DailyGasConsumptionChart";
import DailyContractDeployersChart from "./Charts/DailyContractDeployersChart";
import MonthlyActiveUserChart from "./Charts/MonthlyActiveUserChart";

export default function MainnetAnalytics() {
  const [days, setDays] = useState<ChartRangeDays>(
    ChartRangeDays.DEFAULT_RANGE,
  );

  const data: any = {
    max_tps_15_blocks_in_past_30_days: [
      {
        max_tps_15_blocks_in_past_30_days: 323,
      },
    ],
    daily_max_tps_15_blocks: [
      {
        max_tps_15_blocks: 67,
        date: "2023-12-25",
      },
      {
        max_tps_15_blocks: 192,
        date: "2023-12-26",
      },
      {
        max_tps_15_blocks: 43,
        date: "2023-12-27",
      },
      {
        max_tps_15_blocks: 97,
        date: "2023-12-28",
      },
      {
        max_tps_15_blocks: 323,
        date: "2023-12-29",
      },
      {
        max_tps_15_blocks: 52,
        date: "2023-12-30",
      },
      {
        max_tps_15_blocks: 36,
        date: "2023-12-31",
      },
      {
        max_tps_15_blocks: 33,
        date: "2024-01-01",
      },
      {
        max_tps_15_blocks: 41,
        date: "2024-01-02",
      },
      {
        max_tps_15_blocks: 37,
        date: "2024-01-03",
      },
      {
        max_tps_15_blocks: 37,
        date: "2024-01-04",
      },
      {
        max_tps_15_blocks: 43,
        date: "2024-01-05",
      },
      {
        max_tps_15_blocks: 38,
        date: "2024-01-06",
      },
      {
        max_tps_15_blocks: 35,
        date: "2024-01-07",
      },
      {
        max_tps_15_blocks: 41,
        date: "2024-01-08",
      },
      {
        max_tps_15_blocks: 43,
        date: "2024-01-09",
      },
      {
        max_tps_15_blocks: 37,
        date: "2024-01-10",
      },
      {
        max_tps_15_blocks: 38,
        date: "2024-01-11",
      },
      {
        max_tps_15_blocks: 38,
        date: "2024-01-12",
      },
      {
        max_tps_15_blocks: 38,
        date: "2024-01-13",
      },
      {
        max_tps_15_blocks: 39,
        date: "2024-01-14",
      },
      {
        max_tps_15_blocks: 42,
        date: "2024-01-15",
      },
      {
        max_tps_15_blocks: 38,
        date: "2024-01-16",
      },
      {
        max_tps_15_blocks: 38,
        date: "2024-01-17",
      },
      {
        max_tps_15_blocks: 42,
        date: "2024-01-18",
      },
      {
        max_tps_15_blocks: 41,
        date: "2024-01-19",
      },
      {
        max_tps_15_blocks: 35,
        date: "2024-01-20",
      },
      {
        max_tps_15_blocks: 37,
        date: "2024-01-21",
      },
      {
        max_tps_15_blocks: 48,
        date: "2024-01-22",
      },
      {
        max_tps_15_blocks: 54,
        date: "2024-01-23",
      },
    ],
    daily_user_transactions: [
      {
        num_user_transactions: 990395,
        date: "2023-12-25",
      },
      {
        num_user_transactions: 914930,
        date: "2023-12-26",
      },
      {
        num_user_transactions: 802145,
        date: "2023-12-27",
      },
      {
        num_user_transactions: 818298,
        date: "2023-12-28",
      },
      {
        num_user_transactions: 864300,
        date: "2023-12-29",
      },
      {
        num_user_transactions: 679989,
        date: "2023-12-30",
      },
      {
        num_user_transactions: 633800,
        date: "2023-12-31",
      },
      {
        num_user_transactions: 494219,
        date: "2024-01-01",
      },
      {
        num_user_transactions: 485216,
        date: "2024-01-02",
      },
      {
        num_user_transactions: 578966,
        date: "2024-01-03",
      },
      {
        num_user_transactions: 597553,
        date: "2024-01-04",
      },
      {
        num_user_transactions: 612671,
        date: "2024-01-05",
      },
      {
        num_user_transactions: 581657,
        date: "2024-01-06",
      },
      {
        num_user_transactions: 562063,
        date: "2024-01-07",
      },
      {
        num_user_transactions: 602194,
        date: "2024-01-08",
      },
      {
        num_user_transactions: 625900,
        date: "2024-01-09",
      },
      {
        num_user_transactions: 674891,
        date: "2024-01-10",
      },
      {
        num_user_transactions: 685598,
        date: "2024-01-11",
      },
      {
        num_user_transactions: 643870,
        date: "2024-01-12",
      },
      {
        num_user_transactions: 603872,
        date: "2024-01-13",
      },
      {
        num_user_transactions: 630338,
        date: "2024-01-14",
      },
      {
        num_user_transactions: 653676,
        date: "2024-01-15",
      },
      {
        num_user_transactions: 537287,
        date: "2024-01-16",
      },
      {
        num_user_transactions: 496306,
        date: "2024-01-17",
      },
      {
        num_user_transactions: 606175,
        date: "2024-01-18",
      },
      {
        num_user_transactions: 556143,
        date: "2024-01-19",
      },
      {
        num_user_transactions: 462718,
        date: "2024-01-20",
      },
      {
        num_user_transactions: 512282,
        date: "2024-01-21",
      },
      {
        num_user_transactions: 672888,
        date: "2024-01-22",
      },
      {
        num_user_transactions: 734421,
        date: "2024-01-23",
      },
    ],
    daily_average_gas_unit_price: [
      {
        date: "2023-12-25",
        avg_gas_unit_price: 130.108147759,
      },
      {
        date: "2023-12-26",
        avg_gas_unit_price: 135.492990721,
      },
      {
        date: "2023-12-27",
        avg_gas_unit_price: 126.858486932,
      },
      {
        date: "2023-12-28",
        avg_gas_unit_price: 123.194666246,
      },
      {
        date: "2023-12-29",
        avg_gas_unit_price: 121.214397779,
      },
      {
        date: "2023-12-30",
        avg_gas_unit_price: 122.725591149,
      },
      {
        date: "2023-12-31",
        avg_gas_unit_price: 118.350153045,
      },
      {
        date: "2024-01-01",
        avg_gas_unit_price: 118.943506826,
      },
      {
        date: "2024-01-02",
        avg_gas_unit_price: 122.927638413,
      },
      {
        date: "2024-01-03",
        avg_gas_unit_price: 137.028214092,
      },
      {
        date: "2024-01-04",
        avg_gas_unit_price: 143.56230326,
      },
      {
        date: "2024-01-05",
        avg_gas_unit_price: 125.665048615,
      },
      {
        date: "2024-01-06",
        avg_gas_unit_price: 125.849163682,
      },
      {
        date: "2024-01-07",
        avg_gas_unit_price: 121.730087197,
      },
      {
        date: "2024-01-08",
        avg_gas_unit_price: 138.296029187,
      },
      {
        date: "2024-01-09",
        avg_gas_unit_price: 134.505941844,
      },
      {
        date: "2024-01-10",
        avg_gas_unit_price: 135.677819085,
      },
      {
        date: "2024-01-11",
        avg_gas_unit_price: 128.766011569,
      },
      {
        date: "2024-01-12",
        avg_gas_unit_price: 122.474428068,
      },
      {
        date: "2024-01-13",
        avg_gas_unit_price: 130.361185814,
      },
      {
        date: "2024-01-14",
        avg_gas_unit_price: 119.739763429,
      },
      {
        date: "2024-01-15",
        avg_gas_unit_price: 119.101755304,
      },
      {
        date: "2024-01-16",
        avg_gas_unit_price: 121.825919853,
      },
      {
        date: "2024-01-17",
        avg_gas_unit_price: 156.417492434,
      },
      {
        date: "2024-01-18",
        avg_gas_unit_price: 121.916388832,
      },
      {
        date: "2024-01-19",
        avg_gas_unit_price: 126.158858423,
      },
      {
        date: "2024-01-20",
        avg_gas_unit_price: 118.687113966,
      },
      {
        date: "2024-01-21",
        avg_gas_unit_price: 121.350027914,
      },
      {
        date: "2024-01-22",
        avg_gas_unit_price: 126.191577202,
      },
      {
        date: "2024-01-23",
        avg_gas_unit_price: 124.77037149,
      },
    ],
    daily_gas_from_user_transactions: [
      {
        date: "2023-12-25",
        gas_cost: 931.54864344,
      },
      {
        date: "2023-12-26",
        gas_cost: 832.35151609,
      },
      {
        date: "2023-12-27",
        gas_cost: 767.35081361,
      },
      {
        date: "2023-12-28",
        gas_cost: 763.98556608,
      },
      {
        date: "2023-12-29",
        gas_cost: 778.57609884,
      },
      {
        date: "2023-12-30",
        gas_cost: 683.81202731,
      },
      {
        date: "2023-12-31",
        gas_cost: 607.90454686,
      },
      {
        date: "2024-01-01",
        gas_cost: 403.83466227,
      },
      {
        date: "2024-01-02",
        gas_cost: 406.04083937,
      },
      {
        date: "2024-01-03",
        gas_cost: 452.7029262,
      },
      {
        date: "2024-01-04",
        gas_cost: 434.08062593,
      },
      {
        date: "2024-01-05",
        gas_cost: 425.53134089,
      },
      {
        date: "2024-01-06",
        gas_cost: 415.24249256,
      },
      {
        date: "2024-01-07",
        gas_cost: 426.41127811,
      },
      {
        date: "2024-01-08",
        gas_cost: 427.53449754,
      },
      {
        date: "2024-01-09",
        gas_cost: 517.55839872,
      },
      {
        date: "2024-01-10",
        gas_cost: 548.21007945,
      },
      {
        date: "2024-01-11",
        gas_cost: 543.96111169,
      },
      {
        date: "2024-01-12",
        gas_cost: 490.63046654,
      },
      {
        date: "2024-01-13",
        gas_cost: 445.95902538,
      },
      {
        date: "2024-01-14",
        gas_cost: 440.85306691,
      },
      {
        date: "2024-01-15",
        gas_cost: 447.98255981,
      },
      {
        date: "2024-01-16",
        gas_cost: 425.962627,
      },
      {
        date: "2024-01-17",
        gas_cost: 391.33882599,
      },
      {
        date: "2024-01-18",
        gas_cost: 417.63817265,
      },
      {
        date: "2024-01-19",
        gas_cost: 428.58431425,
      },
      {
        date: "2024-01-20",
        gas_cost: 422.11866693,
      },
      {
        date: "2024-01-21",
        gas_cost: 473.54484366,
      },
      {
        date: "2024-01-22",
        gas_cost: 472.15450813,
      },
      {
        date: "2024-01-23",
        gas_cost: 569.12404401,
      },
    ],
    daily_deployed_contracts: [
      {
        date: "2022-10-14",
        daily_contract_deployed: 6,
      },
      {
        date: "2022-10-18",
        daily_contract_deployed: 31,
      },
      {
        date: "2022-10-19",
        daily_contract_deployed: 635,
      },
      {
        date: "2022-10-20",
        daily_contract_deployed: 454,
      },
      {
        date: "2022-10-21",
        daily_contract_deployed: 380,
      },
      {
        date: "2022-10-22",
        daily_contract_deployed: 318,
      },
      {
        date: "2022-10-23",
        daily_contract_deployed: 254,
      },
      {
        date: "2022-10-24",
        daily_contract_deployed: 294,
      },
      {
        date: "2022-10-25",
        daily_contract_deployed: 1102,
      },
      {
        date: "2022-10-26",
        daily_contract_deployed: 1679,
      },
      {
        date: "2022-10-27",
        daily_contract_deployed: 932,
      },
      {
        date: "2022-10-28",
        daily_contract_deployed: 536,
      },
      {
        date: "2022-10-29",
        daily_contract_deployed: 164,
      },
      {
        date: "2022-10-30",
        daily_contract_deployed: 93,
      },
      {
        date: "2022-10-31",
        daily_contract_deployed: 152,
      },
      {
        date: "2022-11-01",
        daily_contract_deployed: 140,
      },
      {
        date: "2022-11-02",
        daily_contract_deployed: 217,
      },
      {
        date: "2022-11-03",
        daily_contract_deployed: 95,
      },
      {
        date: "2022-11-04",
        daily_contract_deployed: 105,
      },
      {
        date: "2022-11-05",
        daily_contract_deployed: 88,
      },
      {
        date: "2022-11-06",
        daily_contract_deployed: 73,
      },
      {
        date: "2022-11-07",
        daily_contract_deployed: 87,
      },
      {
        date: "2022-11-08",
        daily_contract_deployed: 41,
      },
      {
        date: "2022-11-09",
        daily_contract_deployed: 111,
      },
      {
        date: "2022-11-10",
        daily_contract_deployed: 89,
      },
      {
        date: "2022-11-11",
        daily_contract_deployed: 49,
      },
      {
        date: "2022-11-12",
        daily_contract_deployed: 17,
      },
      {
        date: "2022-11-13",
        daily_contract_deployed: 23,
      },
      {
        date: "2022-11-14",
        daily_contract_deployed: 65,
      },
      {
        date: "2022-11-15",
        daily_contract_deployed: 45,
      },
      {
        date: "2022-11-16",
        daily_contract_deployed: 52,
      },
      {
        date: "2022-11-17",
        daily_contract_deployed: 56,
      },
      {
        date: "2022-11-18",
        daily_contract_deployed: 24,
      },
      {
        date: "2022-11-19",
        daily_contract_deployed: 53,
      },
      {
        date: "2022-11-20",
        daily_contract_deployed: 29,
      },
      {
        date: "2022-11-21",
        daily_contract_deployed: 195,
      },
      {
        date: "2022-11-22",
        daily_contract_deployed: 65,
      },
      {
        date: "2022-11-23",
        daily_contract_deployed: 83,
      },
      {
        date: "2022-11-24",
        daily_contract_deployed: 42,
      },
      {
        date: "2022-11-25",
        daily_contract_deployed: 72,
      },
      {
        date: "2022-11-26",
        daily_contract_deployed: 49,
      },
      {
        date: "2022-11-27",
        daily_contract_deployed: 33,
      },
      {
        date: "2022-11-28",
        daily_contract_deployed: 76,
      },
      {
        date: "2022-11-29",
        daily_contract_deployed: 78,
      },
      {
        date: "2022-11-30",
        daily_contract_deployed: 37,
      },
      {
        date: "2022-12-01",
        daily_contract_deployed: 50,
      },
      {
        date: "2022-12-02",
        daily_contract_deployed: 59,
      },
      {
        date: "2022-12-03",
        daily_contract_deployed: 14,
      },
      {
        date: "2022-12-04",
        daily_contract_deployed: 51,
      },
      {
        date: "2022-12-05",
        daily_contract_deployed: 58,
      },
      {
        date: "2022-12-06",
        daily_contract_deployed: 50,
      },
      {
        date: "2022-12-07",
        daily_contract_deployed: 77,
      },
      {
        date: "2022-12-08",
        daily_contract_deployed: 106,
      },
      {
        date: "2022-12-09",
        daily_contract_deployed: 34,
      },
      {
        date: "2022-12-10",
        daily_contract_deployed: 51,
      },
      {
        date: "2022-12-11",
        daily_contract_deployed: 47,
      },
      {
        date: "2022-12-12",
        daily_contract_deployed: 74,
      },
      {
        date: "2022-12-13",
        daily_contract_deployed: 19,
      },
      {
        date: "2022-12-14",
        daily_contract_deployed: 69,
      },
      {
        date: "2022-12-15",
        daily_contract_deployed: 82,
      },
      {
        date: "2022-12-16",
        daily_contract_deployed: 29,
      },
      {
        date: "2022-12-17",
        daily_contract_deployed: 10,
      },
      {
        date: "2022-12-18",
        daily_contract_deployed: 11,
      },
      {
        date: "2022-12-19",
        daily_contract_deployed: 11,
      },
      {
        date: "2022-12-20",
        daily_contract_deployed: 9,
      },
      {
        date: "2022-12-21",
        daily_contract_deployed: 151,
      },
      {
        date: "2022-12-22",
        daily_contract_deployed: 29,
      },
      {
        date: "2022-12-23",
        daily_contract_deployed: 72,
      },
      {
        date: "2022-12-24",
        daily_contract_deployed: 31,
      },
      {
        date: "2022-12-25",
        daily_contract_deployed: 46,
      },
      {
        date: "2022-12-26",
        daily_contract_deployed: 197,
      },
      {
        date: "2022-12-27",
        daily_contract_deployed: 110,
      },
      {
        date: "2022-12-28",
        daily_contract_deployed: 12,
      },
      {
        date: "2022-12-29",
        daily_contract_deployed: 145,
      },
      {
        date: "2022-12-30",
        daily_contract_deployed: 140,
      },
      {
        date: "2023-01-01",
        daily_contract_deployed: 11,
      },
      {
        date: "2023-01-02",
        daily_contract_deployed: 17,
      },
      {
        date: "2023-01-03",
        daily_contract_deployed: 41,
      },
      {
        date: "2023-01-04",
        daily_contract_deployed: 84,
      },
      {
        date: "2023-01-05",
        daily_contract_deployed: 27,
      },
      {
        date: "2023-01-06",
        daily_contract_deployed: 29,
      },
      {
        date: "2023-01-07",
        daily_contract_deployed: 6,
      },
      {
        date: "2023-01-08",
        daily_contract_deployed: 8,
      },
      {
        date: "2023-01-09",
        daily_contract_deployed: 39,
      },
      {
        date: "2023-01-10",
        daily_contract_deployed: 67,
      },
      {
        date: "2023-01-11",
        daily_contract_deployed: 60,
      },
      {
        date: "2023-01-12",
        daily_contract_deployed: 80,
      },
      {
        date: "2023-01-13",
        daily_contract_deployed: 4,
      },
      {
        date: "2023-01-14",
        daily_contract_deployed: 10,
      },
      {
        date: "2023-01-15",
        daily_contract_deployed: 24,
      },
      {
        date: "2023-01-16",
        daily_contract_deployed: 57,
      },
      {
        date: "2023-01-17",
        daily_contract_deployed: 61,
      },
      {
        date: "2023-01-18",
        daily_contract_deployed: 43,
      },
      {
        date: "2023-01-19",
        daily_contract_deployed: 53,
      },
      {
        date: "2023-01-20",
        daily_contract_deployed: 12,
      },
      {
        date: "2023-01-21",
        daily_contract_deployed: 39,
      },
      {
        date: "2023-01-22",
        daily_contract_deployed: 35,
      },
      {
        date: "2023-01-23",
        daily_contract_deployed: 10,
      },
      {
        date: "2023-01-24",
        daily_contract_deployed: 24,
      },
      {
        date: "2023-01-25",
        daily_contract_deployed: 54,
      },
      {
        date: "2023-01-26",
        daily_contract_deployed: 14,
      },
      {
        date: "2023-01-27",
        daily_contract_deployed: 34,
      },
      {
        date: "2023-01-28",
        daily_contract_deployed: 11,
      },
      {
        date: "2023-01-29",
        daily_contract_deployed: 30,
      },
      {
        date: "2023-01-30",
        daily_contract_deployed: 69,
      },
      {
        date: "2023-01-31",
        daily_contract_deployed: 30,
      },
      {
        date: "2023-02-01",
        daily_contract_deployed: 93,
      },
      {
        date: "2023-02-02",
        daily_contract_deployed: 89,
      },
      {
        date: "2023-02-03",
        daily_contract_deployed: 42,
      },
      {
        date: "2023-02-04",
        daily_contract_deployed: 34,
      },
      {
        date: "2023-02-05",
        daily_contract_deployed: 12,
      },
      {
        date: "2023-02-06",
        daily_contract_deployed: 44,
      },
      {
        date: "2023-02-07",
        daily_contract_deployed: 29,
      },
      {
        date: "2023-02-08",
        daily_contract_deployed: 50,
      },
      {
        date: "2023-02-09",
        daily_contract_deployed: 64,
      },
      {
        date: "2023-02-10",
        daily_contract_deployed: 22,
      },
      {
        date: "2023-02-11",
        daily_contract_deployed: 13,
      },
      {
        date: "2023-02-12",
        daily_contract_deployed: 29,
      },
      {
        date: "2023-02-13",
        daily_contract_deployed: 14,
      },
      {
        date: "2023-02-14",
        daily_contract_deployed: 35,
      },
      {
        date: "2023-02-15",
        daily_contract_deployed: 44,
      },
      {
        date: "2023-02-16",
        daily_contract_deployed: 112,
      },
      {
        date: "2023-02-17",
        daily_contract_deployed: 49,
      },
      {
        date: "2023-02-18",
        daily_contract_deployed: 11,
      },
      {
        date: "2023-02-19",
        daily_contract_deployed: 22,
      },
      {
        date: "2023-02-20",
        daily_contract_deployed: 41,
      },
      {
        date: "2023-02-21",
        daily_contract_deployed: 146,
      },
      {
        date: "2023-02-22",
        daily_contract_deployed: 120,
      },
      {
        date: "2023-02-23",
        daily_contract_deployed: 93,
      },
      {
        date: "2023-02-24",
        daily_contract_deployed: 51,
      },
      {
        date: "2023-02-25",
        daily_contract_deployed: 19,
      },
      {
        date: "2023-02-26",
        daily_contract_deployed: 5,
      },
      {
        date: "2023-02-27",
        daily_contract_deployed: 120,
      },
      {
        date: "2023-02-28",
        daily_contract_deployed: 99,
      },
      {
        date: "2023-03-01",
        daily_contract_deployed: 53,
      },
      {
        date: "2023-03-02",
        daily_contract_deployed: 82,
      },
      {
        date: "2023-03-03",
        daily_contract_deployed: 55,
      },
      {
        date: "2023-03-04",
        daily_contract_deployed: 17,
      },
      {
        date: "2023-03-05",
        daily_contract_deployed: 47,
      },
      {
        date: "2023-03-06",
        daily_contract_deployed: 44,
      },
      {
        date: "2023-03-07",
        daily_contract_deployed: 178,
      },
      {
        date: "2023-03-08",
        daily_contract_deployed: 64,
      },
      {
        date: "2023-03-09",
        daily_contract_deployed: 41,
      },
      {
        date: "2023-03-10",
        daily_contract_deployed: 26,
      },
      {
        date: "2023-03-11",
        daily_contract_deployed: 19,
      },
      {
        date: "2023-03-12",
        daily_contract_deployed: 11,
      },
      {
        date: "2023-03-13",
        daily_contract_deployed: 24,
      },
      {
        date: "2023-03-14",
        daily_contract_deployed: 64,
      },
      {
        date: "2023-03-15",
        daily_contract_deployed: 16,
      },
      {
        date: "2023-03-16",
        daily_contract_deployed: 27,
      },
      {
        date: "2023-03-17",
        daily_contract_deployed: 90,
      },
      {
        date: "2023-03-18",
        daily_contract_deployed: 15,
      },
      {
        date: "2023-03-19",
        daily_contract_deployed: 144,
      },
      {
        date: "2023-03-20",
        daily_contract_deployed: 20,
      },
      {
        date: "2023-03-21",
        daily_contract_deployed: 27,
      },
      {
        date: "2023-03-22",
        daily_contract_deployed: 43,
      },
      {
        date: "2023-03-23",
        daily_contract_deployed: 42,
      },
      {
        date: "2023-03-24",
        daily_contract_deployed: 21,
      },
      {
        date: "2023-03-25",
        daily_contract_deployed: 43,
      },
      {
        date: "2023-03-26",
        daily_contract_deployed: 24,
      },
      {
        date: "2023-03-27",
        daily_contract_deployed: 19,
      },
      {
        date: "2023-03-28",
        daily_contract_deployed: 18,
      },
      {
        date: "2023-03-29",
        daily_contract_deployed: 7,
      },
      {
        date: "2023-03-30",
        daily_contract_deployed: 88,
      },
      {
        date: "2023-03-31",
        daily_contract_deployed: 16,
      },
      {
        date: "2023-04-01",
        daily_contract_deployed: 8,
      },
      {
        date: "2023-04-02",
        daily_contract_deployed: 33,
      },
      {
        date: "2023-04-03",
        daily_contract_deployed: 60,
      },
      {
        date: "2023-04-04",
        daily_contract_deployed: 36,
      },
      {
        date: "2023-04-05",
        daily_contract_deployed: 32,
      },
      {
        date: "2023-04-06",
        daily_contract_deployed: 34,
      },
      {
        date: "2023-04-07",
        daily_contract_deployed: 98,
      },
      {
        date: "2023-04-08",
        daily_contract_deployed: 10,
      },
      {
        date: "2023-04-09",
        daily_contract_deployed: 32,
      },
      {
        date: "2023-04-10",
        daily_contract_deployed: 36,
      },
      {
        date: "2023-04-11",
        daily_contract_deployed: 49,
      },
      {
        date: "2023-04-12",
        daily_contract_deployed: 2,
      },
      {
        date: "2023-04-13",
        daily_contract_deployed: 31,
      },
      {
        date: "2023-04-14",
        daily_contract_deployed: 54,
      },
      {
        date: "2023-04-15",
        daily_contract_deployed: 2,
      },
      {
        date: "2023-04-16",
        daily_contract_deployed: 1,
      },
      {
        date: "2023-04-17",
        daily_contract_deployed: 18,
      },
      {
        date: "2023-04-18",
        daily_contract_deployed: 16,
      },
      {
        date: "2023-04-19",
        daily_contract_deployed: 9,
      },
      {
        date: "2023-04-20",
        daily_contract_deployed: 23,
      },
      {
        date: "2023-04-21",
        daily_contract_deployed: 12,
      },
      {
        date: "2023-04-22",
        daily_contract_deployed: 27,
      },
      {
        date: "2023-04-23",
        daily_contract_deployed: 2,
      },
      {
        date: "2023-04-24",
        daily_contract_deployed: 34,
      },
      {
        date: "2023-04-25",
        daily_contract_deployed: 32,
      },
      {
        date: "2023-04-26",
        daily_contract_deployed: 74,
      },
      {
        date: "2023-04-27",
        daily_contract_deployed: 34,
      },
      {
        date: "2023-04-28",
        daily_contract_deployed: 39,
      },
      {
        date: "2023-04-29",
        daily_contract_deployed: 7,
      },
      {
        date: "2023-04-30",
        daily_contract_deployed: 21,
      },
      {
        date: "2023-05-01",
        daily_contract_deployed: 8,
      },
      {
        date: "2023-05-02",
        daily_contract_deployed: 16,
      },
      {
        date: "2023-05-03",
        daily_contract_deployed: 47,
      },
      {
        date: "2023-05-04",
        daily_contract_deployed: 5,
      },
      {
        date: "2023-05-05",
        daily_contract_deployed: 60,
      },
      {
        date: "2023-05-06",
        daily_contract_deployed: 19,
      },
      {
        date: "2023-05-07",
        daily_contract_deployed: 8,
      },
      {
        date: "2023-05-08",
        daily_contract_deployed: 21,
      },
      {
        date: "2023-05-09",
        daily_contract_deployed: 34,
      },
      {
        date: "2023-05-10",
        daily_contract_deployed: 2,
      },
      {
        date: "2023-05-11",
        daily_contract_deployed: 49,
      },
      {
        date: "2023-05-12",
        daily_contract_deployed: 11,
      },
      {
        date: "2023-05-13",
        daily_contract_deployed: 8,
      },
      {
        date: "2023-05-14",
        daily_contract_deployed: 1,
      },
      {
        date: "2023-05-15",
        daily_contract_deployed: 49,
      },
      {
        date: "2023-05-16",
        daily_contract_deployed: 53,
      },
      {
        date: "2023-05-17",
        daily_contract_deployed: 79,
      },
      {
        date: "2023-05-18",
        daily_contract_deployed: 229,
      },
      {
        date: "2023-05-19",
        daily_contract_deployed: 204,
      },
      {
        date: "2023-05-20",
        daily_contract_deployed: 1,
      },
      {
        date: "2023-05-21",
        daily_contract_deployed: 3,
      },
      {
        date: "2023-05-22",
        daily_contract_deployed: 17,
      },
      {
        date: "2023-05-23",
        daily_contract_deployed: 63,
      },
      {
        date: "2023-05-24",
        daily_contract_deployed: 47,
      },
      {
        date: "2023-05-25",
        daily_contract_deployed: 55,
      },
      {
        date: "2023-05-26",
        daily_contract_deployed: 33,
      },
      {
        date: "2023-05-27",
        daily_contract_deployed: 11,
      },
      {
        date: "2023-05-28",
        daily_contract_deployed: 1,
      },
      {
        date: "2023-05-29",
        daily_contract_deployed: 84,
      },
      {
        date: "2023-05-31",
        daily_contract_deployed: 57,
      },
      {
        date: "2023-06-01",
        daily_contract_deployed: 27,
      },
      {
        date: "2023-06-02",
        daily_contract_deployed: 3,
      },
      {
        date: "2023-06-03",
        daily_contract_deployed: 22,
      },
      {
        date: "2023-06-04",
        daily_contract_deployed: 32,
      },
      {
        date: "2023-06-05",
        daily_contract_deployed: 18,
      },
      {
        date: "2023-06-06",
        daily_contract_deployed: 25,
      },
      {
        date: "2023-06-07",
        daily_contract_deployed: 215,
      },
      {
        date: "2023-06-08",
        daily_contract_deployed: 271,
      },
      {
        date: "2023-06-09",
        daily_contract_deployed: 155,
      },
      {
        date: "2023-06-10",
        daily_contract_deployed: 3,
      },
      {
        date: "2023-06-11",
        daily_contract_deployed: 15,
      },
      {
        date: "2023-06-12",
        daily_contract_deployed: 27,
      },
      {
        date: "2023-06-13",
        daily_contract_deployed: 60,
      },
      {
        date: "2023-06-14",
        daily_contract_deployed: 80,
      },
      {
        date: "2023-06-15",
        daily_contract_deployed: 108,
      },
      {
        date: "2023-06-16",
        daily_contract_deployed: 40,
      },
      {
        date: "2023-06-17",
        daily_contract_deployed: 13,
      },
      {
        date: "2023-06-18",
        daily_contract_deployed: 7,
      },
      {
        date: "2023-06-19",
        daily_contract_deployed: 24,
      },
      {
        date: "2023-06-20",
        daily_contract_deployed: 9,
      },
      {
        date: "2023-06-21",
        daily_contract_deployed: 19,
      },
      {
        date: "2023-06-22",
        daily_contract_deployed: 134,
      },
      {
        date: "2023-06-23",
        daily_contract_deployed: 40,
      },
      {
        date: "2023-06-24",
        daily_contract_deployed: 40,
      },
      {
        date: "2023-06-25",
        daily_contract_deployed: 48,
      },
      {
        date: "2023-06-26",
        daily_contract_deployed: 59,
      },
      {
        date: "2023-06-27",
        daily_contract_deployed: 29,
      },
      {
        date: "2023-06-28",
        daily_contract_deployed: 48,
      },
      {
        date: "2023-06-29",
        daily_contract_deployed: 126,
      },
      {
        date: "2023-06-30",
        daily_contract_deployed: 24,
      },
      {
        date: "2023-07-01",
        daily_contract_deployed: 3,
      },
      {
        date: "2023-07-02",
        daily_contract_deployed: 38,
      },
      {
        date: "2023-07-03",
        daily_contract_deployed: 171,
      },
      {
        date: "2023-07-04",
        daily_contract_deployed: 6,
      },
      {
        date: "2023-07-05",
        daily_contract_deployed: 25,
      },
      {
        date: "2023-07-06",
        daily_contract_deployed: 24,
      },
      {
        date: "2023-07-07",
        daily_contract_deployed: 29,
      },
      {
        date: "2023-07-08",
        daily_contract_deployed: 13,
      },
      {
        date: "2023-07-09",
        daily_contract_deployed: 4,
      },
      {
        date: "2023-07-10",
        daily_contract_deployed: 44,
      },
      {
        date: "2023-07-11",
        daily_contract_deployed: 22,
      },
      {
        date: "2023-07-12",
        daily_contract_deployed: 44,
      },
      {
        date: "2023-07-13",
        daily_contract_deployed: 1,
      },
      {
        date: "2023-07-14",
        daily_contract_deployed: 6,
      },
      {
        date: "2023-07-16",
        daily_contract_deployed: 3,
      },
      {
        date: "2023-07-17",
        daily_contract_deployed: 35,
      },
      {
        date: "2023-07-18",
        daily_contract_deployed: 95,
      },
      {
        date: "2023-07-19",
        daily_contract_deployed: 20,
      },
      {
        date: "2023-07-20",
        daily_contract_deployed: 10,
      },
      {
        date: "2023-07-21",
        daily_contract_deployed: 23,
      },
      {
        date: "2023-07-22",
        daily_contract_deployed: 88,
      },
      {
        date: "2023-07-23",
        daily_contract_deployed: 17,
      },
      {
        date: "2023-07-24",
        daily_contract_deployed: 20,
      },
      {
        date: "2023-07-25",
        daily_contract_deployed: 24,
      },
      {
        date: "2023-07-26",
        daily_contract_deployed: 34,
      },
      {
        date: "2023-07-27",
        daily_contract_deployed: 50,
      },
      {
        date: "2023-07-28",
        daily_contract_deployed: 49,
      },
      {
        date: "2023-07-29",
        daily_contract_deployed: 6,
      },
      {
        date: "2023-07-31",
        daily_contract_deployed: 39,
      },
      {
        date: "2023-08-01",
        daily_contract_deployed: 90,
      },
      {
        date: "2023-08-02",
        daily_contract_deployed: 104,
      },
      {
        date: "2023-08-03",
        daily_contract_deployed: 20,
      },
      {
        date: "2023-08-04",
        daily_contract_deployed: 47,
      },
      {
        date: "2023-08-05",
        daily_contract_deployed: 2,
      },
      {
        date: "2023-08-06",
        daily_contract_deployed: 5,
      },
      {
        date: "2023-08-08",
        daily_contract_deployed: 13,
      },
      {
        date: "2023-08-09",
        daily_contract_deployed: 22,
      },
      {
        date: "2023-08-10",
        daily_contract_deployed: 70,
      },
      {
        date: "2023-08-11",
        daily_contract_deployed: 15,
      },
      {
        date: "2023-08-13",
        daily_contract_deployed: 2,
      },
      {
        date: "2023-08-14",
        daily_contract_deployed: 12,
      },
      {
        date: "2023-08-15",
        daily_contract_deployed: 1,
      },
      {
        date: "2023-08-16",
        daily_contract_deployed: 17,
      },
      {
        date: "2023-08-17",
        daily_contract_deployed: 93,
      },
      {
        date: "2023-08-19",
        daily_contract_deployed: 9,
      },
      {
        date: "2023-08-20",
        daily_contract_deployed: 4,
      },
      {
        date: "2023-08-21",
        daily_contract_deployed: 60,
      },
      {
        date: "2023-08-22",
        daily_contract_deployed: 112,
      },
      {
        date: "2023-08-23",
        daily_contract_deployed: 11,
      },
      {
        date: "2023-08-24",
        daily_contract_deployed: 10,
      },
      {
        date: "2023-08-25",
        daily_contract_deployed: 3,
      },
      {
        date: "2023-08-26",
        daily_contract_deployed: 5,
      },
      {
        date: "2023-08-27",
        daily_contract_deployed: 5,
      },
      {
        date: "2023-08-28",
        daily_contract_deployed: 10,
      },
      {
        date: "2023-08-29",
        daily_contract_deployed: 33,
      },
      {
        date: "2023-08-30",
        daily_contract_deployed: 2,
      },
      {
        date: "2023-08-31",
        daily_contract_deployed: 7,
      },
      {
        date: "2023-09-01",
        daily_contract_deployed: 29,
      },
      {
        date: "2023-09-02",
        daily_contract_deployed: 2,
      },
      {
        date: "2023-09-03",
        daily_contract_deployed: 4,
      },
      {
        date: "2023-09-04",
        daily_contract_deployed: 18,
      },
      {
        date: "2023-09-05",
        daily_contract_deployed: 2,
      },
      {
        date: "2023-09-06",
        daily_contract_deployed: 29,
      },
      {
        date: "2023-09-07",
        daily_contract_deployed: 27,
      },
      {
        date: "2023-09-08",
        daily_contract_deployed: 40,
      },
      {
        date: "2023-09-09",
        daily_contract_deployed: 6,
      },
      {
        date: "2023-09-11",
        daily_contract_deployed: 55,
      },
      {
        date: "2023-09-12",
        daily_contract_deployed: 18,
      },
      {
        date: "2023-09-13",
        daily_contract_deployed: 38,
      },
      {
        date: "2023-09-14",
        daily_contract_deployed: 10,
      },
      {
        date: "2023-09-15",
        daily_contract_deployed: 3,
      },
      {
        date: "2023-09-17",
        daily_contract_deployed: 5,
      },
      {
        date: "2023-09-18",
        daily_contract_deployed: 12,
      },
      {
        date: "2023-09-19",
        daily_contract_deployed: 6,
      },
      {
        date: "2023-09-20",
        daily_contract_deployed: 42,
      },
      {
        date: "2023-09-21",
        daily_contract_deployed: 3,
      },
      {
        date: "2023-09-22",
        daily_contract_deployed: 7,
      },
      {
        date: "2023-09-23",
        daily_contract_deployed: 1,
      },
      {
        date: "2023-09-25",
        daily_contract_deployed: 31,
      },
      {
        date: "2023-09-26",
        daily_contract_deployed: 18,
      },
      {
        date: "2023-09-27",
        daily_contract_deployed: 7,
      },
      {
        date: "2023-09-28",
        daily_contract_deployed: 8,
      },
      {
        date: "2023-09-29",
        daily_contract_deployed: 29,
      },
      {
        date: "2023-09-30",
        daily_contract_deployed: 1,
      },
      {
        date: "2023-10-01",
        daily_contract_deployed: 5,
      },
      {
        date: "2023-10-02",
        daily_contract_deployed: 15,
      },
      {
        date: "2023-10-03",
        daily_contract_deployed: 63,
      },
      {
        date: "2023-10-04",
        daily_contract_deployed: 11,
      },
      {
        date: "2023-10-05",
        daily_contract_deployed: 4,
      },
      {
        date: "2023-10-08",
        daily_contract_deployed: 1,
      },
      {
        date: "2023-10-09",
        daily_contract_deployed: 15,
      },
      {
        date: "2023-10-10",
        daily_contract_deployed: 3,
      },
      {
        date: "2023-10-11",
        daily_contract_deployed: 29,
      },
      {
        date: "2023-10-12",
        daily_contract_deployed: 28,
      },
      {
        date: "2023-10-13",
        daily_contract_deployed: 37,
      },
      {
        date: "2023-10-14",
        daily_contract_deployed: 26,
      },
      {
        date: "2023-10-15",
        daily_contract_deployed: 3,
      },
      {
        date: "2023-10-16",
        daily_contract_deployed: 162,
      },
      {
        date: "2023-10-17",
        daily_contract_deployed: 38,
      },
      {
        date: "2023-10-18",
        daily_contract_deployed: 35,
      },
      {
        date: "2023-10-19",
        daily_contract_deployed: 16,
      },
      {
        date: "2023-10-20",
        daily_contract_deployed: 34,
      },
      {
        date: "2023-10-21",
        daily_contract_deployed: 15,
      },
      {
        date: "2023-10-22",
        daily_contract_deployed: 17,
      },
      {
        date: "2023-10-23",
        daily_contract_deployed: 19,
      },
      {
        date: "2023-10-24",
        daily_contract_deployed: 40,
      },
      {
        date: "2023-10-25",
        daily_contract_deployed: 34,
      },
      {
        date: "2023-10-26",
        daily_contract_deployed: 27,
      },
      {
        date: "2023-10-27",
        daily_contract_deployed: 60,
      },
      {
        date: "2023-10-28",
        daily_contract_deployed: 14,
      },
      {
        date: "2023-10-29",
        daily_contract_deployed: 211,
      },
      {
        date: "2023-10-30",
        daily_contract_deployed: 23,
      },
      {
        date: "2023-10-31",
        daily_contract_deployed: 67,
      },
      {
        date: "2023-11-01",
        daily_contract_deployed: 19,
      },
      {
        date: "2023-11-02",
        daily_contract_deployed: 30,
      },
      {
        date: "2023-11-03",
        daily_contract_deployed: 3,
      },
      {
        date: "2023-11-04",
        daily_contract_deployed: 6,
      },
      {
        date: "2023-11-05",
        daily_contract_deployed: 11,
      },
      {
        date: "2023-11-06",
        daily_contract_deployed: 29,
      },
      {
        date: "2023-11-07",
        daily_contract_deployed: 18,
      },
      {
        date: "2023-11-08",
        daily_contract_deployed: 49,
      },
      {
        date: "2023-11-09",
        daily_contract_deployed: 28,
      },
      {
        date: "2023-11-10",
        daily_contract_deployed: 57,
      },
      {
        date: "2023-11-11",
        daily_contract_deployed: 11,
      },
      {
        date: "2023-11-12",
        daily_contract_deployed: 8,
      },
      {
        date: "2023-11-13",
        daily_contract_deployed: 31,
      },
      {
        date: "2023-11-14",
        daily_contract_deployed: 46,
      },
      {
        date: "2023-11-15",
        daily_contract_deployed: 28,
      },
      {
        date: "2023-11-16",
        daily_contract_deployed: 22,
      },
      {
        date: "2023-11-17",
        daily_contract_deployed: 5,
      },
      {
        date: "2023-11-18",
        daily_contract_deployed: 26,
      },
      {
        date: "2023-11-19",
        daily_contract_deployed: 6,
      },
      {
        date: "2023-11-20",
        daily_contract_deployed: 31,
      },
      {
        date: "2023-11-21",
        daily_contract_deployed: 79,
      },
      {
        date: "2023-11-22",
        daily_contract_deployed: 27,
      },
      {
        date: "2023-11-23",
        daily_contract_deployed: 25,
      },
      {
        date: "2023-11-24",
        daily_contract_deployed: 32,
      },
      {
        date: "2023-11-25",
        daily_contract_deployed: 4,
      },
      {
        date: "2023-11-26",
        daily_contract_deployed: 29,
      },
      {
        date: "2023-11-27",
        daily_contract_deployed: 51,
      },
      {
        date: "2023-11-28",
        daily_contract_deployed: 34,
      },
      {
        date: "2023-11-29",
        daily_contract_deployed: 29,
      },
      {
        date: "2023-11-30",
        daily_contract_deployed: 104,
      },
      {
        date: "2023-12-01",
        daily_contract_deployed: 14,
      },
      {
        date: "2023-12-02",
        daily_contract_deployed: 41,
      },
      {
        date: "2023-12-03",
        daily_contract_deployed: 4,
      },
      {
        date: "2023-12-04",
        daily_contract_deployed: 9,
      },
      {
        date: "2023-12-05",
        daily_contract_deployed: 29,
      },
      {
        date: "2023-12-06",
        daily_contract_deployed: 17,
      },
      {
        date: "2023-12-07",
        daily_contract_deployed: 12,
      },
      {
        date: "2023-12-08",
        daily_contract_deployed: 7,
      },
      {
        date: "2023-12-09",
        daily_contract_deployed: 3,
      },
      {
        date: "2023-12-10",
        daily_contract_deployed: 4,
      },
      {
        date: "2023-12-11",
        daily_contract_deployed: 11,
      },
      {
        date: "2023-12-12",
        daily_contract_deployed: 53,
      },
      {
        date: "2023-12-13",
        daily_contract_deployed: 38,
      },
      {
        date: "2023-12-14",
        daily_contract_deployed: 8,
      },
      {
        date: "2023-12-15",
        daily_contract_deployed: 22,
      },
      {
        date: "2023-12-16",
        daily_contract_deployed: 11,
      },
      {
        date: "2023-12-17",
        daily_contract_deployed: 9,
      },
      {
        date: "2023-12-18",
        daily_contract_deployed: 149,
      },
      {
        date: "2023-12-19",
        daily_contract_deployed: 98,
      },
      {
        date: "2023-12-20",
        daily_contract_deployed: 43,
      },
      {
        date: "2023-12-21",
        daily_contract_deployed: 192,
      },
      {
        date: "2023-12-22",
        daily_contract_deployed: 94,
      },
      {
        date: "2023-12-23",
        daily_contract_deployed: 37,
      },
      {
        date: "2023-12-24",
        daily_contract_deployed: 82,
      },
      {
        date: "2023-12-25",
        daily_contract_deployed: 57,
      },
      {
        date: "2023-12-26",
        daily_contract_deployed: 47,
      },
      {
        date: "2023-12-27",
        daily_contract_deployed: 91,
      },
      {
        date: "2023-12-28",
        daily_contract_deployed: 63,
      },
      {
        date: "2023-12-29",
        daily_contract_deployed: 58,
      },
      {
        date: "2023-12-30",
        daily_contract_deployed: 51,
      },
      {
        date: "2023-12-31",
        daily_contract_deployed: 17,
      },
      {
        date: "2024-01-01",
        daily_contract_deployed: 9,
      },
      {
        date: "2024-01-02",
        daily_contract_deployed: 24,
      },
      {
        date: "2024-01-03",
        daily_contract_deployed: 62,
      },
      {
        date: "2024-01-04",
        daily_contract_deployed: 119,
      },
      {
        date: "2024-01-05",
        daily_contract_deployed: 56,
      },
      {
        date: "2024-01-06",
        daily_contract_deployed: 4,
      },
      {
        date: "2024-01-07",
        daily_contract_deployed: 10,
      },
      {
        date: "2024-01-08",
        daily_contract_deployed: 14,
      },
      {
        date: "2024-01-09",
        daily_contract_deployed: 20,
      },
      {
        date: "2024-01-10",
        daily_contract_deployed: 7,
      },
      {
        date: "2024-01-11",
        daily_contract_deployed: 48,
      },
      {
        date: "2024-01-12",
        daily_contract_deployed: 21,
      },
      {
        date: "2024-01-13",
        daily_contract_deployed: 24,
      },
      {
        date: "2024-01-14",
        daily_contract_deployed: 22,
      },
      {
        date: "2024-01-15",
        daily_contract_deployed: 8,
      },
      {
        date: "2024-01-16",
        daily_contract_deployed: 31,
      },
      {
        date: "2024-01-17",
        daily_contract_deployed: 19,
      },
      {
        date: "2024-01-18",
        daily_contract_deployed: 104,
      },
      {
        date: "2024-01-19",
        daily_contract_deployed: 10,
      },
      {
        date: "2024-01-20",
        daily_contract_deployed: 18,
      },
      {
        date: "2024-01-21",
        daily_contract_deployed: 170,
      },
      {
        date: "2024-01-22",
        daily_contract_deployed: 64,
      },
    ],
    daily_contract_deployers: [
      {
        date: "2023-12-25",
        distinct_deployers: 11,
      },
      {
        date: "2023-12-26",
        distinct_deployers: 8,
      },
      {
        date: "2023-12-27",
        distinct_deployers: 10,
      },
      {
        date: "2023-12-28",
        distinct_deployers: 9,
      },
      {
        date: "2023-12-29",
        distinct_deployers: 3,
      },
      {
        date: "2023-12-30",
        distinct_deployers: 8,
      },
      {
        date: "2023-12-31",
        distinct_deployers: 11,
      },
      {
        date: "2024-01-01",
        distinct_deployers: 2,
      },
      {
        date: "2024-01-02",
        distinct_deployers: 5,
      },
      {
        date: "2024-01-03",
        distinct_deployers: 3,
      },
      {
        date: "2024-01-04",
        distinct_deployers: 7,
      },
      {
        date: "2024-01-05",
        distinct_deployers: 8,
      },
      {
        date: "2024-01-06",
        distinct_deployers: 1,
      },
      {
        date: "2024-01-07",
        distinct_deployers: 3,
      },
      {
        date: "2024-01-08",
        distinct_deployers: 7,
      },
      {
        date: "2024-01-09",
        distinct_deployers: 7,
      },
      {
        date: "2024-01-10",
        distinct_deployers: 4,
      },
      {
        date: "2024-01-11",
        distinct_deployers: 5,
      },
      {
        date: "2024-01-12",
        distinct_deployers: 7,
      },
      {
        date: "2024-01-13",
        distinct_deployers: 6,
      },
      {
        date: "2024-01-14",
        distinct_deployers: 8,
      },
      {
        date: "2024-01-15",
        distinct_deployers: 3,
      },
      {
        date: "2024-01-16",
        distinct_deployers: 5,
      },
      {
        date: "2024-01-17",
        distinct_deployers: 6,
      },
      {
        date: "2024-01-18",
        distinct_deployers: 12,
      },
      {
        date: "2024-01-19",
        distinct_deployers: 6,
      },
      {
        date: "2024-01-20",
        distinct_deployers: 5,
      },
      {
        date: "2024-01-21",
        distinct_deployers: 14,
      },
      {
        date: "2024-01-22",
        distinct_deployers: 6,
      },
      {
        date: "2024-01-23",
        distinct_deployers: 20,
      },
    ],
    daily_new_accounts_created: [
      {
        date: "2023-12-25",
        new_account_count: 34752,
      },
      {
        date: "2023-12-26",
        new_account_count: 48635,
      },
      {
        date: "2023-12-27",
        new_account_count: 57482,
      },
      {
        date: "2023-12-28",
        new_account_count: 61347,
      },
      {
        date: "2023-12-29",
        new_account_count: 58929,
      },
      {
        date: "2023-12-30",
        new_account_count: 55065,
      },
      {
        date: "2023-12-31",
        new_account_count: 49011,
      },
      {
        date: "2024-01-01",
        new_account_count: 46455,
      },
      {
        date: "2024-01-02",
        new_account_count: 47198,
      },
      {
        date: "2024-01-03",
        new_account_count: 45830,
      },
      {
        date: "2024-01-04",
        new_account_count: 42903,
      },
      {
        date: "2024-01-05",
        new_account_count: 44447,
      },
      {
        date: "2024-01-06",
        new_account_count: 52429,
      },
      {
        date: "2024-01-07",
        new_account_count: 50035,
      },
      {
        date: "2024-01-08",
        new_account_count: 45011,
      },
      {
        date: "2024-01-09",
        new_account_count: 45894,
      },
      {
        date: "2024-01-10",
        new_account_count: 46855,
      },
      {
        date: "2024-01-11",
        new_account_count: 46405,
      },
      {
        date: "2024-01-12",
        new_account_count: 46093,
      },
      {
        date: "2024-01-13",
        new_account_count: 48406,
      },
      {
        date: "2024-01-14",
        new_account_count: 49913,
      },
      {
        date: "2024-01-15",
        new_account_count: 46932,
      },
      {
        date: "2024-01-16",
        new_account_count: 30693,
      },
      {
        date: "2024-01-17",
        new_account_count: 16450,
      },
      {
        date: "2024-01-18",
        new_account_count: 14743,
      },
      {
        date: "2024-01-19",
        new_account_count: 14451,
      },
      {
        date: "2024-01-20",
        new_account_count: 13176,
      },
      {
        date: "2024-01-21",
        new_account_count: 32582,
      },
      {
        date: "2024-01-22",
        new_account_count: 29566,
      },
    ],
    daily_active_users: [
      {
        date: "2023-12-25",
        daily_active_user_count: 84368,
      },
      {
        date: "2023-12-26",
        daily_active_user_count: 113480,
      },
      {
        date: "2023-12-27",
        daily_active_user_count: 108460,
      },
      {
        date: "2023-12-28",
        daily_active_user_count: 97280,
      },
      {
        date: "2023-12-29",
        daily_active_user_count: 90069,
      },
      {
        date: "2023-12-30",
        daily_active_user_count: 91750,
      },
      {
        date: "2023-12-31",
        daily_active_user_count: 88108,
      },
      {
        date: "2024-01-01",
        daily_active_user_count: 72947,
      },
      {
        date: "2024-01-02",
        daily_active_user_count: 48271,
      },
      {
        date: "2024-01-03",
        daily_active_user_count: 78174,
      },
      {
        date: "2024-01-04",
        daily_active_user_count: 92626,
      },
      {
        date: "2024-01-05",
        daily_active_user_count: 99482,
      },
      {
        date: "2024-01-06",
        daily_active_user_count: 87089,
      },
      {
        date: "2024-01-07",
        daily_active_user_count: 97779,
      },
      {
        date: "2024-01-08",
        daily_active_user_count: 110750,
      },
      {
        date: "2024-01-09",
        daily_active_user_count: 103834,
      },
      {
        date: "2024-01-10",
        daily_active_user_count: 107269,
      },
      {
        date: "2024-01-11",
        daily_active_user_count: 134723,
      },
      {
        date: "2024-01-12",
        daily_active_user_count: 107232,
      },
      {
        date: "2024-01-13",
        daily_active_user_count: 108630,
      },
      {
        date: "2024-01-14",
        daily_active_user_count: 89918,
      },
      {
        date: "2024-01-15",
        daily_active_user_count: 103747,
      },
      {
        date: "2024-01-16",
        daily_active_user_count: 90977,
      },
      {
        date: "2024-01-17",
        daily_active_user_count: 88708,
      },
      {
        date: "2024-01-18",
        daily_active_user_count: 65435,
      },
      {
        date: "2024-01-19",
        daily_active_user_count: 45324,
      },
      {
        date: "2024-01-20",
        daily_active_user_count: 42760,
      },
      {
        date: "2024-01-21",
        daily_active_user_count: 63537,
      },
      {
        date: "2024-01-22",
        daily_active_user_count: 65865,
      },
      {
        date: "2024-01-23",
        daily_active_user_count: 125965,
      },
    ],
    mau_signers: [
      {
        date: "2023-12-25",
        mau_signer_30: 724339,
      },
      {
        date: "2023-12-26",
        mau_signer_30: 775909,
      },
      {
        date: "2023-12-27",
        mau_signer_30: 831146,
      },
      {
        date: "2023-12-28",
        mau_signer_30: 880959,
      },
      {
        date: "2023-12-29",
        mau_signer_30: 922769,
      },
      {
        date: "2023-12-30",
        mau_signer_30: 956136,
      },
      {
        date: "2023-12-31",
        mau_signer_30: 985232,
      },
      {
        date: "2024-01-01",
        mau_signer_30: 1010650,
      },
      {
        date: "2024-01-02",
        mau_signer_30: 1015184,
      },
      {
        date: "2024-01-03",
        mau_signer_30: 1046811,
      },
      {
        date: "2024-01-04",
        mau_signer_30: 1090393,
      },
      {
        date: "2024-01-05",
        mau_signer_30: 1132586,
      },
      {
        date: "2024-01-06",
        mau_signer_30: 1175064,
      },
      {
        date: "2024-01-07",
        mau_signer_30: 1222585,
      },
      {
        date: "2024-01-08",
        mau_signer_30: 1258463,
      },
      {
        date: "2024-01-09",
        mau_signer_30: 1280805,
      },
      {
        date: "2024-01-10",
        mau_signer_30: 1305297,
      },
      {
        date: "2024-01-11",
        mau_signer_30: 1329983,
      },
      {
        date: "2024-01-12",
        mau_signer_30: 1365252,
      },
      {
        date: "2024-01-13",
        mau_signer_30: 1400158,
      },
      {
        date: "2024-01-14",
        mau_signer_30: 1430351,
      },
      {
        date: "2024-01-15",
        mau_signer_30: 1470185,
      },
      {
        date: "2024-01-16",
        mau_signer_30: 1502795,
      },
      {
        date: "2024-01-17",
        mau_signer_30: 1535558,
      },
      {
        date: "2024-01-18",
        mau_signer_30: 1541038,
      },
      {
        date: "2024-01-19",
        mau_signer_30: 1548619,
      },
      {
        date: "2024-01-20",
        mau_signer_30: 1555136,
      },
      {
        date: "2024-01-21",
        mau_signer_30: 1562119,
      },
      {
        date: "2024-01-22",
        mau_signer_30: 1570350,
      },
      {
        date: "2024-01-23",
        mau_signer_30: 1615556,
      },
    ],
  };

  if (!data) {
    // TODO: apply better error message
    return null;
  }

  return (
    <Grid container spacing={3} marginTop={3}>
      <Grid item xs={12} md={12} lg={12} marginBottom={2}>
        <NetworkInfo />
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <ChartRangeDaysSelect days={days} setDays={setDays} />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <DailyUserTransactionsChart
          data={data.daily_user_transactions}
          days={days}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <DailyPeakTPSChart data={data.daily_max_tps_15_blocks} days={days} />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <MonthlyActiveUserChart data={data.mau_signers} days={days} />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <DailyActiveUserChart data={data.daily_active_users} days={days} />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <DailyNewAccountsCreatedChart
          data={data.daily_new_accounts_created}
          days={days}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <DailyDeployedContractsChart
          data={data.daily_deployed_contracts}
          days={days}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <DailyContractDeployersChart
          data={data.daily_contract_deployers}
          days={days}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <DailyGasConsumptionChart
          data={data.daily_gas_from_user_transactions}
          days={days}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <DailyAvgGasUnitPriceChart
          data={data.daily_average_gas_unit_price}
          days={days}
        />
      </Grid>
    </Grid>
  );
}
