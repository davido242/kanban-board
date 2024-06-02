import PlusIcon from "../icons/PlusIcon";

function KanbanBoad() {
  
  return (
    <div className="mx-auto flex min-h-screen w-full items-center overflow-x-auto overflow-y-hidden px-[40px]">
      <div className="mx-auto">
      <button className="flex gap-2 p-4 ring-rose-500 hover:ring-2 h-[50px] w-[350px] min-w-[350px] cursor-pointer rounded-lg bg-mainBackgroundColor border-2 border-columnBackgroundColor">
        <PlusIcon />
        Add Column
      </button>
      </div>
    </div>
  );
}
export default KanbanBoad;
