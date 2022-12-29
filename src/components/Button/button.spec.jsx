import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '.';

describe('<Button />', () => {
    it('should render button with the text', () => {
        render(<Button text="load more"/>);

        const button = screen.getByRole('button', { name: /load more/i });
        expect(button).toBeInTheDocument();
    });

    it('should call function on button click', () => {
        const fn = jest.fn();
        render(<Button text="load more" onClick={fn}/>);
        
        const button = screen.getByRole('button', { name: /load more/i });
        fireEvent.click(button);
        expect(fn).toHaveBeenCalledTimes(1);
    });

    it('should be disabled when disabled is true', () => {
        render(<Button text="load more" disabled={true}/>);
    
        const button = screen.getByRole('button', { name: /load more/i });
        expect(button).toBeDisabled();
    });
});