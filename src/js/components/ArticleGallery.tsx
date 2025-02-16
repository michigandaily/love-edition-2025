import '../../css/article.scss';
import '../../css/main.scss';

import { useState } from 'react';
import Article from './Article';

const ArticleGallery = ({ articles }: ArticleListProps) => {
	// articles is a list of JSON

	const [index, setIndex] = useState(0);

	return (
		<>
			<div className="letter-with-arrows">
				{index > 0 ? (
					<button onClick={() => setIndex(index - 1)} className="arrow left">
						‹
					</button>
				) : (
					<button className="arrow left placeholder" disabled></button>
				)}
				<Article {...articles[index]} />

				{/* Right arrow button (only shows if index < text.length - 1) */}
				{index < articles.length - 1 ? (
					<button onClick={() => setIndex(index + 1)} className="arrow right">
						›
					</button>
				) : (
					<button className="arrow right placeholder" disabled></button>
				)}
			</div>
		</>
	);
};

// the "data" contained in each article (part of articles list)
interface ArticleProps {
	title: string;
	author: string;
	date: string;
	articleUrl: string;
	photoUrl: string;
	photoAltText: string;
}

interface ArticleListProps {
	articles: ArticleProps[]; // List of articles
}

export default ArticleGallery;
