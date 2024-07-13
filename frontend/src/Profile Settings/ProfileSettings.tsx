import { Typography } from "@mui/material"
import "./ProfileSettings.css"
import { TimePicker } from "@mui/x-date-pickers"
import dayjs from "dayjs"

const DayOfTheWeekLabel = (props: {day: string}) => {
  return (
    <Typography variant = "h6"
    sx = {{
      marginLeft: "auto",
      marginRight: "10px",
      width: "fit-content"
    }}
    >{props.day}</Typography>
  )
}

const WorkingHoursDay = (props: {day: string}) => {
  return (
    <div className = "working-hours-for-day">
    <DayOfTheWeekLabel day = {props.day}/>
        <TimePicker
          label="Start Time"
        />
        <TimePicker
          label="End Time"
        />
    </div>
  )
}

const WorkingHours = () => {
  return (
    <div className = "working-hours">
      <Typography variant = "h5"
      sx = {{
        marginLeft: "auto",
        marginRight: "auto",
        width: "fit-content"
      }}
      >Working Hours</Typography>


      <div className = "times">
        <WorkingHoursDay day = "Mo"/>
        <WorkingHoursDay day = "Tu"/>
        <WorkingHoursDay day = "We"/>
        <WorkingHoursDay day = "Th"/>
        <WorkingHoursDay day = "Fr"/>
        <WorkingHoursDay day = "Sa"/>
        <WorkingHoursDay day = "Su"/>
      </div>

    </div>
  )
}


const DurationPreferences = () => {
  return (
    <div className = "duration-preferences">
      <Typography variant = "h5"
      sx = {{
        marginLeft: "auto",
        marginRight: "auto",
        width: "fit-content"
      }}
      >Duration Preferences</Typography>

      <div className = "pref-break-length">
        <Typography variant = "h6">Break Length</Typography>
        <TimePicker
          label="Break Length"
        />
      </div>

    </div>
  )
}


const ProfileSettings = () => {
  return (
    <div className = "profile-settings">
      <WorkingHours/>
      <DurationPreferences/>
    </div>
  )
}

export default ProfileSettings; 