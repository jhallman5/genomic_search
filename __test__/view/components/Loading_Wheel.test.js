import React from 'react';
import { LoadingWheel } from '../../../src/view/components/Loading_Wheel';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('LoadingWheel', () =>  {
  const props = {
    classes: {
      progress: {
        color: '#39B7AA',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }
    }
  }

  describe('Lifecycle methods', () =>  {
    test('renders', () => {
      const wrapper = shallow(<LoadingWheel {...props} />);
      expect(wrapper.exists()).toBe(true);
    })

    test('componentDidMount sets setInterval', () => {
      jest.useFakeTimers();
      const wrapper = shallow(<LoadingWheel {...props} />);
      expect(setInterval).toHaveBeenCalledTimes(1);
    })

    test('componentWillUnmount removes setInterval', () => {
      jest.useFakeTimers();
      const wrapper = shallow(<LoadingWheel {...props} />);
      expect(setInterval).toHaveBeenCalledTimes(1);
      wrapper.unmount();
      expect(clearInterval).toHaveBeenCalledTimes(1);
    })
  })

  describe('Progress Method', () =>  {
    test('increments state by 1', () => {
      const wrapper = shallow(<LoadingWheel {...props} />);
      wrapper.instance().progress();
      expect(wrapper.state().completed).toBe(1);
    })

    test('Multiple calls increments state by 1 each time', () => {
      const wrapper = shallow(<LoadingWheel {...props} />);
      wrapper.instance().progress();
      expect(wrapper.state().completed).toBe(1);
      wrapper.instance().progress();
      expect(wrapper.state().completed).toBe(2);
      wrapper.instance().progress();
      expect(wrapper.state().completed).toBe(3);
    })

    test('State completes at 1.5 seconds', () => {
      jest.useFakeTimers();
      const wrapper = shallow(<LoadingWheel {...props} />);
      jest.advanceTimersByTime(1500);
      expect(wrapper.state().completed).toBe(100);
    })

    test('State increments consistently', () => {
      jest.useFakeTimers();
      const wrapper = shallow(<LoadingWheel {...props} />);
      jest.advanceTimersByTime(750);
      expect(wrapper.state().completed).toBe(50);
    })
  })
})
