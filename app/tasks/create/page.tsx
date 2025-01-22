'use client';

import { useRouter } from 'next/navigation';
import axiosInstance from '@/utils/axiosInstance';
import TaskForm from '../../../components/TaskForm';

const CreateTask: React.FC = () => {
  const router = useRouter();

  const handleSubmit = async (title: string, color: string) => {
    const newTask = { title, color };
    try {
      await axiosInstance.post('/tasks', newTask); 
      router.push('/');
    } catch (error) {
      console.error('error creating task:', error);
    }
  };

  return (
    <div className="container w-1/2 mx-auto p-4">
      <TaskForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateTask;
