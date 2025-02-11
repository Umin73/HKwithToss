import styled from "styled-components";

const Button = styled.button`
  color: grey;
  background-color: yellow;
  border: 2px solid green;
  margin-right: 5px;
`;

const RoundedButton = styled(Button)`
  border-radius: 16px;
`;

export default function StyledComponent2() {
  return (
    <div>
      <Button>Normal</Button>
      <RoundedButton>Rounded</RoundedButton>
    </div>
  );
}
