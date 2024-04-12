import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
// ... other icons

export default function Sidebar() {
  return (
    <List>
      {['New Releases', 'Top Charts', 'Podcasts', 'Radio'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>
            {/* You can choose icons based on the text or index */}
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );
}
