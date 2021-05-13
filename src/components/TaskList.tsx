import * as React from 'react';
import { List } from './List';
import { TaskListItem } from './TaskListItem';
import { filterTasksByStatus } from './utils/filterTasksByStatus';
import { useTasks } from '../hooks/useTasks';
import { useTasksFilter } from '../hooks/useTasksFilter';
import { Task } from '../types';

type Props = {};

export function TaskList(props: Props) {
  const { tasks } = useTasks();
  const { filter } = useTasksFilter();

  // TODO: memoize
  const filteredTasks = filterTasksByStatus(tasks, filter.status);

  return (
    <List>
      {filteredTasks.map((task: Task) => (
        <TaskListItem key={task.id} task={task} />
      ))}
    </List>
  );
}
