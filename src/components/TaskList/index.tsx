import React, { useState } from 'react';
import { Button, SafeAreaView, ScrollView, StatusBar, Text, TextInput } from 'react-native';

import styles from './styles';
import Task from '../Task';

interface TaskProps {
    text: string;
    completed: boolean;
}

export default function TaskList() {
    const [tasks, setTasks] = useState<TaskProps[]>([]);
    const [newTask, setNewTask] = useState<string>('');

    const addTask = () => {
        if (newTask) {
            setTasks([...tasks, { text: newTask, completed: false }]);
            setNewTask('');
        }
    };

    const completeTask = (index: number) => {
        const updatedTasks = [...tasks];
        if (!updatedTasks[index].completed) {
            updatedTasks[index].completed = true;
            setTasks(updatedTasks);
        }
    };

    const deleteTask = (index: number) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    return <SafeAreaView style={styles.container}>
        <StatusBar />
        <Text style={styles.title}>Lista de Tarefas</Text>
        <TextInput
            style={styles.input}
            placeholder='Adicione uma Tarefa'
            value={newTask}
            onChangeText={(text) => setNewTask(text)}
        />
        <Button title='Adicionar Tarefa' onPress={addTask} />

        <ScrollView style={styles.taskList}>
            {tasks.map((task, index) => (
                <Task
                    key={index}
                    task={task}
                    onComplete={() => completeTask(index)}
                    onDelete={() => deleteTask(index)}
                />
            ))}
        </ScrollView>
    </SafeAreaView>
}