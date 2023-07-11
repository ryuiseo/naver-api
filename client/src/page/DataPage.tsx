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
import { useState } from 'react';
import axios from 'axios';

const API_ID = process.env.REACT_APP_CLIENT_ID;
const API_SECRET = process.env.REACT_APP_CLIENT_SECRET;

function DataPage() {
  const [selectedTimeUnit, setSelectedTimeUnit] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedDevice, setSelectedDevice] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [category, setCategory] = useState('');
  const [keyword, setKeyword] = useState('');
  const [selectedAges, setSelectedAges] = useState<string[]>([]);
  const [chartData, setChartData] = useState<any[]>([]);
  const [showChart, setShowChart] = useState(false);

  const handleTimeUnitChange = (selectedValue: string) => {
    setSelectedTimeUnit(selectedValue);
  };
  const handleGenderChange = (selectedValue: string) => {
    setSelectedGender(selectedValue);
  };
  const handleDeviceChange = (selectedValue: string) => {
    setSelectedDevice(selectedValue);
  };

  const handleAgeCheckboxChange = (selectedAges: string[]) => {
    setSelectedAges(selectedAges);
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
        'http://localhost:3001/shopping',
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

      setChartData(response.data.results[0].data);
      setShowChart(true);
      console.log(response.data.results[0].data);
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
            onChange={setStartDate}
          />
          <InputSection
            label="종료일자"
            placeholder="endDate"
            value={endDate}
            onChange={setEndDate}
          />
          <InputSection
            label="카테고리"
            placeholder="category"
            value={category}
            onChange={setCategory}
          />
          <InputSection
            label="키워드"
            placeholder="keyword"
            value={keyword}
            onChange={setKeyword}
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
