import { Box, Button, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import Loader from "../../../components/Loaders/Loader";
import styled from "styled-components";
import Base from "../../../components/Fields/Base";
import { useDispatch } from "react-redux";
import { createIncome } from "../../../store/slices";
import { categoriesIncome } from "../../../data/categories";
import { success } from "../../../utils/notification/notifications";

export default ({ setShowCreate }) => {
  const Wrapper = styled(Box)(({}) => ({
    display: "flex",
    flexDirection: "column",
    rowGap: "10px",
    margin: "30px 0px",
  }));
  const dispatch = useDispatch();

  return (
    <>
      <Typography
        id="spring-modal-title"
        variant="h4"
        component="h2"
        textAlign={"center"}
      >
        Create
      </Typography>
      <Formik
        initialValues={{ name: "", category: "", amount: "", date: "" }}
        validate={(values) => {
          const errors = {};
          for (const value in values) {
            if (!values[value]) {
              errors[value] = "Required!";
            }
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(createIncome(values));
          setTimeout(() => {
            setSubmitting(false);
            setShowCreate(false);
            success();
          }, 500);
        }}
      >
        {({ isSubmitting, values }) => {
          return (
            <>
              <Form>
                <Wrapper>
                  <Field
                    component={Base}
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    label="Name"
                  />
                  <Field
                    component={Base}
                    type="select"
                    name="category"
                    placeholder="Enter category"
                    label="Category"
                    options={categoriesIncome}
                  />
                  <Field
                    component={Base}
                    type="number"
                    name="amount"
                    placeholder="Enter amount"
                    label="Amount ($)"
                  />
                  <Field
                    component={Base}
                    type="date"
                    name="date"
                    placeholder="Enter date"
                    label="Date"
                  />
                  <Button
                    type="submit"
                    size="large"
                    variant="contained"
                    color="secondary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? <Loader /> : "Submit"}
                  </Button>
                </Wrapper>
              </Form>
            </>
          );
        }}
      </Formik>
    </>
  );
};
