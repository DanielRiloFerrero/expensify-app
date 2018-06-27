import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage from '../../components/NotFoundPage';
import toJSON from 'enzyme-to-json';

test('should render ExpenseDashboardPage', () => {
  const wrapper = shallow(<ExpenseDashboardPage />);
  // expect(wrapper).toMatchSnapshot();
  expect(toJSON(wrapper)).toMatchSnapshot();
});