import { Task } from '../types/task';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface TaskCardProps {
  task: Task;
  onToggleCompleted: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onToggleCompleted, onDelete }) => {
  const router = useRouter();

  const handleTitleClick = () => {
    router.push(`/tasks/${task.id}/`);
  };

  return (
    <div
      className={`flex flex-col sm:flex-row justify-between p-4 mb-4 rounded-lg shadow-md ${
        task.completed ? 'bg-[#262626]' : 'bg-[#333333]'
      }`}
    >
      <div className="flex items-center mb-2 sm:mb-0">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleCompleted(task.id, task.completed)}
          id={`checkbox-${task.id}`}
          className="rounded-full border-2 border-gray-500 w-6 h-6 bg-white"
        />

        <span
          className={`cursor-pointer mx-3 ${task.completed ? 'line-through text-[#808080]' : ''}`}
          onClick={handleTitleClick}
        >
          {task.title}
        </span>
      </div>

      <button
        onClick={() => onDelete(task.id)}
        className="mt-2 sm:mt-0 0 sm:ml-4 flex items-center justify-center"
      >
        <Image src="/images/trash.svg" alt="delete" width={24} height={24} />
      </button>
    </div>
  );
};

export default TaskCard;
