import React, { useState, Fragment } from "react";
import { Button, Collapse } from "@rt-commercial-engineering/rt-design-system";

const CollapseComponent = (args: any) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);
  const onClick = () => setIsOpen(!isOpen);
  return (
    <Fragment>
      <Button
        onClick={() => onClick()}
        text={isOpen ? "Hide build log" : "Show build log"}
        intent="primary"
      />
      <Collapse {...args} isOpen={isOpen} keepChildrenMounted={false}>
        Dummy text.
      </Collapse>
    </Fragment>
  );
};

export default CollapseComponent;
