import { Box, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeExpense } from "../../../store/slices";
import styled from "styled-components";
import { success } from "../../../utils/notification/notifications";

export default ({ selected, setShowRemove }) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeExpense(selected));
    setShowRemove(false);
    success();
  };
  const handleClose = () => setShowRemove(false);
  const Wrapper = styled(Box)(({}) => ({
    display: "flex",
    flexDirection: "column",
    rowGap: "20px",
    alignItems: "center",
  }));
  const ButtonsWrapper = styled(Box)(({}) => ({
    display: "flex",
    columnGap: "50px",
  }));
  return (
    <Wrapper>
      <Typography variant="h4">Are sure?</Typography>
      <ButtonsWrapper>
        <Button onClick={handleRemove} color="primary" variant="contained">
          Yes
        </Button>
        <Button onClick={handleClose} color="secondary" variant="outlined">
          No
        </Button>
      </ButtonsWrapper>
    </Wrapper>
  );
};
