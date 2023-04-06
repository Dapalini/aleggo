import React from 'react';

import { useDrop } from 'react-dnd';

const DropZone = ({ isDragging, index, acceptItem, raiseDrop }) => {
	const [{ isOver, canDrop }, drop] = useDrop(
		() => ({
			accept: acceptItem,
			drop: (item) => {
				raiseDrop(acceptItem, item.index, index);
			},
			collect: (monitor) => ({
				isOver: !!monitor.isOver(),
				canDrop: !!monitor.canDrop(),
			}),
		}),
		[]
	);

	return (
		<div
			ref={drop}
			className={`Drop-zone ${isDragging ? 'Drop-zone-active' : null} ${
				isOver && canDrop ? 'Drop-zone-expanded' : null
			} container mt-2`}
		/>
	);
};

export default DropZone;
