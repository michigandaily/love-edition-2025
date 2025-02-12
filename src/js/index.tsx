import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './LandingPage';
import LandingPage from './LandingPage';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<LandingPage />
	</StrictMode>
);
