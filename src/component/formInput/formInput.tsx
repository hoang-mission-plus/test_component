import React, { useEffect, useState } from "react";
import {
  Button,
  FileInput,
  FormGroup,
  InputGroup,
  Intent,
  NumericInput,
  Switch,
  TagInput,
  // Tag,
} from "@rt-commercial-engineering/rt-design-system";
import SVG from "react-inlinesvg";
import Search from "../../image/Search.svg";

const FormInput: React.FC = (props: any) => {
  const VALUE = ["Placeholder"];
  const { rightElement, leftElement } = props;
  const [fileInput, setFileInput] = useState(false);
  const [numericInput, setNumericInput] = useState(false);
  const [tagInput, setTagInput] = useState(false);
  const [textInput, setTextInput] = useState(false);
  const rightIcon = <Button minimal icon="edit" />;
  const rightText = rightElement || (
    <Button small intent={Intent.PRIMARY} text="Default" />
  );
  const leftText = leftElement || (
    <Button small intent={Intent.PRIMARY} text="Default" />
  );
  const Icon = <SVG src={Search} />;
  const [values, setValue] = useState(VALUE || "");
  const handleChange = (values: any[]) => setValue(values);

  const getRightIcon = (
    <Button
      icon={values.length >= 1 ? "cross" : "refresh"}
      minimal
      onClick={() => (values.length >= 1 ? setValue([]) : setValue(VALUE))}
    />
  );

  return (
    <div>
      <div>
        <FormGroup>
          <Switch
            label="File Input"
            onChange={() => setFileInput(!fileInput)}
            disabled={numericInput || tagInput || textInput}
          />
          <Switch
            label="Numeric Input"
            onChange={() => setNumericInput(!numericInput)}
            disabled={fileInput || tagInput || textInput}
          />
          <Switch
            label="Tag Input"
            onChange={() => setTagInput(!tagInput)}
            disabled={fileInput || numericInput || textInput}
          />
          <Switch
            label="Text Input"
            onChange={() => setTextInput(!textInput)}
            disabled={numericInput || fileInput || tagInput}
          />
        </FormGroup>
      </div>
      <div>{fileInput ? <FileInput /> : null}</div>
      <div>
        {numericInput ? (
          <NumericInput placeholder="Enter a number" min={0} />
        ) : null}
      </div>
      <div>
        {tagInput ? (
          <div className="bp3-customise">
            <TagInput
              large
              values={values}
              onChange={(e: any) => handleChange(e)}
              rightElement={getRightIcon}
            />
          </div>
        ) : null}
      </div>
      <div>
        {textInput ? (
          <div style={{ width: "300px" }}>
            <FormGroup label="Input Text">
              <InputGroup placeholder="Input Text" />{" "}
            </FormGroup>
            <FormGroup label="Input Icon">
              <InputGroup placeholder="Input Icon" rightElement={rightIcon} />{" "}
            </FormGroup>
            <FormGroup label="Input With Floating Button">
              <InputGroup placeholder="Input Icon" rightElement={rightIcon} />{" "}
            </FormGroup>
            <FormGroup label="Input With Sticky Button">
              <InputGroup rightElement={rightText} />{" "}
              <InputGroup leftElement={leftText} />{" "}
            </FormGroup>
            <FormGroup label="Input With Unit">
              <InputGroup
                placeholder="Input With Unit"
                rightElement={<span>uni</span>}
              />{" "}
            </FormGroup>
            <FormGroup label="Input With Search">
              <InputGroup
                placeholder="Search"
                rightElement={<Button minimal rightIcon={Icon} />}
              />{" "}
            </FormGroup>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default FormInput;
