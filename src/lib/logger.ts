/**
 * Logger Utility Module
 * 
 * Provides a simple logging utility with different log levels (DEBUG, INFO, WARN, ERROR).
 * Debug logs are only shown in development mode.
 * 
 * @module logger
 * @example
 * ```typescript
 * import { logger } from './lib/logger';
 * 
 * logger.info('User logged in', { userId: '123' });
 * logger.error('Failed to fetch data', { error: err });
 * logger.debug('Debug information', { data: someData });
 * ```
 */

/**
 * Available log levels
 * @typedef {'DEBUG' | 'INFO' | 'WARN' | 'ERROR'} LogLevel
 */
type LogLevel = 'DEBUG' | 'INFO' | 'WARN' | 'ERROR';

/**
 * Logger class for structured logging with different severity levels
 * 
 * @class Logger
 */
class Logger {
  /**
   * Flag indicating if the application is running in development mode
   * @private
   */
  private isDevelopment = import.meta.env.DEV;

  /**
   * Internal method to format and output log messages
   * 
   * @private
   * @param {LogLevel} level - The severity level of the log
   * @param {string} message - The log message
   * @param {unknown} [data] - Optional additional data to log
   */
  private log(level: LogLevel, message: string, data?: unknown): void {
    const timestamp = new Date().toISOString();
    const logData = data ? ` | ${JSON.stringify(data)}` : '';

    switch (level) {
      case 'DEBUG':
        if (this.isDevelopment) {
          console.warn(`[DEBUG] ${timestamp} ${message}${logData}`);
        }
        break;
      case 'INFO':
        console.warn(`[INFO] ${timestamp} ${message}${logData}`);
        break;
      case 'WARN':
        console.warn(`[WARN] ${timestamp} ${message}${logData}`);
        break;
      case 'ERROR':
        console.error(`[ERROR] ${timestamp} ${message}${logData}`);
        break;
    }
  }

  /**
   * Log a debug message (only in development mode)
   * 
   * @param {string} message - The debug message
   * @param {unknown} [data] - Optional additional data
   * @example
   * logger.debug('Component rendered', { props: componentProps });
   */
  debug(message: string, data?: unknown): void {
    this.log('DEBUG', message, data);
  }

  /**
   * Log an informational message
   * 
   * @param {string} message - The info message
   * @param {unknown} [data] - Optional additional data
   * @example
   * logger.info('Task created', { taskId: '123', title: 'New Task' });
   */
  info(message: string, data?: unknown): void {
    this.log('INFO', message, data);
  }

  /**
   * Log a warning message
   * 
   * @param {string} message - The warning message
   * @param {unknown} [data] - Optional additional data
   * @example
   * logger.warn('API rate limit approaching', { remaining: 10 });
   */
  warn(message: string, data?: unknown): void {
    this.log('WARN', message, data);
  }

  /**
   * Log an error message
   * 
   * @param {string} message - The error message
   * @param {unknown} [data] - Optional additional data
   * @example
   * logger.error('Failed to save task', { error: err.message });
   */
  error(message: string, data?: unknown): void {
    this.log('ERROR', message, data);
  }
}

/**
 * Singleton logger instance
 * @constant
 * @type {Logger}
 */
export const logger = new Logger();

