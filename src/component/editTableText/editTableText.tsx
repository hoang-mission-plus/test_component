import React, { useState } from "react";
import { EditableText } from "@rt-commercial-engineering/rt-design-system";

const EditTableTextComponent = (args: any) => {
  const [value, setValue] = useState(args.value);
  const newProps = { ...args, value };
  return (
    <EditableText 
        {...newProps} 
        value={value} 
        onChange={(e) => setValue(e)}  
        alwaysRenderInput={false}
        confirmOnEnterKey={false}
        disabled={false}
        intent='success'
        isEditing={false}
        multiline={false}
        placeholder='Edit Table Text'
        selectAllOnFocus={false}
        className=''
        defaultValue=''
        maxLength='5000'
        maxLines='50'
        minLines='1'
        minWidth='100'
        type=''
        />
  );
};

export default EditTableTextComponent;
