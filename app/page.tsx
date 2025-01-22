'use client';

import { useState, useEffect } from 'react';
import { Task } from '../types/task'; 
import TaskCard from '../components/TaskCard'; 
import TaskSummary from '../components/TaskSummary'; 
import Link from 'next/link'; 
import Image from 'next/image';
import axiosInstance from '@/utils/axiosInstance';

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]); 
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axiosInstance.get('/tasks'); 
        setTasks(response.data); 
      } catch (error) {
        console.error('Error fetching tasks:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []); 

  const handleToggleCompleted = async (id: number, completed: boolean) => {
    try {
      await axiosInstance.put(`/tasks/${id}/completed`, { completed: !completed });
      const updatedTasks = tasks.map(task =>
        task.id === id ? { ...task, completed: !completed } : task
      );
      setTasks(updatedTasks);
    } catch (error) {
      console.error('error updating task:', error);
    }
  };

  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm('Are you sure?');
    if (confirmDelete) {
      try {
        await axiosInstance.delete(`/tasks/${id}`);
        setTasks(tasks.filter(task => task.id !== id));
      } catch (error) {
        console.error('error deleting task:', error);
      }
    }
  };

  return (
    <div className="container mx-auto w-1/2 sm:px-8 py-3">
  {loading ? (
    <div className="text-center text-xl">Loading tasks...</div>
  ) : (
    <>
    <Link href="/tasks/create">
        <button className="mb-4 w-full flex items-center justify-center py-4 font-bold bg-[#1E6F9F] text-white rounded-lg">
          <span className='mx-2'>Create Task</span> 
          <Image src={"/images/Layer 2.svg"} width={15.97} height={15.97}  alt="task icon" />
        </button>
      </Link>
      <TaskSummary tasks={tasks} />
      <div className="space-y-4">
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            onToggleCompleted={handleToggleCompleted}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </>
  )}
</div>

  );
};

export default Home;
