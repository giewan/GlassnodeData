// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders GlassnodeData title', () => {
    render(<App />);
    const titleElement = screen.getByText(/GlassnodeData/i);
    expect(titleElement).toBeInTheDocument();
});
