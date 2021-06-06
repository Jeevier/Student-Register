import styled from "styled-components";

const Button = styled.button`
  color: white;
  background-color: #8b005d;
  border: none;
  text-align: center;
  font-size: 16px;
  font: inherit;
  padding: 5px 10px;
  margin-top: 1rem;

  &:hover,
  &:focus {
    background-color: #a73581;
  }
`;

export default Button;
