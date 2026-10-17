import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('adds a student, displays their details and resets the form', () => {
  render(<App />);
  expect(screen.getByText(/101489064.*Phillip Onofua/)).toBeInTheDocument();
  expect(screen.getByText('No students added yet')).toBeInTheDocument();

  fireEvent.change(screen.getByLabelText('Name:'), { target: { value: 'Test Student' } });
  fireEvent.change(screen.getByLabelText('Age:'), { target: { value: '20' } });
  fireEvent.change(screen.getByLabelText('Major:'), { target: { value: 'Computer Programming' } });
  fireEvent.click(screen.getByRole('button', { name: 'Add Student' }));

  expect(screen.getByRole('heading', { name: 'Test Student' })).toBeInTheDocument();
  expect(screen.getByText('Age: 20')).toBeInTheDocument();
  expect(screen.getByText('Major: Computer Programming')).toBeInTheDocument();
  expect(screen.queryByText('No students added yet')).not.toBeInTheDocument();
  expect(screen.getByLabelText('Name:')).toHaveValue('');
  expect(screen.getByLabelText('Age:')).toHaveValue(null);
  expect(screen.getByLabelText('Major:')).toHaveValue('');
});
