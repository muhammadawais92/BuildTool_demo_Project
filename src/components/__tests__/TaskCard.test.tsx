import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import TaskCard from '../TaskCard';
import { Task } from '../../lib/supabase';

describe('TaskCard', () => {
  const mockTask: Task = {
    id: '1',
    title: 'Test Task',
    description: 'Test Description',
    status: 'pending',
    priority: 'medium',
    due_date: '2024-12-31',
    created_at: '2024-01-01',
    updated_at: '2024-01-01',
    user_id: 'user-1',
  };

  const mockHandlers = {
    onStatusChange: vi.fn(),
    onDelete: vi.fn(),
    onEdit: vi.fn(),
  };

  it('should render task title', () => {
    render(<TaskCard task={mockTask} {...mockHandlers} />);
    expect(screen.getByText('Test Task')).toBeInTheDocument();
  });

  it('should render task description', () => {
    render(<TaskCard task={mockTask} {...mockHandlers} />);
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('should display priority badge', () => {
    render(<TaskCard task={mockTask} {...mockHandlers} />);
    expect(screen.getByText('medium')).toBeInTheDocument();
  });

  it('should render without description', () => {
    const taskWithoutDesc = { ...mockTask, description: '' };
    render(<TaskCard task={taskWithoutDesc} {...mockHandlers} />);
    expect(screen.getByText('Test Task')).toBeInTheDocument();
  });
});
