import Facebook from '../../assets/facebook.svg';
import Twitter from '../../assets/twitter.svg';
import Instagram from '../../assets/instagram.svg';
import Mailbox from '../../assets/mailbox.svg';
import '../../css/main.scss';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-mailbox">
				<img src={Mailbox} alt="Mailbox" />
				<div className="footer-square">The Michigan Daily Love Edition, 2025</div>
			</div>
			<div className="footer-content">
				<p>
					<strong>Designed By:</strong> Sanvika Inturi & Ruhee Jain
				</p>
				<p>
					<strong>Developed By:</strong> Emily Chen, Madeleine Hong, Alvin Jiang, Julia Mei, Eshaan
					Nair, Alexander Salinas and Kristen Su
				</p>
				<div className="footer-icons">
					<a href="https://www.facebook.com/michigandaily" target="_blank" rel="noreferrer">
						<img src={Facebook} alt="Facebook" />
					</a>
					<a href="https://twitter.com/michigandaily" target="_blank" rel="noreferrer">
						<img src={Twitter} alt="Twitter" />
					</a>
					<a href="https://www.instagram.com/michigandaily" target="_blank" rel="noreferrer">
						<img src={Instagram} alt="Instagram" />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
