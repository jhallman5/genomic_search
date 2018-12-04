import React from 'react';
import { Search_Bar } from '../../../src/view/containers/Search_Bar.js';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Search_Bar', () =>  {
  const props = {
    classes: {
      container: {
        fontSize: 25,
        position: 'relative',
        height: 30,
        width: 400
      },
      suggestionsContainerOpen: {
        position: 'absolute',
        color: 'black',
        zIndex: 1,
        marginTop: 5,
        left: 0,
        right: 0,
      },
      suggestion: {
        margin: 10,
        display: 'block',
        fontSize: 20,
        borderBottom: '2px solid #F0F0F0',
        '&:hover': {
          backgroundColor: '#e5e5e5'
        },
      },
      suggestionsList: {
        margin: 10,
        padding: 0,
        listStyleType: 'none',
      }
    }
  }

  describe('Lifecycle Methods', () =>  {
    test('render', () => {
      const wrapper = shallow(<Search_Bar {...props} />);
      expect(wrapper.exists()).toBe(true);
    })
  })
  describe('renderSuggestion Method', () =>  {
    test('Returns a div with the suggestion (ENG)', () => {
      const wrapper = shallow(<Search_Bar {...props} />);
      const instance = shallow(wrapper.instance().renderSuggestion('ENG'));
      expect(instance.text()).toBe('ENG');
    })

    test('Returns a div with the suggestion (YAP1)', () => {
      const wrapper = shallow(<Search_Bar {...props} />);
      const instance = shallow(wrapper.instance().renderSuggestion('YAP1'));
      expect(instance.text()).toBe('YAPPP1');
    })
  })
})
