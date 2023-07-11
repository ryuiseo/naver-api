import Chart from '../components/Chart/Chart';
import InputSection from '../components/Form/InputSection/InputSection';
import Select from '../components/Form/Select/Select';
import SubmitBtn from '../components/Form/SubmitBtn/SubmitBtn';
import AgeCheckBox from '../components/AgeCheckBox/AgeCheckBox';
import {
  Container,
  InputContainer,
  SelectContainer,
  BtnContainer,
  MiddleContainer,
  ChartContainer,
} from './DataPageStyle';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/index';
import {
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
} from '../features/data/dataSlice';

const API_ID = process.env.REACT_APP_CLIENT_ID;
const API_SECRET = process.env.REACT_APP_CLIENT_SECRET;
const PORT = process.env.REACT_APP_PORT;

function DataPage() {
  const dispatch = useDispatch();
  const {
    selectedTimeUnit,
    selectedGender,
    selectedDevice,
    startDate,
    endDate,
    category,
    keyword,
    selectedAges,
    chartData,
    showChart,
  } = useSelector((state: RootState) => state.data);

  const handleTimeUnitChange = (selectedValue: string) => {
    dispatch(setSelectedTimeUnit(selectedValue));
  };

  const handleGenderChange = (selectedValue: string) => {
    dispatch(setSelectedGender(selectedValue));
  };
  const handleDeviceChange = (selectedValue: string) => {
    dispatch(setSelectedDevice(selectedValue));
  };

  const handleAgeCheckboxChange = (selectedAges: string[]) => {
    dispatch(setSelectedAges(selectedAges));
  };

  const submitForm = async () => {
    const startDateValue = startDate;
    const endDateValue = endDate;
    const categoryValue = category;
    const keywordValue = keyword;
    const timeUnit = selectedTimeUnit;
    const gender = selectedGender;
    const device = selectedDevice;
    const ages = selectedAges;

    try {
      const response = await axios.post(
        `http://localhost:${PORT}/shopping`,
        {
          startDate: startDateValue,
          endDate: endDateValue,
          timeUnit: timeUnit,
          category: categoryValue,
          keyword: keywordValue,
          device: device,
          gender: gender,
          ages: ages,
        },
        {
          headers: {
            'X-Naver-Client-Id': API_ID,
            'X-Naver-Client-Secret': API_SECRET,
            'Content-Type': 'application/json',
          },
        },
      );

      dispatch(setChartData(response.data.results[0].data));
      dispatch(setShowChart(true));
    } catch (error) {
      console.error('조회에 실패하였습니다.', error);
    }
  };

  return (
    <>
      <Container>
        <InputContainer>
          <InputSection
            label="시작일자"
            placeholder="startDate"
            value={startDate}
            onChange={(value) => dispatch(setStartDate(value))}
          />
          <InputSection
            label="종료일자"
            placeholder="endDate"
            value={endDate}
            onChange={(value) => dispatch(setEndDate(value))}
          />
          <InputSection
            label="카테고리"
            placeholder="category"
            value={category}
            onChange={(value) => dispatch(setCategory(value))}
          />
          <InputSection
            label="키워드"
            placeholder="keyword"
            value={keyword}
            onChange={(value) => dispatch(setKeyword(value))}
          />
        </InputContainer>
        <SelectContainer>
          <Select
            value={selectedTimeUnit}
            onChange={handleTimeUnitChange}
            options={[
              { label: 'timeUnit', value: '' },
              { label: 'Date', value: 'date' },
              { label: 'Week', value: 'week' },
              { label: 'Month', value: 'month' },
            ]}
            disabled={false}
          ></Select>
          <Select
            value={selectedGender}
            onChange={handleGenderChange}
            options={[
              { label: 'gender', value: '' },
              { label: '남성', value: 'm' },
              { label: '여성', value: 'f' },
            ]}
            disabled={false}
          ></Select>
          <Select
            value={selectedDevice}
            onChange={handleDeviceChange}
            options={[
              { label: 'device', value: '' },
              { label: 'pc', value: 'pc' },
              { label: 'mobile', value: 'mo' },
            ]}
            disabled={false}
          ></Select>
        </SelectContainer>
        <MiddleContainer>
          <AgeCheckBox onChange={handleAgeCheckboxChange} />
          <BtnContainer>
            <SubmitBtn onClick={submitForm}></SubmitBtn>
          </BtnContainer>
        </MiddleContainer>
        <ChartContainer>
          {showChart && <Chart data={chartData} selectedAges={selectedAges} />}
        </ChartContainer>
      </Container>
    </>
  );
}

export default DataPage;
