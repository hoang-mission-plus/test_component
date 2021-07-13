import React, { Fragment, useState } from "react";
import {
  Button,
  Alert,
  Dialog,
  AnchorButton,
  Intent,
  Classes,
} from "@rt-commercial-engineering/rt-design-system";
const Overlay = () => {
  const [isOpen, setisOpen] = useState(false);
  const [isOpenDialog, setisOpenDialog] = useState(false);
  const myStyle = {
    container: {
      display: "flex",
    },
    alert: {
      minWidth: "584px",
    },
    dialog: {
      minWidth: "584px",
    },
  };
  return (
    <Fragment>
      <div>
        <Button onClick={() => setisOpen(true)} text="Open Alert" />
        <div style={myStyle.container}>
          <Alert
            style={myStyle.alert}
            isOpen={isOpen}
            onClose={() => setisOpen(false)}
          >
            <h5 className="bp3-heading">Example title here?</h5>
            <p>
              Alerts contain important information and users must acknowledge
              the content before proceeding
            </p>
          </Alert>
        </div>
      </div>
      <div>
        <Button
          intent="primary"
          text="Show Dialog"
          onClick={() => setisOpenDialog(true)}
        />
        <div style={myStyle.container}>
          <Dialog
            style={myStyle.dialog}
            onClose={() => setisOpenDialog(false)}
            isOpen={isOpenDialog}
            title="Example title here"
          >
            <div className={Classes.DIALOG_BODY}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                suscipit lacinia mi. Cras iaculis gravida tortor eget porta.
                Morbi non massa ut ipsum rutrum sodales.
              </p>
            </div>
            <div className={Classes.DIALOG_FOOTER}>
              <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                <Button text="Cancel" onClick={() => setisOpenDialog(false)} />
                <AnchorButton text="Default" intent={Intent.PRIMARY} />
              </div>
            </div>
          </Dialog>
        </div>
      </div>
    </Fragment>
  );
};

export default Overlay;
