import React from 'react';

const ListItem = ({ items }) => {
	const renderItems = () =>
		items.map((item) => <div key={item.id}>{item.task}</div>);

	if (!items) {
		return 'Loading ...';
	}
	return <div>{renderItems()}</div>;
};

export default ListItem;
