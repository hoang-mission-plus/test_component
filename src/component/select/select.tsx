import React from "react";
import {
  Select,
  MenuItem,
  ISelect,
  DATA,
} from "@rt-commercial-engineering/rt-design-system";
const SingalSelect = () => {
  const renderFilm: any = (
    film: any,
    { handleClick, modifiers }: { handleClick: any; modifiers: any; query: any }
  ) => {
    if (!modifiers.matchesPredicate) {
      return null;
    }
    const text = film.title;
    return <MenuItem key={film.rank} onClick={handleClick} text={text} />;
  };
  const myStyle = {
    width: "264px",
  };

  const renderInputValue = (film: ISelect) => film.title;
  const arenaFilterItemSelected = (it: any) => {
    console.log(it); // not a value but a Proxy with Target, Handler and IsRevoked members
  };
  return (
    <div style={myStyle}>
      <Select
        key="select"
        itemRenderer={renderFilm}
        items={DATA}
        popoverProps={{
          minimal: true,
        }}
        inputValueRenderer={renderInputValue}
        onItemSelect={arenaFilterItemSelected}
      />
    </div>
  );
};

export default SingalSelect;
