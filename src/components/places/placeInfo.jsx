import React, { useState } from 'react';
import { Link, useParams, Routes, Route } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';

import BasicInfo from './basicInfo/basicInfo';
import BasicInfoEdit from './basicInfo/basicInfoEdit';
import Workplan from './workplan/workplan';
import WorkplanEdit from './workplan/workplanEdit';
import CurrentContract from './currentContract';
import PlaceTaskManager from './placeTaskManager';
import Calendar from './calendar';
import NotFound from '../common/notFound';
import HistoryData from './historyData';

const PlaceInfo = (props) => {
	const { placeData } = props;
	const { id } = useParams();

	const [historyCollapsed, setHistoryCollapsed] = useState(false);
	const [historySearch, setHistorySearch] = useState('');

	const [selectedPlace] = placeData.filter((item) => item._id === id);
	if (!selectedPlace) {
		return <div>No place with this id was found.</div>;
	}

	const path = `/main/places/${selectedPlace._id}/`;

	const filteredHistoryData = selectedPlace.historyData.filter(
		(item) =>
			item.label.toLowerCase().includes(historySearch.toLowerCase()) ||
			item.creatDate.toLowerCase().includes(historySearch.toLowerCase())
	);

	const handleSave = () => {
		console.log('saved');
	};

	return (
		<>
			<div className='row ps-2 align-items-start'>
				<div className='col-2 border sticky-top'>
					<div className='list-group list-group-flush'>
						<img
							className='pt-2 ps-2'
							style={{ marginTop: '70px' }}
							src='https://i.postimg.cc/MGDkv9H4/Screenshot-2022-12-03-at-21-10-06.png'
							alt={`Location on address ${selectedPlace.fullAddress}`}
						/>
						<div className='p-3'>
							<div className='d-flex'>
								<h5>{`${selectedPlace.customerNumber} - ${selectedPlace.name}`}</h5>
								<Link className='ms-auto' to={`${path}basicInfo`}>
									<FiEdit
										style={{
											width: '20px',
											height: '20px',
											color: 'gray',
											cursor: 'pointer',
										}}
									/>
								</Link>
							</div>

							<h5>{`${selectedPlace.fullAddress}`}</h5>
						</div>
						<Link
							to={`${path}basicInfo`}
							className='list-group-item list-group-item-action'
						>
							Basic Information
						</Link>
						<Link
							to={`${path}workplan`}
							className='list-group-item list-group-item-action'
						>
							Workplan
						</Link>
						<Link
							to={`${path}placeTaskManager`}
							className='list-group-item list-group-item-action'
						>
							Property task manager
						</Link>
						<Link
							to={`${path}calendar`}
							className='list-group-item list-group-item-action'
						>
							Calendar
						</Link>
						<Link
							to={`${path}currentContract`}
							className='list-group-item list-group-item-action'
						>
							Current Contract
						</Link>
						<div
							data-bs-toggle='collapse'
							href='#collapseExample'
							role='button'
							aria-expanded='false'
							aria-controls='collapseExample'
							className='list-group-item list-group-item-action'
							onClick={() =>
								setHistoryCollapsed(historyCollapsed ? false : true)
							}
						>
							History
						</div>
						<div className='collapse' id='collapseExample'>
							<input
								className='form-control m-1'
								type='search'
								placeholder='Search history'
								value={historySearch}
								onChange={(e) => setHistorySearch(e.target.value)}
							/>
							<div className='overflow-auto'>
								<div className='list-group-flush '>
									{filteredHistoryData.map((item) => {
										return (
											<Link
												className='list-group-item list-group-item-action m-1'
												key={item._id}
												to={`${path}historyData`}
											>{`${item.creatDate} - ${item.label}`}</Link>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='col' style={{ marginTop: '70px' }}>
					<Routes>
						<Route
							path='basicInfo'
							element={<BasicInfo placeData={selectedPlace} />}
						/>
						<Route
							path='basicInfoEdit'
							element={
								<BasicInfoEdit placeData={selectedPlace} onSave={handleSave} />
							}
						/>
						<Route
							path='workplan'
							element={<Workplan placeData={selectedPlace} />}
						/>
						<Route
							path='workplanEdit'
							element={
								<WorkplanEdit placeData={selectedPlace} onSave={handleSave} />
							}
						/>
						<Route path='placeTaskManager' element={<PlaceTaskManager />} />
						<Route path='calendar' element={<Calendar />} />
						<Route path='currentContract' element={<CurrentContract />} />
						<Route path='historyData' element={<HistoryData />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</div>
			</div>
		</>
	);
};

export default PlaceInfo;
