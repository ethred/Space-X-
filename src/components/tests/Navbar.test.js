// Navbar.test.js
import React from 'react';
import renderer from 'react-test-renderer'; // Import react-test-renderer
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter for routing
import Navbar from '../Navbar'; // Import your Navbar component

test('Navbar snapshot test', () => {
  const tree = renderer
    .create(
      <Router>
        <Navbar />
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
