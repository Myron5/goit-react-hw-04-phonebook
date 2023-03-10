import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';

import { FilterBox, H2, InputBox, Input, Label } from './Filter.styled';

export const Filter = ({ title, handleOnChange, filterValue }) => (
  <>
    {title && <H2>{title}</H2>}
    <FilterBox>
      <InputBox>
        <Input
          name="filter"
          type="text"
          onChange={handleOnChange}
          value={filterValue}
        />
        <BsSearch />
        <Label htmlFor="filter">Find contacts by name</Label>
      </InputBox>
    </FilterBox>
  </>
);

Filter.propTypes = {
  title: PropTypes.string,
  handleOnChange: PropTypes.func,
  filterValue: PropTypes.string.isRequired,
};
