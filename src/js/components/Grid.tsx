import Notecard from "./Notecard";
import "./Grid.css";

const Grid: React.FC = () => {
  const messages = [
    "Hey",
    "Wassup",
    "Hello",
    "Happy birthday Jeff! Have a good birthday!"
  ]; // Example messages

  const colors = ["blue", "pink", "yellow"]; // Choose colors you want idk

  const renderNotecards = () => {
    return messages.map((message, index) => {
      const color = colors[index % colors.length]; // Alternate colors
      return (
        <div key={index} className="wrapper">
          <Notecard text={message} color={color} />
        </div>
      );
    });
  };

  return <div className="grid">{renderNotecards()}</div>;
};

export default Grid;
