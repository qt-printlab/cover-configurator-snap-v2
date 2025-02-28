import React from "react";
import { useFormState } from "../../../../context";

const StandardEmbossingView = () => {
  const { standardEmbossing } = useFormState();

  return (
    <div>
      StandardEmbossing visualizator: <br />
      1: {standardEmbossing.cover_front_standard_embossing_line1} <br />
      2: {standardEmbossing.cover_front_standard_embossing_line2} <br />
      3: {standardEmbossing.cover_front_standard_embossing_line3} <br />
      color: {standardEmbossing.cover_front_embossing_color} <br />
      placement: {
        standardEmbossing.cover_front_standard_embossing_placement
      }{" "}
      <br />
    </div>
  );
};

export default StandardEmbossingView;
