import {
  Slider,
  Switch,
  Spinner,
} from "@rt-commercial-engineering/rt-design-system";

import React, { Fragment, useState } from "react";

const SpinnerComponent = () => {
  const renderLabel = (value: number) => value.toFixed(1);
  const [size, setSize] = useState(16);
  const handleSizeChange = (size: number) => setSize(size);
  const [hasValue, setHasValue] = useState(false);
  const handleIndeterminateChange = () => setHasValue(!hasValue);
  const [value, setValue] = useState(0.5);
  const handleValueChange = (value: number) => setValue(value);
  const newProps = { size, hasValue, value };
  const myStyle = {
    display: "flex",
    flexWrap: "wrap",
    padding: "30px 15px",
  } as React.CSSProperties;
  return (
    <Fragment>
      <div style={myStyle}>
        <span>Size</span>
        <br />
        <Slider
          labelStepSize={16}
          min={0}
          max={96}
          showTrackFill={false}
          stepSize={2}
          value={size}
          onChange={handleSizeChange}
        />
      </div>
      <div style={myStyle}>
        <Switch
          label="Known value"
          checked={hasValue}
          onChange={handleIndeterminateChange}
        />
        <br />
        <Slider
          disabled={!hasValue}
          labelStepSize={0.1}
          min={0}
          max={1}
          onChange={handleValueChange}
          labelRenderer={renderLabel}
          showTrackFill={false}
          stepSize={0.1}
          value={value}
        />
      </div>
      <div style={myStyle}>
        <Spinner
          {...newProps}
          size={size}
          value={hasValue ? value : undefined}
          intent="success"
        />
      </div>
    </Fragment>
  );
};

export default SpinnerComponent;
