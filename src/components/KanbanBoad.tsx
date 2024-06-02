import { useState } from "react";
import PlusIcon from "../icons/PlusIcon";
import { Column } from "../types";

function KanbanBoad() {
  const [columns, setColumns] = useState<Column[]>([]);
 
  const createNewColumn = () => {
    const columndToAdd: Column = {
      id: generateId(),
      title: `Column ${columns.length + 1}`,
    };
    setColumns([...columns, columndToAdd]);
  };
 
  function generateId() {
    return Math.floor(Math.random() * 10001);
  }
  console.log(columns);
  
  return (
    <div className="mx-auto flex min-h-screen w-full items-center overflow-x-auto overflow-y-hidden px-[40px]">
      <div className="mx-auto">
        <button
          onClick={createNewColumn}
          className="flex gap-2 p-4 ring-rose-500 hover:ring-2 h-[50px] w-[350px] min-w-[350px] cursor-pointer rounded-lg bg-mainBackgroundColor border-2 border-columnBackgroundColor"
        >
          <PlusIcon />
          Add Column
        </button>
      </div>
    </div>
  ); 
}
export default KanbanBoad;