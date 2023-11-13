import NewTask from "./NewTask";


const Tasks = ({tasks,onAdd,onDelete,projectid}) => {
   const newtasks= tasks.filter((task)=>task.projectId===projectid);
    return (
    <div>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd}></NewTask>
      
      {newtasks.length===0 && (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
      )} 
    
    {newtasks.length > 0 && 
      <ul className="p-4 mt-8 rounded-mg bg-stone-100">
        {newtasks.map((task) => {
          return <li key={task.id} className="flex justify-between my-4">
          <span>{task.text}</span>
          <button className="text-stone-700 hover:text-red-500" onClick={ ()=>{return onDelete(task.id)}}>Clear</button>
          </li>;
        })}
      </ul>
    }
    </div>
  );
};
export default Tasks;
