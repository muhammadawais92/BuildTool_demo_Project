import { describe, it, expect, vi, beforeEach } from 'vitest';
import { logger } from '../logger';

describe('Logger', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should log info messages', () => {
    const consoleSpy = vi.spyOn(console, 'warn');
    logger.info('Test message');
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('should log error messages', () => {
    const consoleSpy = vi.spyOn(console, 'error');
    logger.error('Error message');
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('should log with data object', () => {
    const consoleSpy = vi.spyOn(console, 'warn');
    logger.info('Test message', { key: 'value' });
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('should log warning messages', () => {
    const consoleSpy = vi.spyOn(console, 'warn');
    logger.warn('Warning message');
    expect(consoleSpy).toHaveBeenCalled();
  });
});
