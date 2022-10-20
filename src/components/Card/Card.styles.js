import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: ${(props) =>
    props.darkTheme ? "var(--dark-blue)" : "#fff"};
  color: ${(props) => (props.darkTheme ? "#fff" : "var(--very-dark-blue)")};
  box-shadow: 0 0px 5px 0px #00000017;
  border-radius: 0.25rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }

  a {
    color: ${(props) => (props.darkTheme ? "#fff" : "var(--very-dark-blue)")};
    text-decoration: none;
  }
`;

export const CardDetails = styled.div`
  padding-block: 1.5rem 3rem;
  padding-inline: 1.5rem;

  h2 {
    font-size: 1.125rem;
    font-weight: 700;
    margin-block-end: 1rem;
  }
`;

export const CardSingleDetail = styled.div`
  font-size: 0.75rem;
  font-weight: 600;

  :not(:last-child) {
    margin-block-end: 0.5rem;
  }

  span {
    font-weight: 300;
  }
`;
