import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DataState {
  selectedTimeUnit: string;
  selectedGender: string;
  selectedDevice: string;
  startDate: string;
  endDate: string;
  category: string;
  keyword: string;
  selectedAges: string[];
  chartData: any[];
  showChart: boolean;
}

const initialState: DataState = {
  selectedTimeUnit: '',
  selectedGender: '',
  selectedDevice: '',
  startDate: '',
  endDate: '',
  category: '',
  keyword: '',
  selectedAges: [],
  chartData: [],
  showChart: false,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setSelectedTimeUnit: (state, action: PayloadAction<string>) => {
      state.selectedTimeUnit = action.payload;
    },
    setSelectedGender: (state, action: PayloadAction<string>) => {
      state.selectedGender = action.payload;
    },
    setSelectedDevice: (state, action: PayloadAction<string>) => {
      state.selectedDevice = action.payload;
    },
    setStartDate: (state, action: PayloadAction<string>) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action: PayloadAction<string>) => {
      state.endDate = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setKeyword: (state, action: PayloadAction<string>) => {
      state.keyword = action.payload;
    },
    setSelectedAges: (state, action: PayloadAction<string[]>) => {
      state.selectedAges = action.payload;
    },
    setChartData: (state, action: PayloadAction<any[]>) => {
      state.chartData = action.payload;
    },
    setShowChart: (state, action: PayloadAction<boolean>) => {
      state.showChart = action.payload;
    },
  },
});

export const {
  setSelectedTimeUnit,
  setSelectedGender,
  setSelectedDevice,
  setStartDate,
  setEndDate,
  setCategory,
  setKeyword,
  setSelectedAges,
  setChartData,
  setShowChart,
} = dataSlice.actions;

export default dataSlice.reducer;
