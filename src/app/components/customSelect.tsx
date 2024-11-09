'use client'

import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { SelectChangeEvent } from '@mui/material';

interface SelectProps {
	values: string[];
}

export default function CustomSelect(props: SelectProps) {
	const [selectedPrefecture, setSelectedPrefecture] = React.useState<string>(props.values[0]);

	const handleChange = (event: SelectChangeEvent<string>) => {
		setSelectedPrefecture(event.target.value);
	};

	return (
		<Select
			value={selectedPrefecture}
			onChange={handleChange}
			displayEmpty
			sx={{
				width: '150px',
				padding: 0,
				'& .MuiSelect-icon': {
					right: '0',
				},
			}}
		>
			{props.values.map((prefecture) => (
				<MenuItem key={prefecture} value={prefecture}>
					{prefecture}
				</MenuItem>
			))}
		</Select>
	);
}
