import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { styled } from "@mui/material/styles";
import dayjs from "dayjs";
import HomeMap from './HomeMap'

const CustomPickersDay = styled(PickersDay)(({ theme, styleProps }) => ({
  ...(styleProps?.hasEvent && {
    backgroundColor: styleProps.eventColor,
    color: theme.palette.common.white,
  }),
}));

function RightbarComponent() {
  // const [value, setValue] = React.useState(dayjs());

  // // Define your events here. The key is the date in YYYY-MM-DD format.
  // const events = {
  //   "2024-05-10": { label: "Team Meeting", color: "blue" },
  //   "2024-05-16": { label: "Project Deadline", color: "red" },
  // };

  // // Custom render for days in the calendar
  // const renderDay = (day, selectedDate, dayInCurrentMonth, dayComponent) => {
  //   const dayFormatted = day.format("YYYY-MM-DD"); // format day to match keys in events object
  //   const event = events[dayFormatted];

  //   // If there is an event on this day, customize the appearance
  //   if (event) {
  //     return (
  //       <CustomPickersDay
  //         {...dayComponent.props}
  //         styleProps={{ hasEvent: true, eventColor: event.color }}
  //       />
  //     );
  //   }

  //   // Return the default day component if there is no event
  //   return (
  //     <CustomPickersDay
  //       {...dayComponent.props}
  //       styleProps={{ hasEvent: false }}
  //     />
  //   );
  // };

  return (
    <div>
      {/* <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDatePicker
            displayStaticWrapperAs="desktop"
            orientation="portrait"
            openTo="day"
            value={value}
            onChange={(newValue) => setValue(newValue)}
            renderDay={renderDay}
          />
        </LocalizationProvider>
      </div> */}
      <div>
        <HomeMap />
      </div>
    </div>
  );
}

export default RightbarComponent;
