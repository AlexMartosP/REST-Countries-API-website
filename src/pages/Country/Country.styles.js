import styled, { css } from "styled-components";

const buttonStyle = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 1.5rem;
  background-color: ${(props) =>
    props.darkTheme ? "var(--dark-blue)" : "#fff"};
  color: ${(props) => (props.darkTheme ? "#fff" : "var(--very-dark-blue)")};
  border: none;
  box-shadow: 0 0px 5px 0px #00000017;
  border-radius: 0.15rem;
  min-width: 6rem;
  cursor: pointer;
`;

export const Container = styled.div`
  padding-block: 1.5rem;
  color: ${(props) => (props.darkTheme ? "#fff" : "var(--very-dark-blue)")};

  @media (min-width: 768px) {
    padding-block: 3rem;
  }

  > h2 {
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
  }
`;

export const Button = styled.button`
  ${buttonStyle}

  svg {
    width: 1.2rem;
  }
`;

export const DetailsContainer = styled.div`
  margin-block-start: 4rem;

  @media (min-width: 1024px) {
    display: flex;
    gap: 5rem;
    > div {
      flex: 1;
    }
  }

  img {
    width: 100%;
    box-shadow: 0 0px 5px 0px #00000017;
  }
`;

export const Details = styled.div`
  margin-block-start: 3rem;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-block-start: 1.5rem;

  @media (min-width: 500px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 600px) {
    flex-direction: column;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const BordersWrapper = styled.div`
  margin-block-start: 3rem;

  h2 {
    font-weight: 600;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-block-start: 1rem;
  }

  a {
    ${buttonStyle}
    justify-content: center;
    font-size: 0.75rem;
    text-decoration: none;
  }
`;
