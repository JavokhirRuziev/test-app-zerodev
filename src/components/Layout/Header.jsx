import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { Container, Link } from "@mui/material";
import { headerDatas } from "../../data/header-data";
import styled from "styled-components";
import { useSelector } from "react-redux";
import thousandsDivider from "../../utils/thousandsDivider/thousandsDivider";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function HideAppBar(props) {
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
  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    columnGap: "20px",
  }));
  const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
  }));
  const StyledContainer = styled(Container)(({ theme }) => ({
    marginTop: "50px",
  }));
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <StyledToolbar>
            {headerDatas.map((el) => (
              <StyledLink href={el.link} key={el.name}>
                <Typography
                  variant="h6"
                  color={
                    el.link === window.location.pathname
                      ? "secondary.light"
                      : "common.white"
                  }
                  fontWeight={"bold"}
                  fontSize={{ mobile: "14px", tablet: "16px", desktop: "20px" }}
                >
                  {el.name}
                </Typography>
              </StyledLink>
            ))}
            <Typography
              fontWeight={"bold"}
              sx={{
                ml: "auto",
                fontSize: { mobile: "16px", tablet: "18px", desktop: "24px" },
              }}
            >
              {thousandsDivider(totalIncome - totalExpense)}
              &nbsp;$ &nbsp;&nbsp;
            </Typography>
          </StyledToolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <StyledContainer>{props.children}</StyledContainer>
    </React.Fragment>
  );
}
