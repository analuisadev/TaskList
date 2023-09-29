import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface TaskProps {
    task: {
        text: string;
        completed: boolean;
    };
    onComplete: () => void;
    onDelete: () => void;
}

export default function Task({ task, onComplete, onDelete }: TaskProps) {
    return <View style={taskStyles.taskContainer}>
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

const taskStyles = StyleSheet.create({
    taskContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
    },
});
