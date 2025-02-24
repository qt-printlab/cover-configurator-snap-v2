import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCoverDataThunk } from "./configuratorSlice";

interface StandardEmbossingConfig {
  cover_front_standard_embossing_line1: string;
  cover_front_standard_embossing_line2: string;
  cover_front_standard_embossing_line3: string;
  font_cover_front_standard_embossing_line1: string;
  font_cover_front_standard_embossing_line2: string;
  font_cover_front_standard_embossing_line3: string;
  cover_front_embossing_color: number | null;
  cover_front_standard_embossing_placement: number | null;
}
interface SpineEmbossingConfig {
  line1: string;
  line2: string;
  line3: string;
}

interface ConfigurationState {
  standardEmbossing: StandardEmbossingConfig;
  spineEmbossing: SpineEmbossingConfig;
}

const initialState: ConfigurationState = {
  standardEmbossing: {
    cover_front_standard_embossing_line1: "",
    cover_front_standard_embossing_line2: "",
    cover_front_standard_embossing_line3: "",
    font_cover_front_standard_embossing_line1: "",
    font_cover_front_standard_embossing_line2: "",
    font_cover_front_standard_embossing_line3: "",
    cover_front_embossing_color: null,
    cover_front_standard_embossing_placement: null,
  },
  spineEmbossing: {
    line1: "",
    line2: "",
    line3: "",
  },
};

const formSlice = createSlice({
  name: "formStates",
  initialState,
  reducers: {
    updateStandardEmbossing(
      state,
      action: PayloadAction<Partial<StandardEmbossingConfig>>
    ) {
      state.standardEmbossing = {
        ...state.standardEmbossing,
        ...action.payload,
      };
    },
    updateSpineEmbossingLine(
      state,
      action: PayloadAction<SpineEmbossingConfig>
    ) {
      state.spineEmbossing = {
        ...state.standardEmbossing,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCoverDataThunk.fulfilled, (state, action) => {
      const coverData = action.payload;

      state.standardEmbossing = {
        cover_front_standard_embossing_line1: "",
        cover_front_standard_embossing_line2: "",
        cover_front_standard_embossing_line3: "",
        font_cover_front_standard_embossing_line1:
          coverData.standard_embossing.lines[0].fonts[0].id,
        font_cover_front_standard_embossing_line2:
          coverData.standard_embossing.lines[1].fonts[0].id,
        font_cover_front_standard_embossing_line3:
          coverData.standard_embossing.lines[2].fonts[0].id,
        cover_front_embossing_color:
          coverData.standard_embossing.cover_front_embossing_color.values[0].id,
        cover_front_standard_embossing_placement:
          coverData.standard_embossing.cover_front_standard_embossing_placement
            .values[0].id,
      };
    });
  },
});

export const { updateStandardEmbossing, updateSpineEmbossingLine } =
  formSlice.actions;

export default formSlice.reducer;
