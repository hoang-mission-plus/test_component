import React, { useState } from "react";
import {
  DatePicker,
  FormGroup,
  Switch,
  TimePicker,
  DateInput,
  DateRangePicker,
} from "@rt-commercial-engineering/rt-design-system";

export const IndexDateTime = () => {
  const [stateTime, setStateTime] = useState(false);
  const [stateDatePicker, setStateDatePicker] = useState(false);
  const [stateDateRangPicker, setStateDateRangPicker] = useState(false);
  const [stateDateInput, setStateDateInput] = useState(false);

  const myStyle = {
    container: {
      display: "flex",
      alignItems: "center",

      flex: "1 1 auto",
      minWidth: "0px",
      maxWidth: "100%",
    },
  };

  return (
    <div>
      <div>
        <FormGroup>
          <Switch
            label="TimePicker"
            onChange={() => setStateTime(!stateTime)}
          />
          <Switch
            label="DatePicker"
            onChange={() => setStateDatePicker(!stateDatePicker)}
          />
          <Switch
            label="DateRangPicker"
            onChange={() => setStateDateRangPicker(!stateDateRangPicker)}
          />
          <Switch
            label="DateInput"
            onChange={() => setStateDateInput(!stateDateInput)}
          />
        </FormGroup>
      </div>
      <div>{stateTime ? <TimePicker /> : null}</div>
      <div>
        {stateDatePicker ? (
          <div style={myStyle.container}>
            <DatePicker timePickerProps={{ useAmPm: true }} />
          </div>
        ) : null}
      </div>
      <div style={myStyle.container}>
        {stateDateRangPicker ? <DateRangePicker /> : null}
      </div>
      <div style={myStyle.container}>
        {stateDateInput ? (
          <DateInput
            formatDate={(date) => date.toLocaleString()}
            parseDate={(str) => new Date(str)}
            placeholder={"MM/DD/YYYY"}
            highlightCurrentDay
          />
        ) : null}
      </div>
    </div>
  );
};
