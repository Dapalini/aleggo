import React from 'react';

function TableHeader(props) {
	const raiseSort = (path) => {
		const sortColumn = { ...props.sortColumn };
		if (path === sortColumn.path)
			sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
		else {
			sortColumn.path = path;
			sortColumn.order = 'asc';
		}
		props.onSort(sortColumn);
	};

	const renderSortIcon = (column) => {
		const { sortColumn } = props;

		if (column !== sortColumn.path) return null;
		if (sortColumn.order === 'asc') return <span>▼</span>;
		return <span>▲</span>;
	};

	const { columns } = props;

	return (
		<thead className='clickable'>
			<tr>
				{columns.map((column) => (
					<th
						key={column.path}
						style={{ cursor: 'pointer' }}
						onClick={() => raiseSort(column.path)}
					>
						{column.label} {renderSortIcon(column.path)}
					</th>
				))}
			</tr>
		</thead>
	);
}

export default TableHeader;
