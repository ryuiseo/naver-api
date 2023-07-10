import React from 'react';
import { Container } from './CheckBoxStyle';

interface Props {
  label: string;
  value: string;
  onChange: (value: string, checked: boolean) => void;
  checked: boolean;
}

function CheckBox({ label, value, onChange, checked }: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    onChange(value, isChecked);
  };
  return (
    <Container>
      <label>
        <input
          type="checkbox"
          value={value}
          checked={checked}
          onChange={handleChange}
        />
        {label}
      </label>
    </Container>
  );
}
export default CheckBox;
