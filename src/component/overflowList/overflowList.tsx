import React, { Fragment, useState } from "react";
import {
  Slider,
  Card,
  OverflowList,
} from "@rt-commercial-engineering/rt-design-system";

const OverflowListComponent = () => {
  const [width, setWidth] = useState(50);
  const handleChangeWidth = (width: number) => setWidth(width);
  const renderLabel = (value: number) => {
    return `${value}%`;
  };

  const myStyle = {
    display: "flex",
    flexWrap: "wrap",
    padding: "30px 15px",
  } as React.CSSProperties;
  return (
    <Fragment>
      <div style={myStyle}>
        <Slider
          labelRenderer={renderLabel}
          labelStepSize={10}
          min={10}
          max={100}
          onChange={handleChangeWidth}
          showTrackFill={false}
          value={width}
        />
      </div>
      <div style={myStyle}>
        <Card elevation={0} style={{ width: `${width}%` }}>
          <OverflowList items={ITEMS} collapseFrom='start'/>
        </Card>
      </div>
    </Fragment>
  );
};

const ITEMS: any[] = [
    { text: 'Menu 1' },
    { text: 'Menu 2' },
    { text: 'Menu 3' },
    { href: '#', text: 'First Section' },
    { href: '#', text: 'Second Section' },
    { text: 'Third Section', current: true },
  ];

export default OverflowListComponent;
