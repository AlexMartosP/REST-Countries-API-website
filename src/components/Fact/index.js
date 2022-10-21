// Styling
import { Value, Wrapper } from "./Fact.styles";

function Fact({ title, value, list, unique, symbol }) {
  return (
    <Wrapper>
      {title}:{" "}
      {list ? (
        <>
          {value.map((item, index) => (
            <Value key={item[unique]}>
              {item.name} {symbol && `(${item.symbol})`}
              {index !== value.length - 1 && ", "}
            </Value>
          ))}
        </>
      ) : (
        <Value>{value}</Value>
      )}
    </Wrapper>
  );
}

export default Fact;
