import { Callout } from "@rt-commercial-engineering/rt-design-system";

const CalloutComponent = () => {
  return (
    <Callout
      title="Test Callout"
      children="This is an example of a default callout. This is a subtitle text."
      icon="search"
      intent="success"
    />
  );
};

export default CalloutComponent;
