/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Details from '../src/screens/details'
import Data from '../src/screens/home';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


test('Api test case', async function () {
    global.fetch = jest.fn().mockImplementation(() => {
        var p = new Promise((resolve, reject) => {
            resolve({
                json: function () {
                    return { id: 2 }
                }
            })
        })
        return p;
    })
    const response = await Data.all();
    console.warn(response);
    expect(response.id).toBe(2);
})

test('renders correctly', () => {
    const navigationMock = { state: { params: { id: 1 } } };
    const tree = renderer.create(<Details navigation={navigationMock} />).toJSON();
    expect(tree).toMatchSnapshot();
});
