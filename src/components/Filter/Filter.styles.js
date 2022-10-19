import styled from "styled-components";

export const FilterWrapper = styled.div`
  position: relative;
  width: 12rem;
`;

export const SelectFilter = styled.div`
  margin-block-start: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: ${(props) =>
    props.darkTheme ? "var(--dark-blue)" : "#fff"};
  color: ${(props) => (props.darkTheme ? "#fff" : "var(--very-dark-blue)")};
  fill: ${(props) => (props.darkTheme ? "#fff" : "var(--very-dark-blue)")};
  padding: 1rem 1.5rem;
  padding-inline-end: 1rem;
  border-radius: 0.25rem;
  box-shadow: 0 0px 5px 0px #00000017;
  cursor: pointer;

  @media (min-width: 768px) {
    margin-block-start: 0;
  }

  span {
    font-size: 0.75rem;
  }

  svg {
    width: 1rem;
  }
`;

export const FilterDropdown = styled.div`
  position: absolute;
  margin-block-start: 5px;
  width: 100%;
  background-color: ${(props) =>
    props.darkTheme ? "var(--dark-blue)" : "#fff"};
  color: ${(props) => (props.darkTheme ? "#fff" : "var(--very-dark-blue)")};
  padding: 1rem 1.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  box-shadow: 0 0px 5px 0px #00000017;

  > div {
    cursor: pointer;
  }

  > div:not(:last-child) {
    margin-block-end: 0.5rem;
  }
`;
