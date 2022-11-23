import { Cell } from "../../store";
import { CodeCell } from "../CodeCell";
import { TextEditor } from "../TextEditor";

interface CellListItemProps {
  cell: Cell;
}

export const CellListItem: React.FC<CellListItemProps> = ({ cell }) => {
  let child: JSX.Element;
  if (cell.type === "code") child = <CodeCell />;
  else child = <TextEditor />;

  return <div>{child}</div>;
};
