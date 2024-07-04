import { useSortable } from "@dnd-kit/sortable";
import TrashIcon from "../icons/Trash";
import { Column, Id } from "../types";

interface Props {
  column: Column;
  deleteColumn: (id: Id) => void;
}

function ColumnContainer(props: Props) {
  const { column, deleteColumn } = props;
const { setNodeRef, listeners, transition, transform, attributes} = useSortable({
  id: column.id,
  data: {
    type: 'Column',
    column
  }
});
  return (
    <div
      key={column.id}
      className="bg-columnBackgroundColor w-[350px] h-[500px] max-h-[500px] flex flex-col rounded-md">
      <div className="bg-mainBackgroundColor text-md h-[60px] cursor-grab p-3 rounded-md rounded-b-none border-4 flex justify-between">
        <div className="flex gap-2">
          <div className="flex justify-center items-center py-1 px-2 text-sm bg-columnBackgroundColor rounded-full">0</div>
          {column.title}
        </div>
        <button onClick={() => {deleteColumn(column.id)}} className="stroke-gray-500 hover:stroke-white hover:bg-columnBackgroundColor rounded px-1 py-2">
          <TrashIcon />
        </button>
      </div>
      <div className="flex flex-grow">Contents</div>
      <div className="flex">Footer</div>
    </div>
  );
}

export default ColumnContainer;
