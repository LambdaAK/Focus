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
import Dashboard from "../Dashboard/Dashboard";
import ProfileSettings from "../Profile Settings/ProfileSettings";
import firebaseConfig from "../firebaseConfig";

import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, getAuth, onAuthStateChanged } from "firebase/auth";
import { Database, getDatabase, set } from "firebase/database";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";


const app: FirebaseApp = initializeApp(firebaseConfig);
const database: Database = getDatabase(app)
const auth: Auth = getAuth()

const Nav: React.FC = () => {
  
  const pageNameToRoute = {
    "Dashboard": "/dashboard",
    "Profile Settings": "/profilesettings",
    "AI Assistant": "/aiassistant",
    "Login": "/login",
    "Sign up": "/signup"
  }

  const routeToPageName = Object.keys(pageNameToRoute).map((key) => pageNameToRoute[key])

  const [value, setValue] = useState(0)

  const [user, setUser] = useState(null)

  const location = useLocation()

  useEffect(() => {
    setValue(routeToPageName.indexOf(location.pathname))

    onAuthStateChanged(auth, (user) => {
      setUser(user)
      console.dir(user, {depth: null})
    })
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
    <BottomNavigationAction label="Sign up" icon={<LocationOnIcon />} />
    
      {
        (() => {
          if (user) return <BottomNavigationAction label="Logout" icon={<LocationOnIcon />} onClick = {() => {
            window.location.replace("/")
          }}/>
          else return <BottomNavigationAction label="Login" icon={<LocationOnIcon />} onClick = {() => {
            window.location.replace("/login")
          }
          }/>
        })()
      }
    
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

const AIAssistant: React.FC = () => {
  return (
    <div>
      AI Assistant
    </div>
  )

}

function App() {
  return (
    <div className = "app">
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Router>
        <TopBar/>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profilesettings" element={<ProfileSettings />} />
            <Route path="/ai-assistant" element={<AIAssistant />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
          </Routes>
         
        </Router>
        </LocalizationProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;

