import React, { Fragment, useState } from "react";
import {
  Slider,
  ProgressBar,
} from "@rt-commercial-engineering/rt-design-system";

const ProgressBarComponent = () => {
  const renderLabel = (value: number) => value.toFixed(1);
  const [value, setValue] = useState(0.7);
  const handleValueChange = (value: number) => setValue(value);
  const myStyle = {
    display: "flex",
    flexWrap: "wrap",
    padding: "30px 15px",
  } as React.CSSProperties;
  return (
    <Fragment>
      <div style={myStyle}>
        <Slider
          labelStepSize={1}
          min={0}
          max={1}
          onChange={handleValueChange}
          labelRenderer={renderLabel}
          showTrackFill={false}
          stepSize={0.1}
          value={value}
        />
      </div>
      <div className="bp3-customise">
        <ProgressBar value={value} intent='success'/>
      </div>
    </Fragment>
  );
};

export default ProgressBarComponent;
