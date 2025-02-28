import { FORM_TYPE_REDUCERS } from "./enums";

export interface FormState {
  standardEmbossing: StandardEmbossingConfig;
  spineEmbossing: SpineEmbossingConfig;
}
export type FormAction =
  | {
      type: FORM_TYPE_REDUCERS.UPDATE;
      section: keyof FormState;
      field: string;
      value: string | boolean | number;
    }
  | { type: FORM_TYPE_REDUCERS.RESET };

interface StandardEmbossingConfig {
  cover_front_standard_embossing_line1: string;
  cover_front_standard_embossing_line2: string;
  cover_front_standard_embossing_line3: string;
  font_cover_front_standard_embossing_line1: string;
  font_cover_front_standard_embossing_line1_id: number | null;
  font_cover_front_standard_embossing_line2: string;
  font_cover_front_standard_embossing_line2_id: number | null;
  font_cover_front_standard_embossing_line3: string;
  font_cover_front_standard_embossing_line3_id: number | null;
  cover_front_embossing_color: number | null;
  cover_front_standard_embossing_placement: string | null;
  cover_front_standard_embossing_placement_id: null | number;
  cover_front_embossing_color_id: null | number;
  extraPaymentRequiredStandardEmbossing: boolean;
}
interface SpineEmbossingConfig {
  line1: string;
  line2: string;
  line3: string;
}
