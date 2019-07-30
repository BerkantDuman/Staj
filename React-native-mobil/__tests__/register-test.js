/**
 * @format
 */

import 'react-native';
import React from 'react';
import Register from '../src/screens/register';
import 'react-native-i18n';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Data from '../src/screens/home';

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
    const tree = renderer.create(<Register navigation={navigationMock} />).toJSON();
    expect(tree).toMatchSnapshot();
});

/*
test('function', () => {
    const navigationMock = { state: { params: { id: 1 } } };
    let Data = renderer.create(<Register navigation={navigationMock} />).getInstance();

    Data.onPressed()

    expect(Data.state.id).toBe(null);
    expect(tree).toMatchSnapshot();
})*/



