import { Column } from "../types";

interface Props {
  column: Column;
}

function ColumnContainer(props: Props){
  const {column} = props;
  return (
    <div key={column.id}>
      {column.title}
    </div>
  )
}

export default ColumnContainer
