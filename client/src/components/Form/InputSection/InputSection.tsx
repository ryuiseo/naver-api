import { Container, InputArea } from './InputSectionStyle';

interface Props {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

function InputSection({ label, placeholder, value, onChange }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <Container>
      {label}:{' '}
      <InputArea
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </Container>
  );
}
export default InputSection;
