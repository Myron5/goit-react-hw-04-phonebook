import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

import { colors, other } from '../../constants';
import { cunsomFonts } from '../../utils';

export const MyForm = styled(Form)`
  display: inline-flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 30px;

  background-color: ${colors.white};
  box-shadow: ${other.boxShadow};
  border: ${other.border};
  border-radius: ${other.borderRadius}px;
`;

export const FormBox = styled.div`
  position: relative;
`;

export const Label = styled.label`
  display: inline-block;
  position: absolute;
  top: 0;
  left: 5px;
  pointer-events: none;
  transition: translate ${other.animation};

  ${cunsomFonts(12, 14, 16)}
  color: ${colors.txtBlack};
`;

export const Input = styled(Field)`
  padding: 5px 8px;
  background-color: transparent;
  border: none;
  border-bottom: ${other.border};

  ${props => {
    if (props.value)
      return `
    & ~ label {
      translate: 0 -100%;
      color: blue;
    } 
    `;
  }}

  &:focus ~ label {
    translate: 0 -100%;
    color: blue;
  }
`;

const ErrorText = styled.p`
  ${cunsomFonts(10, 12, 14)}
  color: red;
`;

export const Error = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

export const Button = styled.button`
  ${cunsomFonts(12, 14, 16)}
  color: ${colors.txtBlack};

  padding: 10px 15px;
  background-color: ${colors.generalBackground};
  border: none;
  box-shadow: none;
  transition: box-shadow ${other.animation};

  &:hover,
  &:focus {
    box-shadow: ${other.boxShadow};
  }
`;
