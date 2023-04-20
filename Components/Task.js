import { StyleSheet, Text, View } from "react-native";
import Button from "./Button";
import { useContext, useState } from "react";
import Input from "./Input";
import { funtionsContext } from "../Context/funtionsContext";


export default function Task ({title, done, id}) {
    const { deleteTask , editabledTask , setEditabledTask, editTask , completeTask} = useContext(funtionsContext);
    const [editMode,setEditMode] = useState(false)
    
    return (
      <View style={styles.taskContainer}>
        {editMode ? <Input setTask={setEditabledTask} task={editabledTask} createTask={()=>{editTask(id)
        setEditMode(!editMode)}} /> : <Text>{title}</Text>}
        <View style={styles.buttons}>

        <Button onPress={()=>completeTask(id)} label={done ? 'o' : 'x'}/>
        {editMode ? <Button onPress={()=>setEditMode(!editMode)} label={'Cancel'}/> : ''}
        <Button onPress={()=>deleteTask(id)} label={'Delete'}/>
        <Button onPress={()=>{setEditMode(!editMode)
        setEditabledTask(title)}} label={'Edit'}/>
        </View>
      </View>
    )
}
const styles = StyleSheet.create({
    taskContainer:{
        flexDirection:'column',
        backgroundColor: '#ccc',
        gap: 5,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:140,
        marginVertical: 10,
        borderRadius: 15
    },
    buttons:{
        flexDirection: 'row',
        width:'100%',
        height:'auto',
        justifyContent:'center',
        alignItems:'center',

    }
})