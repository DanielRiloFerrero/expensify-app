import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';
import toJSON from 'enzyme-to-json';

test('should render ExpenseListItem with expenses', () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
  // expect(wrapper).toMatchSnapshot();
  expect(toJSON(wrapper)).toMatchSnapshot();
});