/**
 * @format
 */

import 'react-native';
import React from 'react';
import Register from '../src/screens/register';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import People from '../src/screens/people';
import Data from '../src/screens/home';
//import 'isomorphic-fetch';

test('Api test case', async function (){
    global.fetch = jest.fn().mockImplementation(()=>{
        var p = new Promise((resolve, reject)=> {
            resolve({
                json: function() {
                    return {id :2}
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
    const tree = renderer.create(<People />).toJSON();
    expect(tree).toMatchSnapshot();
  });
