# Task Manager Documentation Guide

This document provides information about the project's documentation, testing, and development practices.

## Documentation Overview

This project includes comprehensive documentation at multiple levels:

1. **Code Documentation**: JSDoc-style comments in TypeScript files
2. **API Reference**: Auto-generated TypeScript documentation
3. **User Tutorial**: Step-by-step guide for end users
4. **README**: Project overview and quick start guide

## Generating API Reference Documentation

The project uses [TypeDoc](https://typedoc.org/) to generate API documentation from TypeScript source code.

### Generate Documentation

```bash
npm run docs
```

This command:
- Reads TypeScript files from the `src/` directory
- Extracts JSDoc comments and type information
- Generates HTML documentation in `docs/api/`

### View Documentation

To generate and open documentation in your browser:

```bash
npm run docs:serve
```

This will:
1. Generate the documentation
2. Start a local HTTP server
3. Open the documentation in your default browser

### Documentation Structure

The generated documentation includes:

- **Modules**: All TypeScript modules with their exports
- **Classes**: Class definitions with methods and properties
- **Interfaces**: Type definitions and interfaces
- **Functions**: Standalone functions with parameters and return types
- **Type Aliases**: Custom type definitions

## Code Documentation Standards

### Module Documentation

Each module should have a header comment:

```typescript
/**
 * Module Name
 * 
 * Brief description of what this module does.
 * 
 * @module moduleName
 * @example
 * ```typescript
 * import { something } from './module';
 * something.doThing();
 * ```
 */
```

### Function Documentation

Functions should document parameters and return values:

```typescript
/**
 * Brief description of what the function does
 * 
 * @param {Type} paramName - Description of parameter
 * @returns {ReturnType} Description of return value
 * @example
 * functionName(value);
 */
function functionName(paramName: Type): ReturnType {
  // implementation
}
```

### Interface Documentation

Interfaces should document each property:

```typescript
/**
 * Description of the interface
 * 
 * @interface InterfaceName
 * @property {Type} propertyName - Description of property
 */
interface InterfaceName {
  propertyName: Type;
}
```

## Testing Documentation

### Test Structure

Tests are organized alongside the code they test:

```
src/
├── lib/
│   ├── __tests__/
│   │   └── logger.test.ts
│   └── logger.ts
└── components/
    ├── __tests__/
    │   └── TaskCard.test.tsx
    └── TaskCard.tsx
```

### Running Tests

```bash
# Run all tests once
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage

# Open interactive test UI
npm run test:ui
```

### Writing Tests

Tests use Vitest and React Testing Library:

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('ComponentName', () => {
  it('should render correctly', () => {
    render(<ComponentName />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });
});
```

## Logging Documentation

The application uses a custom logger with multiple levels:

### Log Levels

- **DEBUG**: Detailed information for debugging (dev only)
- **INFO**: General informational messages
- **WARN**: Warning messages for potential issues
- **ERROR**: Error messages for failures

### Usage Examples

```typescript
import { logger } from './lib/logger';

// Info logging
logger.info('User logged in', { userId: '123' });

// Error logging
logger.error('Failed to fetch data', { error: err.message });

// Debug logging (only in development)
logger.debug('Component state', { state: componentState });

// Warning logging
logger.warn('API rate limit approaching', { remaining: 10 });
```

### Log Format

Logs include:
- **Level**: DEBUG, INFO, WARN, or ERROR
- **Timestamp**: ISO 8601 format
- **Message**: Human-readable description
- **Data**: Optional structured data (JSON)

Example output:
```
[INFO] 2024-12-03T19:49:49.912Z User logged in | {"userId":"123"}
```

## Tutorial Documentation

A comprehensive tutorial is available at [docs/tutorials/tutorial.md](tutorials/tutorial.md).

The tutorial covers:
1. Getting started and installation
2. Setting up Supabase backend
3. Running the application
4. Using all features
5. Building for production
6. Running tests
7. Troubleshooting

## Documentation Files

| File | Purpose |
|------|---------|
| `README.md` | Project overview, quick start, build instructions |
| `LICENSE` | MIT License terms |
| `docs/tutorials/tutorial.md` | Step-by-step user guide |
| `docs/DOCUMENTATION.md` | This file - documentation guide |
| `docs/api/` | Generated TypeScript API reference |
| `BUILD_VERIFICATION.md` | Build verification and testing guide |

## Maintaining Documentation

### When to Update Documentation

Update documentation when:
- Adding new features or components
- Changing function signatures or interfaces
- Modifying build or test processes
- Fixing bugs that affect usage
- Adding new dependencies

### Documentation Checklist

When adding new code:

- [ ] Add JSDoc comments to functions and classes
- [ ] Document all parameters and return values
- [ ] Include usage examples where helpful
- [ ] Update README if adding new features
- [ ] Add tests for new functionality
- [ ] Regenerate API documentation
- [ ] Update tutorial if user-facing changes

## License

This project is licensed under the MIT License. See [LICENSE](../LICENSE) for details.

## Additional Resources

- [TypeDoc Documentation](https://typedoc.org/)
- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/react)
- [JSDoc Reference](https://jsdoc.app/)
