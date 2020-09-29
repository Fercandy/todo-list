import React, { useState } from 'react';
import { Input, Button, Form } from 'antd';
import ListItem from '../ListItem';
import { InputWrapper } from './style';

const InputStyle = () => {
	const [items, setItems] = useState([]);
	const [value, setValue] = useState('');

	const onFinish = (values) => {
		console.log({ values });
		const data = {
			id: items.length + 1,
			task: values.item,
		};

		setItems([...items, data]);
		setValue('');
	};

	const handleChange = (e) => {
		const eValue = e.target.value;

		setValue(eValue);
	};

	return (
		<InputWrapper>
			<Form onFinish={onFinish}>
				<Form.Item name='item'>
					<Input
						placeholder='Basic usage'
						value={value}
						onChange={(e) => handleChange(e)}
					/>
				</Form.Item>
				<Form.Item>
					<Button htmlType='submit' type='submit'>
						Submit
					</Button>
				</Form.Item>
			</Form>
			<ListItem items={items} />
		</InputWrapper>
	);
};

export default InputStyle;
