import '../../css/Notecard.css';

interface NotecardProps {
	text: string;
	color: string;
}

const Notecard: React.FC<NotecardProps> = ({ text, color }) => {
	return (
		<div className={`wrapper ${color}`}>
			<div className={`lid one ${color}`}></div>
			<div className={`lid two ${color}`}></div>
			<div className={`envelope ${color}`}>
				<div className="heart">❤️</div>
			</div>
			<div className="letter" >
				<p>{text}</p>
			</div>
		</div>
	);
};

export default Notecard;
