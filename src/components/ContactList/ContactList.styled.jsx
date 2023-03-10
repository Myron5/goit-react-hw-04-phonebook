import styled from 'styled-components';

import { colors, other } from '../../constants';
import { cunsomFonts } from '../../utils';

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 13px;

  margin-top: 35px;
  width: 300px;
`;

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-left: 5px;

  box-shadow: ${other.boxShadow};
`;

export const Name = styled.p`
  display: inline-block;
`;

export const Button = styled.button`
  display: inline-block;
  padding: 5px 10px;

  ${cunsomFonts(12, 14, 16)}
  color: ${colors.txtBlack};

  background-color: ${colors.generalBackground};
  border: none;
  box-shadow: none;
  transition: box-shadow ${other.animation};

  &:hover,
  &:focus {
    box-shadow: ${other.boxShadow};
  }
`;
