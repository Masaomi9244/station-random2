import { Box, Button, FormControl, Typography } from "@mui/material"
import PullDown from "./components/pulldown";

export default function Home() {
  const areas = ['関東', '東北'];
  const prefectures = ['神奈川県', '東京都', '埼玉県', '千葉県',];
  const lines = ['JR横浜線', '京浜急行本線', 'JR中央線', '小田急小田原線']

  return (
    <Box sx={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
      <Typography sx={{ marginBottom: '16px', marginRight: '320px', fontSize: '32px' }}>StationRandom</Typography>
      <Box sx={{ display: 'flex', alignItems: 'end' }}>
        <PullDown label={'地方'} values={areas}></PullDown>
        <PullDown label={'都道府県'} values={prefectures}></PullDown>
        <PullDown label={'路線'} values={lines}></PullDown>
        <Button variant="contained" sx={{ marginLeft: '16px' }}>検索</Button>
      </Box>
    </Box>
  );
}
