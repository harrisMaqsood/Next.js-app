'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import axiosInstance from '@/utils/axiosInstance';
import TaskForm from '../../../components/TaskForm';

const EditTask: React.FC = () => {
  const { id } = useParams();
  const [task, setTask] = useState<{ title: string; color: string }>({ title: '', color: 'red' });
  const router = useRouter();

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axiosInstance.get(`/tasks/${id}`); 
        setTask(response.data);
      } catch (error) {
        console.error("error fetching task:", error);
      }
    };
    fetchTask();
  }, [id]);

  const handleSubmit = async (title: string, color: string) => {
    try {
      await axiosInstance.put(`/tasks/${id}/title`, { 
        title,
        color,
      });
      router.push('/');
    } catch (error) {
      console.error("error updating task:", error);
    }
  };
  return (
    <div className="container w-1/2 mx-auto p-4">
      <TaskForm existingTask={task} onSubmit={handleSubmit} />
    </div>
  );
};

export default EditTask;
