import { SelectBar, Option } from './SelectStyle';

interface Props {
  value: string;
  onChange: (selectedValue: string) => void;
  options: Array<{ label: string; value: string }>;
  disabled: boolean;
}
function Select({ value, onChange, options, disabled }: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;

    if (onChange) {
      onChange(selectedValue);
    }
  };

  return (
    <SelectBar onChange={handleChange} value={value} disabled={disabled}>
      {options.map((option, idx) => (
        <Option key={`option.value${idx}`} value={option.value}>
          {option.label}
        </Option>
      ))}
    </SelectBar>
  );
}
export default Select;
