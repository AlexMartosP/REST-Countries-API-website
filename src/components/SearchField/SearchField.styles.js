import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background-color: ${(props) =>
    props.darkTheme ? "var(--dark-blue)" : "#fff"};
  color: ${(props) => (props.darkTheme ? "#fff" : "var(--very-dark-blue)")};
  fill: ${(props) => (props.darkTheme ? "#fff" : "var(--very-dark-blue)")};
  padding: 1rem 2rem;
  border-radius: 0.25rem;
  box-shadow: 0 0px 5px 0px #00000017;

  @media (min-width: 768px) {
    min-width: 28rem;
  }

  svg {
    width: 1rem;

    @media (min-width: 768px) {
      width: 1.5rem;
    }
  }
`;

export const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  font-size: 0.75rem;
  width: 100%;
  color: ${(props) => (props.darkTheme ? "#fff" : "var(--very-dark-blue)")};
  outline: none;

  ::placeholder {
    color: ${(props) => (props.darkTheme ? "#fff" : "var(--very-dark-blue)")};
  }
`;
