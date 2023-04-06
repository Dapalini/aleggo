import React, { useState } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import Table from '../common/table';

const PlacesTable = (props) => {
	const { data: placeData } = props;

	const [searchedValue, setSearchedValue] = useState('');

	const [sortValues, setSortValues] = useState({ path: 'name', order: 'asc' });

	const columns = [
		{
			path: 'customerNumber',
			label: 'Code',
			content: (item) => (
				<Link
					className='lead'
					style={{ textDecoration: 'none', color: 'black' }}
					to={`/main/places/${item._id}/basicInfo`}
				>
					{item.customerNumber}
				</Link>
			),
		},
		{
			path: 'name',
			label: 'Place name',
		},
		{ path: 'address', label: 'Address' },
	];

	const getFilteredData = (places, searchValue) => {
		let filtered = places.filter(
			(place) =>
				_.includes(
					place.customerNumber.toLowerCase(),
					searchValue.toLowerCase()
				) ||
				_.includes(place.name.toLowerCase(), searchValue.toLowerCase()) ||
				_.includes(place.address.toLowerCase(), searchValue.toLowerCase())
		);

		const sorted = _.orderBy(filtered, [sortValues.path], [sortValues.order]);

		return sorted;
	};

	let filteredPlaces = getFilteredData(placeData, searchedValue);

	return (
		<div>
			<div
				className='container-fluid p-2 fixed-top bg-light shadow'
				style={{ top: '50px' }}
			>
				<div className='row'>
					<div className='col-3'>
						<input
							type='search'
							className='form-control ms-3 m-2'
							placeholder='Search'
							value={searchedValue}
							onChange={(e) => setSearchedValue(e.target.value)}
							aria-label='Search'
							sticky='top'
						/>
					</div>
				</div>
			</div>
			<div style={{ marginTop: '130px' }}>
				<Table
					data={filteredPlaces}
					columns={columns}
					onSort={setSortValues}
					sortColumn={sortValues}
				/>
			</div>
		</div>
	);
};

export default PlacesTable;
