import styled from "styled-components";

export const Wrapper = styled.div`
  margin-block-start: 3rem;
  text-align: center;
  color: ${(props) => (props.darkTheme ? "#fff" : "var(--very-dark-blue)")};

  h1 {
    font-size: 2rem;
    font-weight: 700;
  }
`;
