import { useState } from "react";
import PlusIcon from "../icons/PlusIcon";
import { Column, Id } from "../types";
import ColumnContainer from "./ColumnContainer";

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
  
  const deleteColumn = (id: Id) => {
    const filteredColumn = columns.filter(column => column.id !== id);
    setColumns(filteredColumn);
  }
  return (
    <div className="mx-auto flex min-h-screen w-full items-center overflow-x-auto overflow-y-hidden px-[40px]">
      <div className="flex mx-auto gap-4">
        {/* show our new columns */}
        <div className="flex gap-4">
          {columns.map(col => 
          <ColumnContainer key={col.id} column={col} deleteColumn={deleteColumn} />
          )}
        </div>        
        <button
          onClick={createNewColumn}
          className="flex gap-2 p-4 ring-borderRose hover:ring-2 h-[50px] w-[350px] min-w-[350px] cursor-pointer rounded-lg bg-mainBackgroundColor border-2 border-columnBackgroundColor"
        >
          <PlusIcon />
          Add Column
        </button>
      </div>
    </div>
  ); 
}
export default KanbanBoad;