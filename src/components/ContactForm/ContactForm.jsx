import React from "react";
import { Formik, ErrorMessage } from "formik";
import { FormContainer, Label, Input, Button } from "./ContactForm.styled";
import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string().required(),
  number: Yup.number().required(),
});

const initialValues = { name: " ", number: " " };

const ContactForm = (props) => {
  
  const handleSubmit = (values, { resetForm }) => {
    props.onSubmit(values);
    resetForm();
  };


  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
      <FormContainer autoComplete="off">
        <Label>
          Name
          <Input
            type="text"
            name="name"
          />
          <ErrorMessage component="span" name="name" />
        </Label>

        <Label>
          Number
          <Input
            type="tel"
            name="number"
          />
          <ErrorMessage component="span" name="number" />
        </Label>

        <Button type="submit">Add contact</Button>
      </FormContainer>
    </Formik>
  );
};

export default ContactForm;
