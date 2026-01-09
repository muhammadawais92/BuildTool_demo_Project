import { describe, it, expect } from 'vitest';

// Basic utility function tests
describe('Utility Functions', () => {
  it('should perform basic math operations', () => {
    expect(1 + 1).toBe(2);
    expect(2 * 3).toBe(6);
  });

  it('should handle string operations', () => {
    const testString = 'Hello World';
    expect(testString.toLowerCase()).toBe('hello world');
    expect(testString.length).toBe(11);
  });

  it('should handle array operations', () => {
    const testArray = [1, 2, 3, 4, 5];
    expect(testArray.length).toBe(5);
    expect(testArray.includes(3)).toBe(true);
    expect(testArray.filter(n => n > 3)).toEqual([4, 5]);
  });
});
