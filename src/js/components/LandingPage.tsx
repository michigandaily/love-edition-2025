// import React from "react";
// import backgroundImage from '../assets/background.png';

// const LandingPage = () => {
//   return (
// 		<div className="relative min-h-screen flex items-center justify-center bg-brown-100">
// 			{/* Background Image */}
// 			<div
// 				className="absolute inset-0 bg-cover bg-center"
// 				style={{
// 					backgroundImage: `url(${backgroundImage})`
// 				}}
// 			></div>

// 			{/* Overlay to enhance text visibility */}
// 			<div className="absolute inset-0 bg-brown-900 bg-opacity-30"></div>

// 			{/* Content */}
// 			<div className="relative z-10 text-center p-6">
// 				<div className="bg-white px-6 py-4 shadow-lg rounded-lg">
// 					<h1 className="text-xl font-semibold text-brown-800">Love Notes</h1>
// 				</div>
// 			</div>

// 			<img src={backgroundImage} alt="Alternative text" />
// 		</div>
// 	);
// };

// export default LandingPage;

import '../../css/main.scss'; // Import the external CSS file

const LandingPage = () => {
	return (
		<div className="landing-page-container">
			<img
				src="https://www.michigandaily.com/wp-content/uploads/2025/02/love-edition-cover-page-scaled.jpg"
				alt="Statement Love Edition Cover: Flowers, chocolates, and love letters"
				id="landing-page-image"
			></img>
			<img
				src="https://www.michigandaily.com/wp-content/uploads/2025/02/chevron_wrapper.png"
				alt=""
				id="down-arrow"
			></img>
		</div>
	);
};

export default LandingPage;
