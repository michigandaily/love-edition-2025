import Notecard from './Notecard';
import '../../css/Grid.css';
import messages from '../../data.json';

interface Messages {
	[key: string]: string;
}

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

		// Explicitly assert that 'messages' is of type Messages
		const typedMessages = messages as Messages;

		// create array of messages.keys using Object.keys
		const keyArr = Object.keys(messages);

		// shuffle the messages in the key array
		// Uses Fisher Yates algorithm from here:
		// https://stackoverflow.com/questions/64925666/
		for (let i = keyArr.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * i);
			let k = keyArr[i];
			keyArr[i] = keyArr[j];
			keyArr[j] = k;
		}

		let colorIndex = 0;

		// return the shuffled messages
		// used to be: Object.entries(messages).map(([key, message])
		return keyArr.map((key) => {
			const message = typedMessages[key];
			const color = colors[colorIndex % colors.length]; // Alternate colors
			colorIndex++;

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
