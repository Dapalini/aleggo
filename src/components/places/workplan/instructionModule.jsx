import React from 'react';

import { useDrag } from 'react-dnd';
import { VscMove } from 'react-icons/vsc';

import InstructForm from './instructForm';

const InstructionModule = ({
	acceptItem,
	assignIndex,
	inputData,
	instruct,
	instructIndex,
	itemDragged,
	onChangeInput,
	raiseDragStart,
	workerIndex,
}) => {
	const index = [workerIndex, assignIndex, instructIndex];

	const [{ isDragging: instructIsDragging }, drag, dragPreview] = useDrag(
		() => ({
			type: acceptItem,
			item: () => {
				console.log('Start drag Instruct', index);
				raiseDragStart('instruct', index);
				return { index: index };
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
				opacity: instructIsDragging ? 0.6 : 1,
				overflow: 'hidden',
			}}
			className={`container shadow rounded border border-secondary mt-2 p-3 ${
				itemDragged === 'instruct'
					? 'DraggedItem-active'
					: 'DraggedItem-inactive'
			}`}
		>
			<div className='d-flex justify-content-between'>
				<h5 className='text-secondary'>Job instructions input</h5>
				<div className='d-flex'>
					<div ref={drag} style={{ cursor: 'move' }}>
						<VscMove
							style={{
								height: '26px',
								width: '26px',
								color: 'gray',
							}}
						/>
					</div>
				</div>
			</div>
			<InstructForm
				index={index}
				inputData={inputData}
				instruct={instruct}
				onChangeInput={onChangeInput}
			/>
		</div>
	);
};

export default InstructionModule;
