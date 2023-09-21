export const FruitsRender = ({ fruits }) => {
  return (
    <li>
      <h1>{fruits.name}</h1>
      <h2>{fruits.category}</h2>
      <span>
        {fruits.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </span>
    </li>
  );
};
