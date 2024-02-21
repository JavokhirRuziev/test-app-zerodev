import { LinearProgress } from "@mui/material";
import styled from "styled-components";

export default (params) => {
  const StyledLinier = styled(LinearProgress)(({ theme }) => ({
    position: "fixed",
    top: 56,
  }));
  return <StyledLinier color="secondary" />;
};
