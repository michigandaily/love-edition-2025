import '../../css/article.scss';
import '../../css/main.scss';
import logoStamp from '../../assets/logo-stamp.png';
// import letterPhoto from '../../assets/letter-photo.png';

const Article = ({
	title,
	author,
	date,
	articleUrl,
	photoUrl,
	photoAltText
}: {
	title: string;
	author: string;
	date: string;
	articleUrl: string;
	photoUrl: string;
	photoAltText: string;
}) => {
	// date is in MM/DD/YYYY format
	// photo is a local path to where the photo is located (might need to change this)

	return (
		<div className="postcard" onClick={() => window.open(articleUrl, '_blank')}>
			<div className="article-info" onClick={(e) => e.stopPropagation()}>
				<h2>{title}</h2>
				<p>{author}</p>
				<p>{date}</p>
			</div>
			<div className="stamp">
				<img src={logoStamp} alt="stamp" />
			</div>
			<div className="photo">
				<img src={photoUrl} alt={photoAltText} />
			</div>
		</div>
	);
};

export default Article;
