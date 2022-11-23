import "./action-bar.css";
import { useActions } from "../../hooks/useActions";

interface ActionBarProps {
  id: string;
}

export const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
  const { moveCell, deleteCell } = useActions();

  return (
    <div>
      <button
        className="button is-primary is-small"
        onClick={() => moveCell(id, "up")}
      >
        Up
      </button>
      <button
        className="button is-primary is-small"
        onClick={() => moveCell(id, "down")}
      >
        Down
      </button>
      <button
        className="button is-primary is-small"
        onClick={() => deleteCell(id)}
      >
        Delete
      </button>
    </div>
  );
};
