import React, { Fragment, useState } from "react";
import {
  Button,
  Switch,
  ButtonGroup,
  Divider,
  Intent
} from "@rt-commercial-engineering/rt-design-system";

const DividerComponent = (args:any) => {
  const [vertical, setVertical] = useState(false);
  const handleVerticalChange = () => setVertical(!vertical);
  return (
    <Fragment>
      <Switch
        label="Vertical"
        checked={vertical}
        onChange={handleVerticalChange}
      />
      <ButtonGroup vertical={vertical}>
        <Button intent={Intent.PRIMARY} text="File" />
        <Button text="Edit" />
        <Divider {...args} />
        <Button text="Create" />
        <Button text="Delete" />
      </ButtonGroup>
    </Fragment>
  );
};

export default DividerComponent;
