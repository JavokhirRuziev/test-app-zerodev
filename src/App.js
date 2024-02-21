import Header from "./components/Layout/Header";
import Chart from "./components/Charts/Chart";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { useSelector } from "react-redux";
import BarChart from "./components/Charts/BarChart";

function App() {
  const incomes = useSelector((state) => state.incomes.incomes);
  const expenses = useSelector((state) => state.expenses.expenses);

  const totalIncome = incomes.reduce(
    (acc, income) => acc + Number(income.amount),
    0
  );

  const totalExpense = expenses.reduce(
    (acc, expense) => acc + Number(expense.amount),
    0
  );

  const chartData = [
    { id: 0, value: totalIncome, label: `Incomes` },
    { id: 1, value: totalExpense, label: `Expenses` },
  ];
  const ChartWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }));
  return (
    <Header>
      <ChartWrapper>
        <Chart {...{ chartData }} />
        {/* <BarChart {...{ chartData }} /> */}
      </ChartWrapper>
    </Header>
  );
}

export default App;
