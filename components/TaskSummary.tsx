import { Task } from '../types/task';

interface TaskSummaryProps {
  tasks: Task[];
}

const TaskSummary: React.FC<TaskSummaryProps> = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <div className="mb-4 flex flex-col sm:flex-row items-center justify-between text-lg sm:text-xl">
      <div className="flex items-center space-x-2">
        <p className="text-sm font-bold text-[#4EA8DE]">Tasks:</p>
        <span className="bg-[#333333] text-white rounded-full px-3 py-1 text-sm">{totalTasks}</span>
      </div>
      <div className="flex items-center space-x-2 mt-2 sm:mt-0">
        <p className="text-sm font-bold text-[#8284FA]">Completed:</p>
        <span className="bg-[#333333] text-white rounded-full px-3 py-1 text-sm">{completedTasks} of {totalTasks}</span>
      </div>
    </div>
  );
};

export default TaskSummary;
