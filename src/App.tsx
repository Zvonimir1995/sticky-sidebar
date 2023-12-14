import React from 'react';

import { useMediaQuery, useTheme } from '@mui/material';

import './App.scss';
import Layout from './Layout/Layout';
import StickySidebar from './Sidebar/StickySidebar';

function App() {
	const theme = useTheme();
	const lgUp = useMediaQuery(theme.breakpoints.up(1024));
	const xs500Up = useMediaQuery(theme.breakpoints.up(500));

	return (
		<Layout>
			<section className="flex gap-8">
				{xs500Up && (
					<StickySidebar className="w-1/4 min-w-[12rem] max-w-[17.75rem]">
						<div className="h-48 rounded-xl bg-red-100"></div>
						<div className="h-48 rounded-xl bg-red-100"></div>
						<div className="h-48 rounded-xl bg-red-100"></div>
						<div className="h-48 rounded-xl bg-red-100"></div>
						<div className="h-48 rounded-xl bg-red-100"></div>
					</StickySidebar>
				)}
				<main className="mb-8 h-[400vh] flex-1 rounded-xl bg-blue-100"></main>
				{lgUp && (
					<StickySidebar className="w-[18rem]">
						<div className="h-64 rounded-xl bg-green-100"></div>
						<div className="h-64 rounded-xl bg-green-100"></div>
						<div className="h-64 rounded-xl bg-green-100"></div>
						<div className="h-64 rounded-xl bg-green-100"></div>
						<div className="h-64 rounded-xl bg-green-100"></div>
						<div className="h-64 rounded-xl bg-green-100"></div>
					</StickySidebar>
				)}
			</section>
		</Layout>
	);
}

export default App;
