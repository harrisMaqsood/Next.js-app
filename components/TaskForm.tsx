import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface TaskFormProps {
  existingTask?: { title: string; color: string };
  onSubmit: (title: string, color: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ existingTask, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('red');

  useEffect(() => {
    if (existingTask) {
      setTitle(existingTask.title);
      setColor(existingTask.color);
    }
  }, [existingTask]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(title, color);
  };

  const colorOptions = [
    'red', 'blue', 'green', 'yellow', 'purple', 
    'orange', 'pink', 'cyan', 'teal'
  ];

  return (
    <div className="space-y-4 mx-auto p-4">
      <Link href="/">
        <Image src="/images/Icon.svg" alt="back" width={14} height={14} />
      </Link>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-[#4EA8DE]">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-4 w-full border-[#262626] rounded-lg bg-[#333333] text-[#F2F2F2] placeholder-gray-500"
            placeholder="Ex. Brush your teeth"
            required
          />
        </div>
        
        <div>
          <label htmlFor="color" className="block text-sm font-medium">Color</label>
          <div className="mt-2 flex space-x-2">
            {colorOptions.map((option) => (
              <div
                key={option}
                className={`w-8 h-8 rounded-full cursor-pointer border-2 ${color === option ? 'border-black' : 'border-transparent'}`}
                style={{ backgroundColor: option }}
                onClick={() => setColor(option)}
              ></div>
            ))}
          </div>
          <span className="block mt-1 text-sm text-[#F2F2F2]">{color.charAt(0).toUpperCase() + color.slice(1)}</span>
        </div>
        
        <button 
          type="submit" 
          className="mb-4 w-full flex items-center justify-center py-4 font-bold bg-[#1E6F9F] text-white rounded-lg"
        >
          <span className="mx-2">Add Task</span> 
          <Image src="/images/Layer 2.svg" width={15.97} height={15.97} alt="task icon" />
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
