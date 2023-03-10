import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as yup from 'yup';

import {
  MyForm,
  FormBox,
  Label,
  Input,
  Error,
  Button,
} from './ContactForm.styled';
import { phoneRegExp } from '../../constants';

const initialValues = {
  name: '',
  number: '',
};

const schema = yup.object().shape({
  name: yup.string().max(50).required(),
  number: yup
    .string()
    .required()
    .matches(phoneRegExp, 'Phone number is not valid'),
});

export const ContactForm = ({ handleOnSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleOnSubmit}
      validationSchema={schema}
    >
      {({ values }) => (
        <MyForm autoComplete="off">
          <FormBox>
            <Input name="name" type="text" value={values.name} />
            <Label htmlFor="name">Name</Label>
            <Error name="name" />
          </FormBox>
          <FormBox>
            <Input name="number" type="tel" value={values.number} />
            <Label htmlFor="number">Number</Label>
            <Error name="number" />
          </FormBox>
          <Button type="submit">Add contact</Button>
        </MyForm>
      )}
    </Formik>
  );
};

ContactForm.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
};
