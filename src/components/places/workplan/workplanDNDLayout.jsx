import React, { useState } from 'react';
import { useUpdate } from 'react-use';

import DropZone from '../../common/dropZone';
import WorkerModule from './workerModule';
import { Modal } from 'bootstrap';

const WorkplanDNDLayout = ({ workplan, inputData, startDate }) => {
	const update = useUpdate();

	const workerAcceptItem = 'WORKER';

	const [workPlanObj, setWorkPlanObj] = useState(workplan);

	var customFrequencyModal;

	const onChangeInput = (newValue, index, type, path) => {
		let newWorkPlanObj = workPlanObj;
		if (type === 'WORKER') {
			newWorkPlanObj[index[0]][path] = newValue;
			setWorkPlanObj(newWorkPlanObj);
			update();
			return;
		}
		if (type === 'ASSIGN') {
			if (path === 'value') {
				if (newValue.value === 'customFrequency') {
					customFrequencyModal = new Modal(
						document.getElementById(
							`customFrequencyModal-${index[0]}-${index[1]}`
						),
						{ focus: true, keyboard: true }
					);
					customFrequencyModal.show();
					update();
					return;
				}
			}
			newWorkPlanObj[index[0]].assignment[index[1]].frequency[path] = newValue;
			setWorkPlanObj(newWorkPlanObj);
			update();
			return;
		}
		if (type === 'INSTRUCT') {
			newWorkPlanObj[index[0]].assignment[index[1]].tasks[index[2]][path] =
				newValue;
			setWorkPlanObj(newWorkPlanObj);
			update();
			return;
		}
		return;
	};

	const [dragIndex, setDragIndex] = useState([false, false, false]);
	const [itemDragged, setItemDragged] = useState('');

	const handleDragStart = (item, index) => {
		setItemDragged(item);
		setDragIndex(index);
	};

	const handleDragEnd = () => {
		setItemDragged('');
		setDragIndex([false, false, false]);
	};

	const handleDrop = (itemType, oldIndex, newIndex) => {
		let newWorkPlanObj = workPlanObj;
		if (itemType === 'WORKER') {
			const shiftedItem = newWorkPlanObj[oldIndex[0]];
			newWorkPlanObj.splice(newIndex[0], 0, shiftedItem);
			if (oldIndex[0] < newIndex[0]) {
				newWorkPlanObj.splice(oldIndex[0], 1);
			} else {
				newWorkPlanObj.splice(oldIndex[0] + 1, 1);
			}
			setItemDragged('');
			setDragIndex([false, false, false]);
			setWorkPlanObj(newWorkPlanObj);
			return;
		}
		if (itemType === 'ASSIGNMENT') {
			const shiftedItem = newWorkPlanObj[oldIndex[0]].assignment[oldIndex[1]];
			newWorkPlanObj[newIndex[0]].assignment.splice(
				newIndex[1],
				0,
				shiftedItem
			);
			if (oldIndex[0] === newIndex[0]) {
				if (oldIndex[1] < newIndex[1]) {
					newWorkPlanObj[newIndex[0]].assignment.splice(oldIndex[1], 1);
				} else {
					newWorkPlanObj[newIndex[0]].assignment.splice(oldIndex[1] + 1, 1);
				}
			} else {
				newWorkPlanObj[oldIndex[0]].assignment.splice([oldIndex[1]], 1);
			}
			setItemDragged('');
			setDragIndex([false, false, false]);
			setWorkPlanObj(newWorkPlanObj);
			return;
		}
		if (itemType === 'INSTRUCT') {
			const shiftedItem =
				newWorkPlanObj[oldIndex[0]].assignment[oldIndex[1]].tasks[oldIndex[2]];
			newWorkPlanObj[newIndex[0]].assignment[newIndex[1]].tasks.splice(
				newIndex[2],
				0,
				shiftedItem
			);
			if (oldIndex[0] === newIndex[0] && oldIndex[1] === newIndex[1]) {
				if (oldIndex[2] < newIndex[2]) {
					newWorkPlanObj[newIndex[0]].assignment[newIndex[1]].tasks.splice(
						oldIndex[2],
						1
					);
				} else {
					newWorkPlanObj[newIndex[0]].assignment[newIndex[1]].tasks.splice(
						oldIndex[2] + 1,
						1
					);
				}
			} else {
				newWorkPlanObj[oldIndex[0]].assignment[oldIndex[1]].tasks.splice(
					oldIndex[2],
					1
				);
			}
			setItemDragged('');
			setDragIndex([false, false, false]);
			setWorkPlanObj(newWorkPlanObj);
			return;
		}
	};

	return (
		<>
			{workPlanObj.map((worker, workerIndex) => (
				<div key={`workerLayout-${workerIndex}`}>
					{workerIndex === 0 && dragIndex[0] !== 0 ? (
						<DropZone
							isDragging={itemDragged === 'worker'}
							acceptItem={workerAcceptItem}
							index={[workerIndex, false, false]}
							raiseDrop={handleDrop}
						/>
					) : null}
					<div onDragEnd={handleDragEnd}>
						<WorkerModule
							acceptItem={workerAcceptItem}
							inputData={inputData}
							itemDragged={itemDragged}
							dragIndex={dragIndex}
							onChangeInput={onChangeInput}
							raiseDragEnd={handleDragEnd}
							raiseDragStart={handleDragStart}
							raiseDrop={handleDrop}
							startDate={startDate}
							worker={worker}
							workerIndex={workerIndex}
						/>
					</div>
					{dragIndex[0] !== workerIndex && dragIndex[0] !== workerIndex + 1 ? (
						<DropZone
							isDragging={itemDragged === 'worker'}
							acceptItem={workerAcceptItem}
							index={[workerIndex + 1, false, false]}
							raiseDrop={handleDrop}
						/>
					) : null}
				</div>
			))}
		</>
	);
};

export default WorkplanDNDLayout;
