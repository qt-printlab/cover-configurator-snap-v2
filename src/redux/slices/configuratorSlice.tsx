import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCoverData } from "../../api/getCoverData";

interface ConfigState {
  isConfiguratorOpen: boolean;
  albumMaterial: string;
  albumColor: string;
  personalizationComponents: string[];
  activeTabKey: string | null;

  loading: boolean;
  error: unknown;
  coverData: any; // add types when swagger will be ready
}

const initialState: ConfigState = {
  isConfiguratorOpen: false,
  albumMaterial: "",
  albumColor: "",
  personalizationComponents: [],

  //active tab and component states
  activeTabKey: "",

  //fetch coverData states
  loading: false,
  coverData: null,
  error: null,
};

export const getCoverDataThunk = createAsyncThunk(
  "coverData/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getCoverData();
      if (response) {
        return response.data;
      }
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || "Error fetching coverData"
      );
    }
  }
);

export const configuratorSlice = createSlice({
  name: "configuratorSlice",
  initialState,
  reducers: {
    setIsModalOpen: (state: ConfigState, action: PayloadAction<boolean>) => {
      state.isConfiguratorOpen = action.payload;
    },

    setAlbumMaterial: (state: ConfigState, action: PayloadAction<string>) => {
      state.albumMaterial = action.payload;
    },

    setAlbumColor: (state: ConfigState, action: PayloadAction<string>) => {
      state.albumColor = action.payload;
    },

    setAlbumPersonalizations: (state, action: PayloadAction<string[]>) => {
      state.personalizationComponents = action.payload;
    },
    setActiveTabKey: (state, action: PayloadAction<string | null>) => {
      state.activeTabKey = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCoverDataThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCoverDataThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.isConfiguratorOpen = true;
        state.coverData = action.payload;
      })
      .addCase(getCoverDataThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setIsModalOpen,
  setAlbumMaterial,
  setAlbumColor,
  setAlbumPersonalizations,
  setActiveTabKey,
} = configuratorSlice.actions;

export default configuratorSlice.reducer;
