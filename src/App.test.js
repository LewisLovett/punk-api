import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";
import { act } from 'react-dom/test-utils';


it('renders title', () => {
  render(<App />);
  const title = screen.getByText(/punk beer search/i);
  expect(title).toBeInTheDocument();
});

it('renders acidic filters', () => {
  render(<App />);
  const filter = screen.queryByText(/acidity/i)
  expect(filter).toBeTruthy();
});

it('Search Filter functions', async () => {
  render(<App />);
    await waitFor(() => {
      expect(screen.getByText(/Pilsen Lager/i)).toBeTruthy();
    })
    act(() => {
      const navInput = screen.getByRole('textbox');
    userEvent.type(navInput, 'lager');
    });

    const buzzBeer = screen.queryByText(/buzz/i)
    expect(buzzBeer).toBeFalsy();
    
});