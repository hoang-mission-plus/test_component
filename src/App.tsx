import React, { useState } from "react";
import Quizz from "./component/game/quizz.app";
import Header from "./container/header/index";
import ButtonComponent from "./component/button/index";
import FormContent from "./component/formContent/formContent";
import FormInput from "./component/formInput/formInput";
import IndexSelect from "./component/select/index";
import ActionTable from "./component/table/action.Table";
import Overlay from "./component/sprintNews/overlay";
import { IndexDateTime } from "./component/dateTime/index";
import {
  Button,
  Card,
  Tab,
  Tabs,
} from "@rt-commercial-engineering/rt-design-system";
import "./App.scss";
import { Container } from "react-bootstrap";
import CalloutComponent from "./component/callout/callout";
import NoneIdealStateComponent from "./component/noneIdealState/noneIdealState";
import SpinnerComponent from "./component/spinner/spinner";
import TreeComponent from "./component/tree/tree";
import CollapseComponent from "./component/collapse/collapse";
import DividerComponent from "./component/divider/divider";
import EditTableTextComponent from "./component/editTableText/editTableText";
import OverflowListComponent from "./component/overflowList/overflowList";
import ProgressBarComponent from "./component/progressBar/progressBar";
import TagComponent from "./component/tag/tag";
const App = () => {
  const [stateStart, setStateStart] = useState(false);
  const handleStart = () => setStateStart(!stateStart);
  const ReactPanel: React.FunctionComponent = () => (
    <div>
      <ButtonComponent intent="none" />
    </div>
  );
  const AngularPanel: React.FunctionComponent = () => (
    <div>
      <FormInput />
    </div>
  );
  const EmberPanel: React.FunctionComponent = () => (
    <div>
      <FormContent />
    </div>
  );
  const SelectComponent: React.FunctionComponent = () => (
    <div>
      <IndexSelect />
    </div>
  );
  const TableComponent: React.FunctionComponent = () => (
    <div>
      <ActionTable />
    </div>
  );
  const DateTimeComponent: React.FunctionComponent = () => (
    <div>
      <IndexDateTime />
    </div>
  );
  const SprintNews: React.FunctionComponent = () => (
    <div>
      <TagComponent/>
      <Overlay />
      <CalloutComponent />
      <CollapseComponent />
      <DividerComponent />
      <NoneIdealStateComponent />
      <EditTableTextComponent />
      <SpinnerComponent />
      <TreeComponent />
      <OverflowListComponent />
      <ProgressBarComponent />
      
    </div>
  );
  const GameQuizz: React.FunctionComponent = () => {
    return (
      <div>
        {stateStart ? (
          <Card elevation={2} style={{ width: "600px" }}>
            <Quizz />
          </Card>
        ) : (
          <Button
            className="btn_start"
            intent="primary"
            text="START"
            onClick={() => handleStart()}
          />
        )}
      </div>
    );
  };
  return (
    <Container className="app">
      <Header />
      <div className="content">
        <h3
          style={{ display: "flex", justifyContent: "center", fontWeight: 700 }}
        >
          TEST COMPONENT STORYBOOK
        </h3>
        <Tabs id="TabsExample" key={"vertical"} minimal>
          <Tab id="1" title="Button" panel={<ReactPanel />} />
          <Tab id="2" title="FormInput" panel={<AngularPanel />} />
          <Tab id="3" title="FormContent" panel={<EmberPanel />} />
          <Tab id="4" title="Game" panel={<GameQuizz />} />
          <Tab id="5" title="Select" panel={<SelectComponent />} />
          <Tab id="6" title="Table" panel={<TableComponent />} />
          <Tab id="8" title="DateTime" panel={<DateTimeComponent />} />
          <Tab id="9" title="Sprint New" panel={<SprintNews />} />
        </Tabs>
      </div>
    </Container>
  );
};

export default App;
