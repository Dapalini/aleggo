import React from 'react';

import WorkerForm from './workerForm';
import AssignmentModule from './assignModule';
import DropZone from '../../common/dropZone';

import { useDrag } from 'react-dnd';
import { VscMove } from 'react-icons/vsc';

const WorkerModule = ({
	acceptItem,
	dragIndex,
	itemDragged,
	inputData,
	onChangeInput,
	onCustomFrequencyCancel,
	raiseDragStart,
	raiseDragEnd,
	raiseDrop,
	startDate,
	worker,
	workerIndex,
}) => {
	// Extract worker input data from input data files.
	const { workers, workerTypes } = inputData;

	// Type of item which is handled by drop zones
	const assignAcceptItem = 'ASSIGNMENT';

	// Extract selected worker data from workplan object
	const { assignment } = worker;

	// Set index for item
	const index = [workerIndex, false, false];

	// DND drag function
	const [{ isDragging: workerIsDragging }, drag, dragPreview] = useDrag(() => ({
		type: acceptItem,
		item: () => {
			raiseDragStart('worker', index);
			return { index: index };
		},
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
	}));

	return (
		<div
			ref={dragPreview}
			style={{
				opacity: workerIsDragging ? 0.6 : 1,
				overflow: 'hidden',
			}}
			className={`container shadow rounded border border-primary mt-2 p-3 ${
				itemDragged === 'worker' ? 'DraggedItem-active' : 'DraggedItem-inactive'
			}`}
		>
			<div>
				<div className='d-flex justify-content-between'>
					<h5 className='text-primary'>Worker data input</h5>
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
				<WorkerForm
					index={index}
					isDragging={workerIsDragging}
					onChangeInput={onChangeInput}
					worker={worker}
					workers={workers}
					workerTypes={workerTypes}
				/>
			</div>
			<div className='row'>
				{assignment.length === 0 ? (
					<div>
						<DropZone
							index={[workerIndex, 0, false]}
							acceptItem={assignAcceptItem}
							isDragging={itemDragged === 'assign'}
							raiseDrop={raiseDrop}
						/>
					</div>
				) : null}
				{assignment.map((assign, assignIndex) => (
					<div key={`assignLayout-${workerIndex}-${assignIndex}`}>
						{assignIndex === 0 &&
						!(workerIndex === dragIndex[0] && dragIndex[1] === 0) ? (
							<DropZone
								index={[workerIndex, assignIndex, false]}
								acceptItem={assignAcceptItem}
								isDragging={itemDragged === 'assign'}
								raiseDrop={raiseDrop}
							/>
						) : null}
						<div onDragEnd={raiseDragEnd}>
							<AssignmentModule
								acceptItem={assignAcceptItem}
								assignIndex={assignIndex}
								assign={assign}
								dragIndex={dragIndex}
								inputData={inputData}
								itemDragged={itemDragged}
								onChangeInput={onChangeInput}
								onCustomFrequencyCancel={onCustomFrequencyCancel}
								raiseDragEnd={raiseDragEnd}
								raiseDragStart={raiseDragStart}
								raiseDrop={raiseDrop}
								startDate={startDate}
								workerIndex={workerIndex}
							></AssignmentModule>
						</div>
						{!(dragIndex[0] === workerIndex && dragIndex[1] === assignIndex) &&
						!(
							dragIndex[0] === workerIndex && dragIndex[1] === assignIndex + 1
						) ? (
							<DropZone
								workerIndex={workerIndex}
								index={[workerIndex, assignIndex + 1, false]}
								acceptItem={assignAcceptItem}
								isDragging={itemDragged === 'assign'}
								raiseDrop={raiseDrop}
							/>
						) : null}
					</div>
				))}
			</div>
		</div>
	);
};

export default WorkerModule;
