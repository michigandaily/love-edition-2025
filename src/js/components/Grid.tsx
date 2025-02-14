import Notecard from './Notecard';
import '../../css/Grid.css';
import messages from '../../data.json';

const Grid: React.FC = () => {
	// const messages = ['Hey', 'Wassup', 'Hello', 'Happy birthday Jeff! Have a good birthday! This is a really long example message because i want to check if scrolling works']; // Example messages

	const colors = ['blue', 'pink', 'yellow']; // Choose colors you want idk

	const renderNotecards = () => {
		// return messages.map((message, index) => {
		// 	const color = colors[index % colors.length]; // Alternate colors
		// 	return (
		// 		<div key={index} className="wrapper">
		// 			<Notecard text={message} color={color} />
		// 		</div>
		// 	);
		// });
		return Object.entries(messages).map(([key, message]) => {
			const color = colors[Number(key) % colors.length]; // Alternate colors
			return (
				<div key={key} className="wrapper">
					<Notecard text={message} color={color} />
				</div>
			);
		});
		
	};

	return <div className="grid">{renderNotecards()}</div>;
};

export default Grid;
