import React from 'react';
import NavigationBar from './NavigationBar';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import MusicPlayerControl from './MusicPlayerControl';
import Box from '@mui/material/Box';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <Box sx={{ display: 'flex'

 }}>
      <CssBaseline />
      <NavigationBar />
      <Sidebar />
      <MainContent />
      <MusicPlayerControl />
    </Box>
  );
}

export default App;