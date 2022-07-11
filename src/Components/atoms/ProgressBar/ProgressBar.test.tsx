import { render, screen } from '@testing-library/react';
import ProgressBar from './ProgressBar';

test('Progress Bar Test', () => {
  render(<ProgressBar progress={20} />);
  const bar = screen.getAllByTestId('progressBar');
  expect(bar.length).toBe(2);
});