import React from "react";
import {
  Button,
  FormGroup,
  Switch,
} from "@rt-commercial-engineering/rt-design-system";
import { useState } from "react";

const ButtonComponent = (props: any) => {
  const [stateMinimal, setStateMinimal] = useState(false);
  const [stateOutlined, setStateOutlined] = useState(false);
  return (
    <div>
      <div>
        <FormGroup>
          <Switch
            onChange={() => setStateMinimal(!stateMinimal)}
            label="minimal"
            checked={stateMinimal}
            disabled={stateOutlined}
          />
          <Switch
            onChange={() => setStateOutlined(!stateOutlined)}
            label="oulined"
            checked={stateOutlined}
            disabled={stateMinimal}
          />
        </FormGroup>
      </div>
      <div>
        <Button
          className="btn_default"
          intent={props.intent}
          minimal={stateMinimal}
          outlined={stateOutlined}
          text="default"
        />
        <Button
          active
          intent={props.intent}
          minimal={stateMinimal}
          outlined={stateOutlined}
          text="press"
        />
        <Button
          className="btn_hover"
          intent={props.intent}
          minimal={stateMinimal}
          outlined={stateOutlined}
          text="hover"
        />
        <Button
          disabled
          intent={props.intent}
          minimal={stateMinimal}
          outlined={stateOutlined}
          text="disable"
        />
      </div>
    </div>
  );
};

export default ButtonComponent;
