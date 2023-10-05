import React,{useState} from 'react';
import Axios from 'axios'
const EditTask = () => {
    const [newTask, setNewTask] = useState({
        title: '',
        description: '',
        status: 'yet to start',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setNewTask((prevTask) => ({
          ...prevTask,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Add the new task to the list (you can replace this with your state management logic)
        console.log('New Task:', newTask);
        Axios.post(`http://localhost:8080/addtask`,newTask).then((response)=>{
            console.log(response.data)
            setNewTask({
                title: '',
                description: '',
                status: 'yet to start',
              });
          }).catch((err)=>{
            console.log(err);
          })
        // Reset the form fields
       
      };
  return (
    <div>
     <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={newTask.title}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          name="description"
          value={newTask.description}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Status:
        <select name="status" value={newTask.status} onChange={handleChange}>
          <option value="Incomplete">Yet to start</option>
          <option value="Complete">Progress</option>
        </select>
      </label>
      <br />
      <button type="submit">Add Task</button>
    </form>
    </div>
  );
};

export default EditTask;
