import React,{useEffect, useState} from 'react';
import Axios from 'axios'
const TaskList = () => {
      // Sample initial tasks
  const [tasks, setTasks] = useState([
    { id: 1, task: 'Task 1', description: 'Description 1', status: 'Incomplete' },
    { id: 2, task: 'Task 2', description: 'Description 2', status: 'Incomplete' },
    // Add more tasks as needed
  ]);
  const[data,setdata]=useState([])
  const[count,setcount]=useState(0)
useEffect(()=>{
    Axios.get(`http://localhost:8080/getTask`).then((response)=>{
        console.log(response.data)
        setdata(response.data)
      }).catch((err)=>{
        console.log(err);
      })
},[count])
  const handleCompleteClick = (title) => {
    // Update the status of the task to 'Complete'
    Axios.post(`http://localhost:8080/complete`,{title}).then((response)=>{
        console.log(response.data)
       // setdata(response.data)

      }).catch((err)=>{
        console.log(err);
      })
      setTimeout(() => {
        window.location.reload();

      }, 1000);

  };

  const handleDeleteClick = (title) => {
    // Remove the task with the specified ID from the tasks array
    Axios.post(`http://localhost:8080/delete`,{title}).then((response)=>{
        console.log(response.data)
       // setdata(response.data)

      }).catch((err)=>{
        console.log(err);
      })
      setTimeout(() => {
        window.location.reload();

      }, 1000);
  };
  return (

    <div style={{width:"100%",display:"flex",justifyContent:"center"}}>

    <table>
    <thead>
      <tr>
        <th>Task</th>
        <th>Description</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {data.map((task) => (
        <tr key={task.id}>
          <td>{task.title}</td>
          <td style={{maxWidth:"400px"}}>{task.description}</td>
          <td>{task.status}</td>
          <td>
            {
                (task.status=="Completed")?(''):(  <button onClick={() => handleCompleteClick(task.title)}>Mark Complete</button>
                )
            }
            <button style={{backgroundColor:"red"}} onClick={() => handleDeleteClick(task.title)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  </div>

  );
};

export default TaskList;
