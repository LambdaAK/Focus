import { DateCalendar } from "@mui/x-date-pickers";
import { DragHandleDots2Icon } from "@radix-ui/react-icons";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import "./Dashboard.css";
import React from "react";
import { Typography } from "@mui/material";


const Events: React.FC = () => {

  return (
    <div className = "events">
      <Typography variant = "h4"
      sx = {{
        width: "fit-content",
        marginLeft: "auto",
        marginRight: "auto"
      }}
      >Events</Typography>
    </div>
  )
}

const Tasks: React.FC = () => {
  return (
    <div className = "tasks">
      <Typography variant = "h4"
      sx = {{
        width: "fit-content",
        marginLeft: "auto",
        marginRight: "auto"
      }}
      >Tasks</Typography>
    </div>
  )
}

const LeftBar: React.FC = () => {
  
  return (
    <div className = "left-bar">
      <DateCalendar className = "calendar"
      sx = {{
        marginBottom: "10px"
      }}
      />
      <Events/>
      <Tasks/>
    </div>
  )
}

const DayOfTheWeek = (props: {day: string}) => {
  return (
    <div className = "day-of-the-week">
      <Typography variant = "h5"
      sx = {{
        width: "fit-content",
        marginLeft: "auto",
        marginRight: "auto"
      }}
      >{props.day}</Typography>
    </div>
  )
}

const CalendarHeader: React.FC = () => {
  // display the current month and year
  return (
    <div className = "calendar-header">
      <Typography variant = "h4"
      sx = {{
        width: "fit-content",
        marginLeft: "auto",
        marginRight: "auto"
      }}
      >August 2021</Typography>
    </div>
  )
}

const WeeklyCalendar: React.FC = () => {
  return (
    <div className = "weekly-calendar">
      <CalendarHeader/>

      <div className = "weekly-calendar-days">
        <DayOfTheWeek day = "Mo"/>
        <DayOfTheWeek day = "Tu"/>
        <DayOfTheWeek day = "We"/>
        <DayOfTheWeek day = "Th"/>
        <DayOfTheWeek day = "Fr"/>
        <DayOfTheWeek day = "Sa"/>
        <DayOfTheWeek day = "Su"/>
      </div>
    </div>
  )
}

const Dashboard: React.FC = () => {
  return (
    <PanelGroup autoSaveId="example" direction="horizontal">
      <Panel defaultSize = {25} minSize = {10} maxSize = {30}>
        <LeftBar/>
      </Panel>

      <PanelResizeHandle className = "resize-handle">
      </PanelResizeHandle>
      <Panel defaultSize = {75}>
      <WeeklyCalendar/>
      </Panel>


    </PanelGroup>
  )
}

export default Dashboard;