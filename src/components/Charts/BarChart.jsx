import * as React from "react";
import Box from "@mui/material/Box";
import { BarChart } from "@mui/x-charts/BarChart";

export default function ({ chartData }) {
  return <BarChart height={300} series={chartData} />;
}
