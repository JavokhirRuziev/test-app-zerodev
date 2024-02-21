import { useMediaQuery } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";

export default ({ chartData }) => {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  const tablet = useMediaQuery((theme) => theme.breakpoints.down("desktop"));

  return (
    <>
      <PieChart
        colors={["#d63333", "#9c9af5"]}
        series={[{ data: chartData }]}
        width={mobile && tablet ? 250 : tablet ? 400 : 600}
        height={mobile && tablet ? 150 : tablet ? 250 : 400}
      />
    </>
  );
};
