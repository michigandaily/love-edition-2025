import "./Notecard.css";

interface NotecardProps {
  text: string;
}

const Notecard: React.FC<NotecardProps> = ({ text }) => {
  return (
    <div className="wrapper">
      <div className="lid one"></div>
      <div className="lid two"></div>
      <div className="envelope"></div>
      <div className="letter">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Notecard;
