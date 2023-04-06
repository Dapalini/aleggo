import React from 'react';

import InstructionModule from './instructionModule';
import DropZone from '../../common/dropZone';
import AssignForm from './assignForm';
import { VscMove } from 'react-icons/vsc';

import { useDrag } from 'react-dnd';

const AssignmentModule = ({
	assign,
	assignIndex,
	acceptItem,
	dragIndex,
	inputData,
	itemDragged,
	onChangeInput,
	onCustomFrequencyCancel,
	raiseDragStart,
	raiseDragEnd,
	raiseDrop,
	startDate,
	workerIndex,
}) => {
	const index = [workerIndex, assignIndex, false];

	const [{ isDragging: assignIsDragging }, drag, dragPreview] = useDrag(() => ({
		type: acceptItem,
		item: () => {
			raiseDragStart('assign', index);
			return { index: index };
		},
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
	}));

	const instructAcceptItem = 'INSTRUCT';

	return (
		<div
			ref={dragPreview}
			style={{
				opacity: assignIsDragging ? 0.6 : 1,
				overflow: 'hidden',
			}}
			className={`container shadow rounded border border-danger mt-2 p-3 ${
				itemDragged === 'assign' ? 'DraggedItem-active' : 'DraggedItem-inactive'
			}`}
		>
			{' '}
			<div className='d-flex justify-content-between'>
				<h5 className='text-danger'>Frequency data input</h5>
				<div className='d-flex'>
					<div style={{ cursor: 'move' }} ref={drag}>
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
			<AssignForm
				assign={assign}
				inputData={inputData}
				index={index}
				onChangeInput={onChangeInput}
				onCustomFrequencyCancel={onCustomFrequencyCancel}
				startDate={startDate}
			/>
			<div className='row'>
				{assign.tasks.length === 0 ? (
					<div>
						<DropZone
							index={[workerIndex, 0, false]}
							acceptItem={instructAcceptItem}
							isDragging={itemDragged === 'instruct'}
							raiseDrop={raiseDrop}
						/>
					</div>
				) : null}
				{assign.tasks.map((instruct, instructIndex) => (
					<div key={`instructLayout-${workerIndex}-${instructIndex}`}>
						{instructIndex === 0 &&
						!(
							workerIndex === dragIndex[0] &&
							assignIndex === dragIndex[1] &&
							dragIndex[2] === 0
						) ? (
							<DropZone
								index={[workerIndex, assignIndex, instructIndex]}
								instructIndex={instructIndex}
								acceptItem={instructAcceptItem}
								isDragging={itemDragged === 'instruct'}
								raiseDrop={raiseDrop}
							/>
						) : null}
						<div onDragEnd={raiseDragEnd}>
							<InstructionModule
								acceptItem={instructAcceptItem}
								assignIndex={assignIndex}
								inputData={inputData}
								instructIndex={instructIndex}
								instruct={instruct}
								itemDragged={itemDragged}
								onChangeInput={onChangeInput}
								raiseDragStart={raiseDragStart}
								workerIndex={workerIndex}
							></InstructionModule>
						</div>
						{!(
							dragIndex[0] === workerIndex &&
							dragIndex[1] === assignIndex &&
							dragIndex[2] === instructIndex
						) &&
						!(
							dragIndex[0] === workerIndex &&
							dragIndex[1] === assignIndex &&
							dragIndex[2] === instructIndex + 1
						) ? (
							<DropZone
								workerIndex={workerIndex}
								index={[workerIndex, assignIndex, instructIndex + 1]}
								acceptItem={instructAcceptItem}
								isDragging={itemDragged === 'instruct'}
								raiseDrop={raiseDrop}
							/>
						) : null}
					</div>
				))}
			</div>
		</div>
	);
};

export default AssignmentModule;
