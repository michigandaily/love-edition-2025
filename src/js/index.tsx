import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Grid from './components/Grid';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<LandingPage />
		<Grid />
		<Footer />
	</StrictMode>
);
