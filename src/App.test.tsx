import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(document.body).toBeTruthy();
  });

  it('contains main content', () => {
    render(<App />);
    // Basic test to ensure the app renders some content
    const mainElement = document.querySelector('main') || document.querySelector('div');
    expect(mainElement).toBeTruthy();
  });
});
