import Notecard from "./Notecard";
import "./Grid.css";

const Grid: React.FC = () => {
  const rows = 4; //CHANGE THIS
  const columns = 2; //UNSURE?

  const renderNotecards = () => {
    const notecards = [];
    for (let i = 0; i < rows * columns; i++) {
      notecards.push(<Notecard key={i} />);
    }
    return notecards;
  };

  return (
    <div className="grid">
      {renderNotecards()}
    </div>
  );
};

export default Grid;