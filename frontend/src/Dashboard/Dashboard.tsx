import { DateCalendar } from "@mui/x-date-pickers";
import { DragHandleDots2Icon } from "@radix-ui/react-icons";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import "./Dashboard.css";
import React from "react";


const Events: React.FC = () => {

  return (
    <div className = "events">
      <h1>Events</h1>
    </div>
  )
}

const Tasks: React.FC = () => {
  return (
    <div className = "tasks">
      <h1>Tasks</h1>
    </div>
  )
}

const LeftBar: React.FC = () => {
  
  return (
    <div className = "left-bar">
      <DateCalendar className = "calendar"/>
      <Events/>
      <Tasks/>
    </div>
  )
}

const Dashboard: React.FC = () => {
  return (
    <PanelGroup autoSaveId="example" direction="horizontal">
      <Panel defaultSize = {25} minSize = {10} maxSize = {30}>
        <LeftBar/>F
      </Panel>

      <PanelResizeHandle className = "resize-handle">
      </PanelResizeHandle>
      <Panel defaultSize = {75}>
        Right section
      </Panel>


    </PanelGroup>
  )
}

export default Dashboard;