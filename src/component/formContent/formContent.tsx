import React from "react";
import {
  Button,
  FormGroup,
  InputGroup,
  TextArea,
} from "@rt-commercial-engineering/rt-design-system";
import { Col, Container, Row } from "react-bootstrap";

const FormContent = () => {
  return (
    <Container>
      <h3>FORM CONTENT</h3>
      <Row>
        <Col md={6}>
          <FormGroup label="Email">
            <InputGroup placeholder="ex:admin@gmail.com" />
          </FormGroup>
          <FormGroup label="Name">
            <InputGroup placeholder="ex:Nguyen Van A" />
          </FormGroup>
          <FormGroup label="Address">
            <InputGroup placeholder="ex: Kinh Dao - An My - My Duc - Ha Noi" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup label="Phone Number ">
            <InputGroup placeholder="ex: 0123456789" />
          </FormGroup>
          <FormGroup label="Enter Content">
            <TextArea
              placeholder="enter text ..."
              growVertically={false}
              large={true}
              fill
              rows={4}
            />
          </FormGroup>
        </Col>
      </Row>
      <Button intent="primary" text="SUBMIT" type="submit" />
    </Container>
  );
};

export default FormContent;
