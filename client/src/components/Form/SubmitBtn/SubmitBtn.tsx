import { SubmitButton } from './SubmitBtnStyle';

interface Props {
  onClick: () => void;
}
function SubmitBtn({ onClick }: Props) {
  return <SubmitButton onClick={onClick}>조회</SubmitButton>;
}
export default SubmitBtn;
