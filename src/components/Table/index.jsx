import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Add, Edit, Remove } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import thousandsDivider from "../../utils/thousandsDivider/thousandsDivider";
import { ReactComponent as Empty } from "../assest/icons/empty.svg";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const ActionWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  columnGap: "15px",
  justifyContent: "flex-end",
  alignItems: "center",
}));

const MobileWrapper = styled(Box)(({}) => ({
  display: "flex",
  flexWrap: "wrap",
  columnGap: "20px",
  rowGap: "20px",
  margin: "auto",
  justifyContent: "center",
  // maxWidth: 570,
  // width: "100%",
}));
const TextWrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

const EmptyWrapper = styled(Box)(() => ({
  margin: "20px 0px",
  display: "flex",
  justifyContent: "center",
}));

export default function CustomizedTables({
  arr = [],
  onEdit,
  onRemove,
  onCreate,
}) {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));

  return (
    <>
      {!mobile ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">Category</StyledTableCell>
                <StyledTableCell align="right">Amount</StyledTableCell>
                <StyledTableCell align="right">Date</StyledTableCell>
                <StyledTableCell align="right">
                  <Button variant="contained" size="large" onClick={onCreate}>
                    <Add />
                  </Button>
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {arr?.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.category?.label}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {thousandsDivider(row.amount)}$
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.date}</StyledTableCell>
                  <StyledTableCell align="right">
                    <ActionWrapper>
                      <Tooltip
                        title="Edit"
                        sx={{ cursor: "pointer" }}
                        placement="top"
                      >
                        <IconButton
                          color="secondary"
                          onClick={() => onEdit(row)}
                        >
                          <Edit />
                        </IconButton>
                      </Tooltip>
                      <Tooltip
                        title="Remove"
                        sx={{ cursor: "pointer" }}
                        placement="top"
                      >
                        <IconButton
                          color="primary"
                          onClick={() => onRemove(row)}
                        >
                          <Remove />
                        </IconButton>
                      </Tooltip>
                    </ActionWrapper>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
          {arr?.length < 1 && (
            <EmptyWrapper>
              <Empty
                style={{ width: "500px", maxHeight: "250px", height: "100%" }}
              />
            </EmptyWrapper>
          )}
        </TableContainer>
      ) : (
        <>
          {arr?.length < 1 && (
            <MobileWrapper>
              <Card sx={{ maxWidth: 570, width: "100%", minWidth: 275 }}>
                <CardContent>
                  <EmptyWrapper>
                    <Empty
                      style={{
                        width: "500px",
                        maxHeight: "250px",
                        height: "100%",
                      }}
                    />
                  </EmptyWrapper>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={onCreate}
                    sx={{ mr: "auto" }}
                  >
                    <Add />
                  </Button>
                </CardActions>
              </Card>
            </MobileWrapper>
          )}
          <MobileWrapper>
            {arr?.map((row) => (
              <Card sx={{ maxWidth: 570, width: "100%", minWidth: 275 }}>
                <CardContent>
                  <TextWrapper>
                    <Typography
                      sx={{ fontSize: 14, fontWeight: "bold" }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Name
                    </Typography>{" "}
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {row.name}
                    </Typography>
                  </TextWrapper>
                  <TextWrapper>
                    <Typography
                      sx={{ fontSize: 14, fontWeight: "bold" }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Category
                    </Typography>{" "}
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {row.category?.label}
                    </Typography>
                  </TextWrapper>
                  <TextWrapper>
                    <Typography
                      sx={{ fontSize: 14, fontWeight: "bold" }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Amount ($)
                    </Typography>{" "}
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {thousandsDivider(row.amount)}
                    </Typography>
                  </TextWrapper>
                  <TextWrapper>
                    <Typography
                      sx={{ fontSize: 14, fontWeight: "bold" }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Date
                    </Typography>{" "}
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {row.date}
                    </Typography>
                  </TextWrapper>
                </CardContent>
                <CardActions>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Button variant="contained" size="small" onClick={onCreate}>
                      <Add />
                    </Button>
                    <Box>
                      <IconButton color="primary" onClick={() => onRemove(row)}>
                        <Remove />
                      </IconButton>
                      <IconButton color="secondary" onClick={() => onEdit(row)}>
                        <Edit />
                      </IconButton>
                    </Box>
                  </Box>
                </CardActions>
              </Card>
            ))}
          </MobileWrapper>
        </>
      )}
    </>
  );
}
