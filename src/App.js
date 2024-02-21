import Header from "./components/Layout/Header";
import { Box } from "@mui/material";
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
    {
      label: "Incomes",
      data: [totalIncome],
    },
    {
      label: "Expenses",
      data: [totalExpense],
    },
  ];

  const ChartWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }));
  return (
    <Header>
      <ChartWrapper>
        <BarChart {...{ chartData }} />
      </ChartWrapper>
    </Header>
  );
}

export default App;
