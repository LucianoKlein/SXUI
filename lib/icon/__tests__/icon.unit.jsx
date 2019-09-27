import * as renderer from 'react-test-renderer';
import React from 'react';
import Icon from '../icon';
import {mount} from 'enzyme';

describe('icon', ()=> {
    it('render successfully', () => {
        const json = renderer.create(<Icon name="paypal"/>).toJSON();
        expect(json).toMatchSnapshot();
    });
    it('onClick', () => {
        const fn = jest.fn();
        const fn2 = jest.fn();

        const component = mount(<Icon name="paypal" onClick={fn}/>);
        component.find('svg').simulate('click');
        expect(fn).toBeCalled();

    })
});
