import React from 'react';
import { Route, Routes } from 'react-router-dom';

import PlacesTable from './placesTable';
import PlaceInfo from './placeInfo';
import NotFound from '../common/notFound';

import { getPlaces } from '../../services/fakePlaces';

const Places = () => {
	const placeData = getPlaces();

	return (
		<Routes>
			<Route index element={<PlacesTable data={placeData} />} />
			<Route path='/:id/*' element={<PlaceInfo placeData={placeData} />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
};

export default Places;
