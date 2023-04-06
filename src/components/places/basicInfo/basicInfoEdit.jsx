import React, { useState } from 'react';
import { useUpdate } from 'react-use';

import { Link } from 'react-router-dom';

import ContactCard from './contactCard';
import DropZone from '../../common/dropZone';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const BasicInfoEdit = ({ placeData }) => {
	const update = useUpdate();

	const initialBasicInfoObj = {
		accessData: placeData.basicInfo.accessData,
		addressLocation: placeData.addressLocation,
		contactData: placeData.basicInfo.contactData,
		customerNumber: placeData.customerNumber,
		endDate: placeData.endDate,
		fullAddress: placeData.fullAddress,
		_id: placeData._id,
		importantNotes: placeData.basicInfo.importantNotes,
		isEndDate: false,
		name: placeData.name,
		startDate: placeData.startDate,
		summaryData: placeData.basicInfo.summaryData,
	};

	const [basicInfoObj, setBasicInfoObj] = useState(initialBasicInfoObj);

	const {
		accessData,
		addressLocation,
		contactData,
		customerNumber,
		endDate,
		fullAddress,
		_id,
		isEndDate,
		importantNotes,
		name,
		startDate,
		summaryData,
	} = basicInfoObj;

	const contactTypes = [
		{ value: 'mainContact', label: 'Main contact' },
		{ value: 'chairman', label: 'Board chairman (Formand)' },
		{ value: 'boardMember', label: 'Board Member' },
		{ value: 'salesContact', label: 'Sales Contact' },
		{ value: 'keyIC', label: 'Key responsible' },
		{ value: 'gaardlaug', label: 'Gårdlaug chairman' },
		{ value: 'resident', label: 'Resident' },
		{ value: 'oldForeman', label: 'Old board chairman (formand)' },
		{ value: 'oldMember', label: 'Old board member' },
		{ value: 'admin', label: 'Property administrator' },
		{ value: 'finance', label: 'Finance contact' },
	];

	const dataTypeOptions = [
		{ value: 'name', label: 'Name' },
		{ value: 'phone', label: 'Phone number' },
		{ value: 'email', label: 'E-mail address' },
		{ value: 'exactAddress', label: 'Exact address' },
	];

	const handleCancel = () => {
		setBasicInfoObj(initialBasicInfoObj);
	};

	const handleSave = () => {
		console.log('saved');
	};

	const handleChange = (newValue, path, index) => {
		const newBasicInfoObj = basicInfoObj;
		if (path[0] === 'contactData') {
			if (path[1] === 'data') {
				newBasicInfoObj[path[0]][index[0]][path[1]][index[1]][path[2]] =
					newValue;
				setBasicInfoObj(newBasicInfoObj);
				update();
				return;
			} else {
				newBasicInfoObj[path[0]][index[0]][path[1]] = newValue;
				setBasicInfoObj(newBasicInfoObj);
				update();
				return;
			}
		} else {
			newBasicInfoObj[path[0]] = newValue;
			setBasicInfoObj(newBasicInfoObj);
			update();
			return;
		}
	};

	const [dragIndex, setDragIndex] = useState(false);
	const [isDragging, setIsDragging] = useState(false);

	const handleDragStart = (drag, index) => {
		setIsDragging(drag);
		setDragIndex(index);
	};

	const handleDragEnd = () => {
		setIsDragging(false);
		setDragIndex(false);
	};

	const handleDrop = (itemType, oldIndex, newIndex) => {
		console.log(itemType, oldIndex, newIndex);
		let newContactDataObj = contactData;
		console.log(newContactDataObj);
		let newBasicInfoObj = basicInfoObj;
		const shiftedItem = newContactDataObj[oldIndex];
		newContactDataObj.splice(newIndex, 0, shiftedItem);
		if (oldIndex < newIndex) {
			newContactDataObj.splice(oldIndex, 1);
		} else {
			newContactDataObj.splice(oldIndex + 1, 1);
		}
		newBasicInfoObj.contactData = newContactDataObj;
		setIsDragging(false);
		setDragIndex(false);
		setBasicInfoObj(newBasicInfoObj);
		update();
		return;
	};

	return (
		<DndProvider backend={HTML5Backend}>
			<div
				style={{ maxWidth: '1040px' }}
				className='form-control shadow p-4 m-6 bg-white rounded'
			>
				<div className='row justify-content-between'>
					<h3 className='col-4'>Basic information edit</h3>
					<div style={{ width: 'auto' }}>
						<Link
							to={`/main/places/${_id}/basicInfo`}
							className='btn btn-primary m-1'
							onClick={() => handleCancel()}
						>
							Cancel
						</Link>
						<button
							className='btn btn-primary m-1'
							onClick={(e) => {
								handleSave(e);
							}}
						>
							Save
						</button>
					</div>
				</div>
				<div className='row mt-2 justify-content-start'>
					<div className='col-2'>
						<label htmlFor='customerNumber'>Property code</label>
						<input
							className='form-control shadow'
							id='customerNumber'
							type='customerNumber'
							value={customerNumber}
							onChange={(e) => {
								handleChange(e.target.value, ['customerNumber']);
							}}
						/>
					</div>
					<div className='col'>
						<label htmlFor='propertyName'>Property name</label>
						<input
							className='form-control shadow'
							id='propertyName'
							type='text'
							value={name}
							onChange={(e) => {
								handleChange(e.target.value, ['name']);
							}}
						/>
					</div>
				</div>
				<div>
					<label htmlFor='fullAddress'>Full address</label>
					<input
						className='form-control shadow'
						id='fullAddress'
						type='text'
						value={fullAddress}
						onChange={(e) => {
							handleChange(e.target.value, [fullAddress]);
						}}
					/>
				</div>
				<div className='mt-2 col-6'>
					<label htmlFor='addressLocation'>Address location</label>
					<input
						className='form-control shadow'
						id='addressLocation'
						type='text'
						value={addressLocation}
						onChange={(e) => {
							handleChange(e, ['addressLocation']);
						}}
					/>
				</div>
				<div className='row'>
					<div className='col-3 mt-2'>
						<label
							htmlFor='startDate'
							style={{
								width: '140px',
								fontSize: '12px',
							}}
						>
							Start date
						</label>
						<input
							className='form-control shadow'
							id='startDate'
							type='date'
							value={startDate}
							onChange={(e) => {
								handleChange(e.target.value, ['startDate']);
							}}
						/>
					</div>
					<input
						checked={isEndDate}
						className='ms-4 me-1'
						style={{ width: '16px', marginTop: '30px' }}
						id='endDateCheck'
						name='endDateCheck'
						type='checkBox'
						value=''
						onChange={() => handleChange(!isEndDate, ['isEndDate'])}
					/>
					<div className='col-3 mt-2'>
						<label
							htmlFor='endDate'
							style={{
								width: '140px',
								fontSize: '12px',
								color: isEndDate ? 'black' : 'lightgray',
							}}
						>
							End date:
						</label>
						<input
							className={`form-control ${isEndDate ? 'shadow' : ''}`}
							disabled={!isEndDate}
							id='endDate'
							onChange={(e) => {
								handleChange(e.target.value, ['endDate']);
							}}
							style={{ color: isEndDate ? 'black' : 'gray' }}
							type='date'
							value={isEndDate ? endDate : ''}
						/>
					</div>
				</div>
				<div className='mt-2'>
					<label htmlFor='summaryData'>Summary of property</label>
					<textarea
						className='form-control shadow'
						id='summaryData'
						type='textArea'
						value={summaryData}
						onChange={(e) => {
							handleChange(e.target.value, ['summaryData']);
						}}
					/>
				</div>
				<div className='mt-2'>
					<label htmlFor='importantNotes'>Important notes</label>
					<textarea
						className='form-control shadow'
						id='importantNotes'
						type='textArea'
						value={importantNotes}
						onChange={(e) => {
							handleChange(e.target.value, ['importantNotes']);
						}}
					/>
				</div>
				<div className='mt-2'>
					<label htmlFor='accessData'>Data on keys / access</label>
					<textarea
						className='form-control shadow'
						id='accessData'
						type='textArea'
						value={accessData}
						onChange={(e) => {
							handleChange(e.target.value, ['accessData']);
						}}
					/>
				</div>
				{contactData.map((contact, contactIndex) => (
					<div key={`${contact.contactType}-${contactIndex}`}>
						{contactIndex === 0 && dragIndex !== 0 ? (
							<DropZone
								acceptItem={'CONTACT'}
								index={contactIndex}
								isDragging={isDragging}
								raiseDrop={handleDrop}
							/>
						) : null}
						<div onDragEnd={handleDragEnd}>
							<ContactCard
								contact={contact}
								contactIndex={contactIndex}
								contactTypes={contactTypes}
								dataTypeOptions={dataTypeOptions}
								isDragging={isDragging}
								onChange={handleChange}
								raiseDragStart={handleDragStart}
							/>
						</div>
						{dragIndex !== contactIndex && dragIndex !== contactIndex + 1 ? (
							<DropZone
								acceptItem={'CONTACT'}
								index={contactIndex + 1}
								isDragging={isDragging}
								raiseDrop={handleDrop}
							/>
						) : null}
					</div>
				))}
			</div>
		</DndProvider>
	);
};

export default BasicInfoEdit;
