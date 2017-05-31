import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import preload from '../../data.json';
import Search from '../Search';
import ShowCard from '../ShowCard';

// add x in front of test to skip testing

test('Search renders correctly', () => {
  const component = shallow(<Search />);
  //const tree = component.toJSON();
  expect(component).toMatchSnapshot();
});

test('Search should render correct amount of shows', () => {
  const component = shallow(<Search />)
  expect(preload.shows.length).toEqual(component.find(ShowCard).length);
})

test('Search should render correct amount of shows based on search term',() => {
  const searchWord = 'black';
  const component = shallow(<Search />);
  component.find('input').simulate('change',{target:{value:searchWord}})
  const showCount = preload.shows.filter(
      show =>
        `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase() >= 0)
    ).length;
    expect(component.find(ShowCard).length).toEqual(showCount);
});