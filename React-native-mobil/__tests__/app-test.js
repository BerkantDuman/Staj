/**
 * @format
 */

import 'react-native';
import React from 'react';
import 'isomorphic-fetch';

import renderer from 'react-test-renderer';
import Details from '../src/screens/details'
import Data  from './api';
import People from '../src/screens/people';
import Register from '../src/screens/register';
import Products from '../src/screens/products';

test('Api test case', async function () {
   /* global.fetch = jest.fn().mockImplementation(() => {
        var p = new Promise((resolve, reject) => {
            resolve({
                json: function () {
                    return { id: 2 }
                }
            })
        })
        return p;
    })*/
    const response = await Data.all();
    //console.warn(response);
    expect(response[0].product_id).toBe(1);
})

    
test('renders People correctly', () => {
    const tree = renderer.create(<People />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('renders Register correctly', () => {
    const navigationMock = { state: { params: { id: 1 } } };
    const tree = renderer.create(<Register navigation={navigationMock} />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('renders Details correctly', () => {
    const navigationMock = { state: { params: { id: 1 } } };
    const tree = renderer.create(<Details navigation={navigationMock} />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('renders Products correctly', () => {
    const navigationMock = { state: { params: { id: 1 } } };
    const tree = renderer.create(<Products navigation={navigationMock} />).toJSON();
    expect(tree).toMatchSnapshot();
});
