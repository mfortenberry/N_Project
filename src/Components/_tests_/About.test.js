import { render, screen } from '@testing-library/react';
import About from '../Components/About';

test('renders about', () => {
  render(<About />);
  const linkElement = screen.getByTestId('about');
  expect(linkElement).toBeInTheDocument();
});
