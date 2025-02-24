import React from "react";
import { useSelector } from "react-redux";

const StandardEmbossingView = () => {
  const defaultValuesStandardEmbossing = useSelector(
    (state: any) => state.formState.standardEmbossing
  );

  return (
    <div>
      StandardEmbossing visualizator: <br />
      1: {
        defaultValuesStandardEmbossing.cover_front_standard_embossing_line1
      }{" "}
      <br />
      2: {
        defaultValuesStandardEmbossing.cover_front_standard_embossing_line2
      }{" "}
      <br />
      3: {
        defaultValuesStandardEmbossing.cover_front_standard_embossing_line3
      }{" "}
      <br />
      color: {defaultValuesStandardEmbossing.cover_front_embossing_color} <br />
      placement:{" "}
      {
        defaultValuesStandardEmbossing.cover_front_standard_embossing_placement
      }{" "}
      <br />
    </div>
  );
};

export default StandardEmbossingView;
