import { Box, Button, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import Loader from "../../../components/Loaders/Loader";
import styled from "styled-components";
import Base from "../../../components/Fields/Base";
import { useDispatch } from "react-redux";
import { editIncome } from "../../../store/slices";
import { categoriesIncome } from "../../../data/categories";
import { success } from "../../../utils/notification/notifications";

export default ({ setShowEdit, selected }) => {
  const dispatch = useDispatch();
  const Wrapper = styled(Box)(({}) => ({
    display: "flex",
    flexDirection: "column",
    rowGap: "10px",
    margin: "30px 0px",
  }));

  return (
    <>
      <Typography
        id="spring-modal-title"
        variant="h4"
        component="h2"
        textAlign={"center"}
      >
        Edit
      </Typography>
      <Formik
        initialValues={{
          name: selected?.name,
          category: selected?.category,
          amount: selected?.amount,
          date: selected?.date,
        }}
        validate={(values) => {
          const errors = {};
          for (const value in values) {
            if (!values[value]) {
              errors[value] = "Required!";
            }
            if (values[value]?.length < 3) {
              errors[value] = "Too short!";
            }
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(editIncome({ ...values, id: selected?.id }));
          setTimeout(() => {
            setSubmitting(false);
            setShowEdit(false);
            success();
          }, 500);
        }}
      >
        {({ isSubmitting }) => {
          // console.log(values);
          return (
            <>
              {/* {isSubmitting && <Linier />} */}
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
                    type="text"
                    name="amount"
                    placeholder="Enter amount"
                    label="Amount (sum)"
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
