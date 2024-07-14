import { Typography } from "@mui/material"
import "./ProfileSettings.css"
import { TimePicker } from "@mui/x-date-pickers"
import dayjs from "dayjs"
import { useState } from "react"

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

  const [disabled, setDisabled] = useState<boolean>(true ? ["Sa", "Su"].includes(props.day) : false)
  const [start, setStart] = useState<dayjs.Dayjs>(dayjs())
  const [end, setEnd] = useState<dayjs.Dayjs>(dayjs())

  return (
    <div className = "working-hours-for-day">
    <div className = "day-of-the-week-label"
    onClick = {
      () => {
        // if it's currently not disabled, set start and end to null
        if (!disabled) {
          setStart(null)
          setEnd(null)
        }
        setDisabled(!disabled)
      }
    }>
      <DayOfTheWeekLabel day = {props.day}/>
    </div>
        <TimePicker
          label="Start Time"
          disabled = {disabled}
          value = {start}
          onChange = {
            (date) => {
              setStart(date)
            }
          }
        />
        <TimePicker
          label="End Time"
          disabled = {disabled}
          value = {end}
          onChange = {
            (date) => {
              setEnd(date)
            }
          }
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