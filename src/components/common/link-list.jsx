import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

const LinkList = (props) => {
	const { data } = props;

	return (
		<ListGroup key={`listing`}>
			{data.map((item) => (
				<ListGroup.Item className={`bg-${item.color}`}>
					<Link
						key={item._id}
						to={item.path}
						style={{
							textDecoration: 'none',
							color: item.color !== 'white' ? 'white' : 'black',
						}}
					>{`${item.creatDate}, ${item.label}`}</Link>
				</ListGroup.Item>
			))}
		</ListGroup>
	);
};

export default LinkList;
