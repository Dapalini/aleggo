import React from 'react';
import { Outlet } from 'react-router-dom';

import NavBar from '../navBar/navBar';

const MainLayout = () => {
	return (
		<>
			<NavBar />
			<Outlet />
		</>
	);
};

export default MainLayout;
