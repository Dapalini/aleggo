import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import inputData from '../../../services/fakeInputData';

import WorkplanDNDLayout from './workplanDNDLayout';

const WorkplanEdit = ({ placeData, onSave }) => {
	const { name, fullAddress, workplan, _id, startDate } = placeData;

	const [editedWorkplan, setEditedWorkplan] = useState(workplan);

	return (
		<DndProvider backend={HTML5Backend}>
			<div className='col-8 shadow p-3 mb-6 bg-white rounded border'>
				<div className='d-flex justify-content-between'>
					<h3>Workplans Edit</h3>
					<div>
						<Link
							to={`/main/places/${_id}/workplan`}
							className='btn btn-primary m-1'
						>
							Cancel
						</Link>
						<button
							className='btn btn-primary m-1'
							onClick={(e) => {
								onSave(e, editedWorkplan, _id, 'workplan');
							}}
						>
							Save
						</button>
					</div>
				</div>
				<div className='row d-flex justify-content-between align-items-end'>
					<div style={{ maxWidth: '540px' }}>
						<h3>{name}</h3>
						<h4>{fullAddress}</h4>
					</div>
					<div style={{ width: '320px' }}>
						<div>
							Contract start date: {`${new Date(startDate).toDateString()}`}
						</div>
						<div>
							Last workplan update: {`${new Date(startDate).toDateString()}`}
						</div>
					</div>
				</div>
				<br></br>
				<WorkplanDNDLayout
					workplan={workplan}
					startDate={startDate}
					inputData={inputData}
				/>
			</div>
		</DndProvider>
	);
};

export default WorkplanEdit;
