import { Component } from 'react';
import { FilterTitle } from './Filter.styled';
class Filter extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label>
        <FilterTitle>Find contacts by name</FilterTitle>
        <input value={value} onChange={onChange} type="text"></input>
      </label>
    );
  }
}

export default Filter;
