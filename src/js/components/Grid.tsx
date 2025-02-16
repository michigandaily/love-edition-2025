import Notecard from './Notecard';
import '../../css/Grid.css';
import messages from '../../data.json';
import { useState } from 'react';

interface Messages {
	[key: string]: string;
}

const Grid: React.FC = () => {
	// const messages = ['Hey', 'Wassup', 'Hello', 'Happy birthday Jeff! Have a good birthday! This is a really long example message because i want to check if scrolling works']; // Example messages

	const colors = ['blue', 'pink', 'yellow']; // Choose colors you want idk

	// Explicitly assert that 'messages' is of type Messages
	const typedMessages = messages as Messages;
	const keyArr = Object.keys(typedMessages);

	// Shuffle messages using the Fisher-Yates algorithm
	for (let i = keyArr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[keyArr[i], keyArr[j]] = [keyArr[j], keyArr[i]];
	}

	const [visibleNotes, setVisibleNotes] = useState(10);

	// Function to render only the visible notecards
	const renderNotecards = () => {
		return keyArr.slice(0, visibleNotes).map((key, index) => {
			const message = typedMessages[key];
			const color = colors[index % colors.length]; // Alternate colors

			return (
				<div key={key} className="wrapper">
					<Notecard text={message} color={color} />
				</div>
			);
		});
	};

	const loadMoreNotes = () => {
		setVisibleNotes((prev) => Math.min(prev + 10, keyArr.length));
	};

	return (
		<div className="grid-container">
			<div className="grid">{renderNotecards()}</div>
			<button id="load-more-button" onClick={loadMoreNotes}>
				Load more love
			</button>
		</div>
	);
};

export default Grid;
