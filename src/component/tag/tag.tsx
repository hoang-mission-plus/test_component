import React, { Fragment, useState } from "react";
import { Tag, Switch } from "@rt-commercial-engineering/rt-design-system";

const TagComponent = () => {
  const func = () => {};
  const [removable, setRemovable] = useState(false);
  const handleChange = () => {
    setRemovable(!removable);
  };

  const [icon, setIcon] = useState(false);
  const addIcon = () => {
    setIcon(!icon);
  };
  return (
    <Fragment>
      <div>
        <Switch label="Enable close icon" onChange={handleChange} />
      </div>
      <div>
        <Switch label="Add icon" onChange={addIcon} />
      </div>
      <div>
        <Tag
          onRemove={removable ? func : undefined}
          round={true}
          large={true}
          icon={icon === true ? "add" : undefined}
        >
          Lable
        </Tag>
      </div>
    </Fragment>
  );
};

export default TagComponent;
