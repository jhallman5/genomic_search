import React from 'react';
import { LoadingWheel } from '../../../src/view/components/Loading_Wheel';
import renderer from 'react-test-renderer';
import { MuiThemeProvider } from '@material-ui/core/'
import { shallow, mount } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

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
test('LoadingWheel renders', () => {
  const wrapper = shallow(<LoadingWheel {...props} />);
  const component = renderer.create(wrapper);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
