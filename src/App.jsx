import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import { useEffect, useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";
import { SendData,fetchData} from "./utils/http";

let initial=true;
function App() {
  const [projectState, SetprojectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });
 //get data
 useEffect(()=>{
    const getdata=async ()=>{
     const data= await fetchData();
    if(data){
       SetprojectState({
        selectedProjectId: undefined,
        projects: data.projects,
        tasks: data.task || []
       })
    }
  }
    getdata();
 },[])

  //post data
  useEffect(()=>{
    if(initial){
      initial= false;
      return;
    }  
    SendData(projectState);
  },[projectState])


  const handleAddTask = (text) => {
    SetprojectState((prevState) => {
      const newTask = {
        text:text,
        projectId:prevState.selectedProjectId,
        id: Math.random(),
      };

      return {
        ...prevState,
        tasks:[newTask,...prevState.tasks]
      };
    });
  };

  const handledeleteTask = (id) => {
    const newTask=projectState.tasks.filter((task)=>task.id!==id);
    SetprojectState((prevState) => {
      return {
        ...prevState,
        tasks:newTask
      };
    }); 
  };

  const addProjectHandler = () => {
    SetprojectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  const newProjectHandler = (obj) => {
    SetprojectState((prevState) => {
      const newProject = {
        ...obj,
        id: Math.random(),
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  const cancelHandler = () => {
    SetprojectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };

  const handleSelectedProject = (id) => {
    SetprojectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  };

  const deleteProjectHandler = (id) => {
    const newproject = projectState.projects.filter(
      (project) => project.id !== id
    );
    SetprojectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: newproject,
      };
    });
  };

  const project = projectState.projects.find(
    (project) => projectState.selectedProjectId === project.id
  );

  let content = (
    <SelectedProject
      project={project}
      onDelete={deleteProjectHandler}
      onAddTask={handleAddTask}
      onDeleteTask={handledeleteTask}
      tasks={projectState.tasks}
    />
  );
  
  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject addProject={newProjectHandler} onCancel={cancelHandler} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onClick={addProjectHandler} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        projects={projectState.projects}
        onClick={addProjectHandler}
        selectedProject={handleSelectedProject}
        selectedid={projectState.selectedProjectId}
      ></Sidebar>
      {content}
    </main>
  );
}

export default App;
