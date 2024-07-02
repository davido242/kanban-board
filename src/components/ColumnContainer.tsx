import { Column } from "../types";

interface Props {
  column: Column;
}

function ColumnContainer(props: Props) {
  const { column } = props;
  return (
    <div
      key={column.id}
      className="bg-columnBackgroundColor w-[350px] h-[500px] max-h-[500px] flex flex-col rounded-md">
      <div className="bg-mainBackgroundColor text-md h-[60px] cursor-grab rounded-md rounded-b-none border-4">
        <div className="flex gap-2">
          <div className="flex justify-center items-center py-1 px-2 text-sm bg-columnBackgroundColor rounded-full">0</div>
          {column.title}
        </div>
      </div>
      <div className="flex flex-grow">Contents</div>
      <div className="flex">Footer</div>
    </div>
  );
}

export default ColumnContainer;
