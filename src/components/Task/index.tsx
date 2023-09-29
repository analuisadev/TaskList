import { Text, TouchableOpacity, View } from "react-native";

import styles from './styles';

interface TaskProps {
    task: {
        text: string;
        completed: boolean;
    };
    onComplete: () => void;
    onDelete: () => void;
}

export default function Task({ task, onComplete, onDelete }: TaskProps) {
    return <View style={styles.taskContainer}>
        <TouchableOpacity onPress={onComplete} disabled={task.completed}>
            <Text style={{ textDecorationLine: task.completed ? 'line-through' : 'none' }}>
                {task.text}
            </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete}>
            <Text>Excluir</Text>
        </TouchableOpacity>
        {task.completed && <Text>Concluído</Text>}
    </View>
}
