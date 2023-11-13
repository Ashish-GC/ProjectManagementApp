import React, { useRef } from "react";
import Input from "./Input";
import Button from "./Button";
import Modal from "./Modal";

const NewProject = (props) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const dialog = useRef();

  const saveHandler = () => {
    if (
      title.current.value.trim() === "" ||
      description.current.value.trim() === "" ||
      dueDate.current.value.trim() === ""
    ) {
      dialog.current.open();
      return;
    }
    const obj = {
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
    };
    props.addProject(obj);
  };

  const cancelHandler=()=>{
       props.onCancel();
  }

  return (
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

      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-6">
          <li>
            <button className="text-stone-800 hover:text-stone-950" onClick={cancelHandler}>
              Cancel
            </button>
          </li>
          <li>
            <Button onClick={saveHandler}>Save</Button>
          </li>
        </menu>
        <div>
          <Input ref={title} type="text" label="TITLE"></Input>
          <Input
            ref={description}
            type="textarea"
            label="DESCRIPTION"
            textarea
          ></Input>
          <Input ref={dueDate} type="date" label="DUE DATE"></Input>
        </div>
      </div>
    </>
  );
};
export default NewProject;
