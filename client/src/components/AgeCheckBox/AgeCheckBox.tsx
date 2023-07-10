import { useState } from 'react';
import CheckBox from '../Checkbox/CheckBox';
import { Container, Text } from './AgeCheckBoxStyle';

interface AgeCheckboxProps {
  onChange: (selectedAges: string[]) => void;
}

function AgeCheckBox({ onChange }: AgeCheckboxProps) {
  const [selectedAges, setSelectedAges] = useState<string[]>([]);

  const handleCheckboxChange = (value: string, checked: boolean) => {
    let newSelectedAges = [...selectedAges];

    if (checked) {
      newSelectedAges.push(value);
    } else {
      newSelectedAges = newSelectedAges.filter((age) => age !== value);
    }

    setSelectedAges(newSelectedAges);
    onChange(newSelectedAges);
  };

  return (
    <Container>
      <Text>ages</Text>
      <CheckBox
        label="10대"
        value="10"
        checked={selectedAges.includes('10')}
        onChange={handleCheckboxChange}
      />
      <CheckBox
        label="20대"
        value="20"
        checked={selectedAges.includes('20')}
        onChange={handleCheckboxChange}
      />
      <CheckBox
        label="30대"
        value="30"
        checked={selectedAges.includes('30')}
        onChange={handleCheckboxChange}
      />
      <CheckBox
        label="40대"
        value="40"
        checked={selectedAges.includes('40')}
        onChange={handleCheckboxChange}
      />
      <CheckBox
        label="50대"
        value="50"
        checked={selectedAges.includes('50')}
        onChange={handleCheckboxChange}
      />
      <CheckBox
        label="60대"
        value="60"
        checked={selectedAges.includes('60')}
        onChange={handleCheckboxChange}
      />
    </Container>
  );
}
export default AgeCheckBox;
