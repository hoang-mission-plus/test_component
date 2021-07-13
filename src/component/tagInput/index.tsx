import React, { useEffect, useState } from "react";
import {
  Button,
  Switch,
  TagInput,
} from "@rt-commercial-engineering/rt-design-system";
function TagInputValue(args: any) {
  const VALUE = ["Placeholder"];
  const [values, setValue] = useState(args.values || "");
  const handleChange = (values: React.ReactNode[]) => setValue(values);
  const [tagRightIcon, setTagRightIcon] = useState(false);
  const handleTagRightIcon = () => setTagRightIcon(!tagRightIcon);
  const getRightIcon = tagRightIcon ? (
    <Button
      icon={values.length >= 1 ? "cross" : "refresh"}
      minimal
      onClick={() => (values.length >= 1 ? setValue([]) : setValue(VALUE))}
    />
  ) : undefined;
  useEffect(() => {
    setValue(args.values);
  }, [args.values]);
  const newProps = { ...args, values };
  if (!newProps.leftIcon) newProps.leftIcon = undefined;
  return (
    <div className="bp3-customise">
      <Switch
        id="icon"
        label="Enable Right Icon"
        checked={tagRightIcon}
        onChange={handleTagRightIcon}
      />
      <TagInput
        {...newProps}
        onChange={handleChange}
        rightElement={getRightIcon}
      />
    </div>
  );
}

export default TagInputValue;
