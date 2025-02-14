import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Grid from './components/Grid';
import App from './App';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<LandingPage />
		<App/>
		<Grid />
		<Footer />
	</StrictMode>
);
