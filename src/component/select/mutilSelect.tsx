import React, { useState } from "react";
import {
  MultiSelect,
  MenuItem,
  ISelect,
  DATA,
  filterItem,
  maybeDeleteCreatedItemFromArrays,
  maybeAddCreatedItemToArrays,
  arrayContainsItem,
  ItemRenderer,
} from "@rt-commercial-engineering/rt-design-system";
const MultiSelectComponent = (args: any) => {
  const [films, setFilms] = useState(args.films || []);
  const [items, setItems] = useState(args.items || DATA);
  const [createdItems, setCreatedItems] = useState(args.createdItems || []);

  const getSelectedFilmIndex = (film: ISelect) => {
    return films.indexOf(film);
  };

  const selectFilms = (filmsToSelect: ISelect[]) => {
    let nextCreatedItems = createdItems.slice();
    let nextFilms = films.slice();
    let nextItems = items.slice();

    filmsToSelect.forEach((el) => {
      const results = maybeAddCreatedItemToArrays(
        nextItems,
        nextCreatedItems,
        el
      );
      nextItems = results.items;
      nextCreatedItems = results.createdItems;
      nextFilms = !arrayContainsItem(nextFilms, el)
        ? [...nextFilms, el]
        : nextFilms;
    });
    setCreatedItems(nextCreatedItems);
    setFilms(nextFilms);
    setItems(nextItems);
  };

  const selectFilm = (film: ISelect) => {
    selectFilms([film]);
  };

  const deselectFilm = (index: number) => {
    const film = films[index];
    const { createdItems: nextCreatedItems, items: nextItems } =
      maybeDeleteCreatedItemFromArrays(items, createdItems, film);

    setCreatedItems(nextCreatedItems);
    setFilms(films.filter((_film: any, i: number) => i !== index));
    setItems(nextItems);
  };

  const isFilmSelected = (film: ISelect) => {
    return getSelectedFilmIndex(film) !== -1;
  };
  const handleFilmSelect = (film: ISelect) => {
    if (!isFilmSelected(film)) {
      selectFilm(film);
    } else {
      deselectFilm(getSelectedFilmIndex(film));
    }
  };

  const renderFilm: ItemRenderer<ISelect> = (
    film,
    { handleClick, modifiers }
  ) => {
    if (!modifiers.matchesPredicate) {
      return null;
    }
    const text = film.title;

    return (
      <MenuItem
        disabled={modifiers.disabled}
        key={film.rank}
        onClick={handleClick}
        text={text}
        icon={
          films.find((el: any) => el.value === film.value) ? "tick" : "blank"
        }
      />
    );
  };

  const renderTag = (film: ISelect) => film.title;

  const handleFilmsPaste = (films: ISelect[]) => {
    selectFilms(films);
  };

  const handleTagRemove = (_tag: React.ReactNode, index: number) => {
    deselectFilm(index);
  };

  const myStyle = {
    container: {
      width: "400px",
    },
  };

  return (
    <div style={myStyle.container}>
      <MultiSelect
        items={items}
        onItemSelect={handleFilmSelect}
        onItemsPaste={handleFilmsPaste}
        itemRenderer={renderFilm}
        tagRenderer={renderTag}
        selectedItems={films}
        noResults={<MenuItem disabled text="No results." />}
        resetOnSelect
        tagInputProps={{
          onRemove: handleTagRemove,
          tagProps: {
            round: true,
            minimal: false,
            intent: "none",
          },
          placeholder: "Select option",
        }}
      />
    </div>
  );
};

export default MultiSelectComponent;
