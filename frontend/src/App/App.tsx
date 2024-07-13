'use client'
import "./App.css"

import { DragHandleDots2Icon } from '@radix-ui/react-icons'
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import Logo from "../Logo/Logo";
import React, { useEffect, useState } from "react";
import { BottomNavigation, BottomNavigationAction, createTheme, ThemeProvider } from "@mui/material";

import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const Nav: React.FC = () => {
  
  const pageNameToRoute = {
    "Dashboard": "/dashboard",
    "Profile Settings": "/profilesettings",
    "AI Assistant": "/aiassistant"
  }

  const routeToPageName = Object.keys(pageNameToRoute).map((key) => pageNameToRoute[key])

  const [value, setValue] = useState(0)

  const location = useLocation()

  useEffect(() => {
    setValue(routeToPageName.indexOf(location.pathname))
  })
  
  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        window.location.replace(routeToPageName[newValue])
      }}
      >

  <BottomNavigationAction label="Dashboard" icon={<RestoreIcon />} />
  <BottomNavigationAction label="Profile Settings" icon={<FavoriteIcon />} />
  <BottomNavigationAction label="AI Assistant" icon={<LocationOnIcon />} />
      
    </BottomNavigation>
  )
}


const TopBar: React.FC = () => {
  
  
  return (
    <div className = "top-bar">
        <Logo/>
        <Nav/>
    </div>
  )
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#5c6bc0', // Primary color
    },
    secondary: {
      main: '#ff4081', // Secondary color
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Custom font family
    h1: {
      fontSize: '2rem', // Custom font size for h1
    },
    // Add more typography settings as needed
  },
  spacing: 8, // Default spacing unit
  // Add more customizations as needed
});



const LeftBar: React.FC = () => {
  
  return (
    <div className = "left-bar">
      
    </div>
  )
}


const Dashboard: React.FC = () => {
  return (
    <PanelGroup autoSaveId="example" direction="horizontal">
      <Panel defaultSize = {25}>
        Left section
      </Panel>

      <PanelResizeHandle className = "resize-handle">
        <DragHandleDots2Icon className = "drag-icon"/>
      </PanelResizeHandle>
      <Panel defaultSize = {75}>
        Right section
      </Panel>


    </PanelGroup>
  )
}

const ProfileSettings: React.FC = () => {
  return (
    <div>
      Profile Settings
    </div>
  )
}

const AIAssistant: React.FC = () => {
  return (
    <div>
      AI Assistant
    </div>
  )

}


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        
        <Router>
        <TopBar/>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile-settings" element={<ProfileSettings />} />
            <Route path="/ai-assistant" element={<AIAssistant />} />
          </Routes>
          
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;