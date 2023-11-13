import {useState,useRef} from "react";
import Modal from "./Modal";

const NewTask=({onAdd})=>{
    const [value, Setvalue] = useState("");
    const dialog =useRef(); 

    const changeHandler = (event) => {
      Setvalue(event.target.value);
    };
    function handleClick (){
        if(value.trim()===''){
          dialog.current.open();
          return;
        }
        onAdd(value);
        Setvalue('');
    }

    return(
        <>
        <Modal ref={dialog} buttonCaption="Okay">
        <h2 className="font-bold text-xl text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-2">
          ...looks like you forgot to enter a value .
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value{" "}
        </p>
        </Modal>

        <div className="flex items-center gap-4">
        <input
          className="'w-64 px-2 py-1 rounded-sm bg-stone-200"
          value={value}
          type="text"
          onChange={changeHandler}
        ></input>
        <button
          className="text-stone-700 hover:text-stone-950"
            onClick={handleClick}
        >
          Add Task
        </button>
      </div>
      </>
    );
}
export default NewTask;