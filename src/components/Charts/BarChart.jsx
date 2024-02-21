import * as React from "react";
import Box from "@mui/material/Box";
import { BarChart } from "@mui/x-charts/BarChart";

export default function ({ chartData }) {
  return (
    <Box sx={{ width: "100%" }}>
      <BarChart height={300} series={[{ data: chartData }]} />
    </Box>
  );
}
