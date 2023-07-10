import '@testing-library/jest-dom'
import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import Component from '../Component';

// tests if default value is 'blank'
test('Options renders with default value "like"', () => {
    render(<Component />);

    //first option of select is like
    const selectElement = screen.getByTestId('select');
    expect(selectElement).toHaveValue('like');

    // once we select different options, the value of the selector should change
    fireEvent.change(selectElement, {target: {value: "love"}});
    expect(selectElement).toHaveValue('love');
});

test("Comment renders correctly", () => {
    render(<Component />);
    
    const textElement = screen.getByRole("paragraph");
    const selectElement = screen.getByTestId('select');

    // default comment value should be "blank"
    expect(textElement).toHaveTextContent('You blank it');

    // go through each option and make sure comment updates
    fireEvent.change(selectElement, {target: {value:'like'}});

    // corresponding comment should be updated
    expect(textElement).toHaveTextContent('You like it');

    // go through each option and make sure comment updqates
    fireEvent.change(selectElement, {target: {value:'love'}});

    // corresponding comment should be updated
    expect(textElement).toHaveTextContent('You love it');


})





















