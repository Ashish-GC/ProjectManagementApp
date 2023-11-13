import React from "react";
import Button from "./Button";

const Sidebar = (props) => {
  const addProjectHandler = () => {
    props.onClick();
  };

  return (
    <aside className="bg-stone-900 w-1/3 px-8 py-16 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl">Your project</h2>
      <div>
        <Button onClick={addProjectHandler}>+Add Project</Button>
      </div>
      <ul className="mt-8">
        {props.projects.map((project) => {
          
          let classes="w-full text-left px-2 py-1 rounded-sm my-1  hover:text-stone-200 hover:bg-stone-800";
            if(props.selectedid===project.id){
              classes+=" text-stone-200 bg-stone-800"
            }else{
              classes+=" text-stone-400"
            }

          return (
            <li key={project.id}>
              <button className={classes}
                 onClick={
                  ()=>{
                    return props.selectedProject(project.id);
                  }
                 }
                 
                 >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
export default Sidebar;
