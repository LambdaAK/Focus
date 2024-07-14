import { Typography } from "@mui/material"
import "./ProfileSettings.css"
import { TimePicker } from "@mui/x-date-pickers"
import dayjs, { Dayjs } from "dayjs"
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

const WorkingHoursDay = (props: {day: string, disabled: boolean, setDisabled: Function, start: Dayjs, setStart: Function, end: Dayjs, setEnd: Function}) => {
  const {disabled, setDisabled, start, setStart, end, setEnd} = props
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

  const [mondayDisabled, setMondayDisabled] = useState<boolean>(false)
  const [startMonday, setStartMonday] = useState<dayjs.Dayjs>(dayjs())
  const [endMonday, setEndMonday] = useState<dayjs.Dayjs>(dayjs())

  const [tuesdayDisabled, setTuesdayDisabled] = useState<boolean>(false)
  const [startTuesday, setStartTuesday] = useState<dayjs.Dayjs>(dayjs())
  const [endTuesday, setEndTuesday] = useState<dayjs.Dayjs>(dayjs())

  const [wednesdayDisabled, setWednesdayDisabled] = useState<boolean>(false)
  const [startWednesday, setStartWednesday] = useState<dayjs.Dayjs>(dayjs())
  const [endWednesday, setEndWednesday] = useState<dayjs.Dayjs>(dayjs())

  const [thursdayDisabled, setThursdayDisabled] = useState<boolean>(false)
  const [startThursday, setStartThursday] = useState<dayjs.Dayjs>(dayjs())
  const [endThursday, setEndThursday] = useState<dayjs.Dayjs>(dayjs())

  const [fridayDisabled, setFridayDisabled] = useState<boolean>(false)
  const [startFriday, setStartFriday] = useState<dayjs.Dayjs>(dayjs())
  const [endFriday, setEndFriday] = useState<dayjs.Dayjs>(dayjs())

  const [saturdayDisabled, setSaturdayDisabled] = useState<boolean>(true)
  const [startSaturday, setStartSaturday] = useState<dayjs.Dayjs>(null)
  const [endSaturday, setEndSaturday] = useState<dayjs.Dayjs>(null)

  const [sundayDisabled, setSundayDisabled] = useState<boolean>(true)
  const [startSunday, setStartSunday] = useState<dayjs.Dayjs>(null)
  const [endSunday, setEndSunday] = useState<dayjs.Dayjs>(null)


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
        <WorkingHoursDay
          day = {"Mo"}
          disabled = {mondayDisabled}
          setDisabled = {setMondayDisabled}
          start = {startMonday}
          setStart = {setMondayDisabled}
          end = {endMonday}
          setEnd = {setEndMonday}/>

        <WorkingHoursDay
          day = {"Tu"}
          disabled = {tuesdayDisabled}
          setDisabled = {setTuesdayDisabled}
          start = {startTuesday}
          setStart = {setStartTuesday}
          end = {endTuesday}
          setEnd = {setEndTuesday}/>

        <WorkingHoursDay
          day = {"We"}
          disabled = {wednesdayDisabled}
          setDisabled = {setWednesdayDisabled}
          start = {startWednesday}
          setStart = {setStartWednesday}
          end = {endWednesday}
          setEnd = {setEndWednesday}/>

        <WorkingHoursDay
          day = {"Th"}
          disabled = {thursdayDisabled}
          setDisabled = {setThursdayDisabled}
          start = {startThursday}
          setStart = {setStartThursday}
          end = {endThursday}
          setEnd = {setEndThursday}/>

        <WorkingHoursDay
          day = {"Fr"}
          disabled = {fridayDisabled}
          setDisabled = {setFridayDisabled}
          start = {startFriday}
          setStart = {setStartFriday}
          end = {endFriday}
          setEnd = {setEndFriday}/>

        <WorkingHoursDay
          day = {"Sa"}
          disabled = {saturdayDisabled}
          setDisabled = {setSaturdayDisabled}
          start = {startSaturday}
          setStart = {setStartSaturday}
          end = {endSaturday}
          setEnd = {setEndSaturday}/>

        <WorkingHoursDay
          day = {"Su"}
          disabled = {sundayDisabled}
          setDisabled = {setSundayDisabled}
          start = {startSunday}
          setStart = {setStartSunday}
          end = {endSunday}
          setEnd = {setEndSunday}/>
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