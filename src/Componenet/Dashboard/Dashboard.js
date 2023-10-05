import React, { useState } from 'react'
import { Link, Routes, Route, useRouteMatch } from 'react-router-dom';
import TaskList from './TaskList';
import EditTask from './EditTask';
import './dash.css'
function Dashboard() {
    // const { path, url } = useRouteMatch();
    const[Active,setActive]=useState('view')
    return (
   <>
   <div style={{display:"flex",width:"100%",gap:"30px"}}>
    <div style={{backgroundColor:"#263238",height:"100vh"}}>
        <div>
       <h2 style={{fontFamily:"Inter",fontSize:"25px",color:"White", marginLeft:"30px",marginRight:"30px"}}>Manage<b style={{color:"blue"}}>Task</b></h2>
        </div>
        <br />
        <div>
            <ul>
                <p className='link_text' onClick={(e) => setActive("view")}> View Task</p>
                <p className='link_text'  onClick={(e) => setActive("add")}>  Add Task</p>
            </ul>
        </div>
    </div>
    <div style={{width:"70%"}}>
    {Active ==="add" && <EditTask />}
    {Active ==="view" && <TaskList />}

    </div>
   </div>
   </>
    );
}

export default Dashboard