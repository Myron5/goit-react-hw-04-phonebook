import styled from 'styled-components';

import { colors, adaptFonts, other } from '../../constants';
import { cunsomFonts } from '../../utils';

export const FilterBox = styled.div`
  position: relative;
  margin-top: 30px;
`;

export const H2 = styled.h2`
  color: ${colors.txtBlack};
  ${adaptFonts.md}
`;

export const InputBox = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 15px;

  border: none;
  border-bottom: ${other.border};
`;

export const Input = styled.input`
  padding: 5px 8px;
  background-color: transparent;
  border: none;

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
