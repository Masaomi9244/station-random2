import { Box, FormControl, Typography } from "@mui/material";
import dynamic from "next/dynamic";

const CustomSelectComponent = dynamic(() => import("./customSelect"), { ssr: false });

interface PullDownProps {
	label: string;
	values: string[];
}

export default function PullDown(props: PullDownProps) {
	return (
		<Box sx={{ marginLeft: '16px', width: '150px' }}>
			<Typography color='textDisabled'>{props.label}</Typography>
			<FormControl variant="standard">
				<CustomSelectComponent values={props.values} />
			</FormControl>
		</Box>
	)
}