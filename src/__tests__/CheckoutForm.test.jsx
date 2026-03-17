import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CheckoutForm from '../components/CheckoutForm';

describe('CheckoutForm Component', () => {
    it('allows typing in inputs and handling form submission', async () => {
        const mockOnCheckout = jest.fn();
        const user = userEvent.setup();
        
        // Pass a mock cart array with at least 1 item
        render(<CheckoutForm cartItems={[{ id: 1, name: 'Item', price: 10 }]} onCheckout={mockOnCheckout} />);

        const nameInput = screen.getByTestId('name-input');
        const addressInput = screen.getByPlaceholderText(/shipping address/i);
        const submitButton = screen.getByRole('button', { name: /place order/i });

        // Asserting form is incomplete so button might be disabled (if handled so)
        expect(submitButton).toBeDisabled();

        // Testing user interaction: Typing into inputs
        await user.type(nameInput, 'John Doe');
        await user.type(addressInput, '123 Test Street');

        // Check if values updated correctly
        expect(nameInput).toHaveValue('John Doe');
        expect(addressInput).toHaveValue('123 Test Street');
        expect(submitButton).not.toBeDisabled();

        // Testing user interaction: Form submission
        await user.click(submitButton);

        // Assert that the success message appears
        expect(screen.getByRole('alert')).toHaveTextContent(/Order Placed Successfully!/i);
        expect(mockOnCheckout).toHaveBeenCalledTimes(1);
    });
});
