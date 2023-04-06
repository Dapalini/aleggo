import React from 'react';
import Creatable from 'react-select/creatable';

import { useDrag } from 'react-dnd';
import { VscMove } from 'react-icons/vsc';

const ContactCard = ({
	contact,
	contactIndex,
	contactTypes,
	dataTypeOptions,
	isDragging,
	onChange,
	raiseDragStart,
}) => {
	const [{ isDragging: contactIsDragging }, drag, dragPreview] = useDrag(
		() => ({
			type: 'CONTACT',
			item: () => {
				raiseDragStart(true, contactIndex);
				return { index: contactIndex };
			},
			collect: (monitor) => ({
				isDragging: !!monitor.isDragging(),
			}),
		})
	);

	return (
		<div
			ref={dragPreview}
			style={{
				opacity: contactIsDragging ? 0.6 : 1,
				overflow: 'hidden',
			}}
			className={`shadow p-3 mt-3 bg-white rounded border ${
				isDragging ? 'DraggedItem-active-small' : 'DraggedItem-inactive'
			}`}
		>
			<div className='row justify-content-between'>
				<div className='col-8'>
					<label htmlFor='contactType'> Contact type or position</label>
					<Creatable
						className='basic-multi-select shadow'
						closeMenuOnSelect={true}
						id='contactType'
						onChange={(value) => {
							onChange(value, ['contactData', 'contactType'], [contactIndex]);
						}}
						options={contactTypes}
						value={contact.contactType}
					/>
				</div>
				<div
					ref={drag}
					className=' me-4'
					style={{ cursor: 'move', width: '30px' }}
				>
					<VscMove
						style={{
							height: '26px',
							width: '26px',
							color: 'gray',
						}}
					/>
				</div>
			</div>
			{contact.data.map((data, dataIndex) => (
				<div
					key={`${data.label.value}-${dataIndex}`}
					className='row justify-content-start mt-3'
				>
					<div style={{ width: '240px' }}>
						<label htmlFor='dataType'>Label</label>
						<Creatable
							className='basic-multi-select shadow'
							closeMenuOnSelect={true}
							id='dataType'
							onChange={(value) => {
								onChange(
									value,
									['contactData', 'data', 'label'],
									[contactIndex, dataIndex]
								);
							}}
							options={dataTypeOptions}
							value={data.label}
						/>
					</div>
					<div className='col'>
						<label htmlFor='fieldData'>Data</label>
						<input
							className='form-control shadow'
							id='fieldData'
							type='text'
							value={data.value}
							onChange={(e) =>
								onChange(
									e.target.value,
									['contactData', 'data', 'value'],
									[contactIndex, dataIndex]
								)
							}
						></input>
					</div>
				</div>
			))}
			<div className='mt-2'>
				<label htmlFor='contactNotes'> Notes on contact</label>
				<textarea
					className='form-control shadow'
					id='contactNotes'
					type='textArea'
					value={contact.contactNotes}
					onChange={(e) =>
						onChange(
							e.target.value,
							['contactData', 'contactNotes'],
							[contactIndex]
						)
					}
				/>
			</div>
		</div>
	);
};

export default ContactCard;
