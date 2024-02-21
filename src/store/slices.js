import { createSlice } from "@reduxjs/toolkit";

const incomeSlice = createSlice({
  name: "incomes",
  initialState: {
    incomes: [],
  },
  reducers: {
    createIncome(state, action) {
      state.incomes.push({ ...action.payload, id: Date.now() });
    },
    editIncome(state, action) {
      state.incomes = state.incomes.map((income) => {
        return income.id === action.payload.id ? action.payload : income;
      });
    },
    removeIncome(state, action) {
      state.incomes = state.incomes.filter(
        (income) => income.id !== action.payload.id
      );
    },
  },
});
const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    expenses: [],
  },
  reducers: {
    createExpense(state, action) {
      state.expenses.push({ ...action.payload, id: Date.now() });
    },
    editExpense(state, action) {
      state.expenses = state.expenses.map((expense) => {
        return expense.id === action.payload.id ? action.payload : expense;
      });
    },
    removeExpense(state, action) {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload.id
      );
    },
  },
});

export const { createIncome, editIncome, removeIncome } = incomeSlice.actions;
export const { createExpense, editExpense, removeExpense } =
  expensesSlice.actions;
export const incomes = incomeSlice.reducer;
export const expenses = expensesSlice.reducer;
