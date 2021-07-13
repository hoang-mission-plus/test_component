import React, { useState } from "react";
import { Button } from "@rt-commercial-engineering/rt-design-system";
import { Col, Container, Row } from "react-bootstrap";
import MultiSelectComponent from "./mutilSelect";
import SingalSelect from "./select";
function IndexSelect() {
  const [singleSelect, setSingleSelect] = useState(false);
  const [multiSelect, setMultiSelect] = useState(false);
  return (
    <Container>
      <Row>
        <Col md={6}>
          <div>
            <Button
              intent="primary"
              text="Single Select"
              onClick={() => setSingleSelect(!singleSelect)}
              disabled={multiSelect}
            />
          </div>
          <div style={{ marginTop: "50px" }}>
            <Button
              intent="primary"
              text="Multi Select"
              onClick={() => setMultiSelect(!multiSelect)}
              disabled={singleSelect}
            />
          </div>
        </Col>
        <Col md={6}>
          <div>
            {singleSelect ? (
              <div>
                <h3>Single Select</h3>
                <SingalSelect />
              </div>
            ) : null}
          </div>
          <div>
            {multiSelect ? (
              <div>
                <h3>Multi Select</h3>
                <MultiSelectComponent />
              </div>
            ) : null}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default IndexSelect;
