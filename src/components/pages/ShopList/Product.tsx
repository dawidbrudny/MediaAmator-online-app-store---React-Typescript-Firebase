import { Link } from "react-router-dom";

import { useAppDispatch } from "../../../redux/hooks";
import { addOrRemoveFromCart } from "../../../redux/cartSlice";

import styled from "styled-components";
import Button from "../../UI/Button";
import Container from "../../UI/Container";
import Headers from "../../UI/ChooseHeader";
import { Commentary } from "./CommentarySection";

export type ProductProps = {
  image: {
    src: string;
    alt: string;
  };
  name: string;
  price: number;
  commentaries?: Commentary[];
};

const Product = ({ image, name, price }: ProductProps) => {
  const dispatch = useAppDispatch();

  function handleAddToCart() {
    dispatch(addOrRemoveFromCart({ product: { image, name, price }, isAdding: true }));
  }

  return (
    <ProductContainer>
      <ProductImage {...image} />
      <ProductInfo>
        <Header as={Headers} level={3}>
          {name}
        </Header>
        <Price>{price.toFixed(2)} PLN</Price>
      </ProductInfo>

      <MoreInfoButton to="/details" state={{ image, name, price }}>
        więcej...
      </MoreInfoButton>
      <AddToCartButton onClick={handleAddToCart}>Do koszyka</AddToCartButton>
    </ProductContainer>
  );
};

//  --- Styling ---
const ProductContainer = styled.section`
  flex-basis: calc(33.33% - 20px);
  min-width: 250px;
  max-width: 340px;
  min-height: 370px;
  margin: 0 10px 20px 10px;
  background-color: white;
  border: 1.5px solid black;
  padding: 30px 10px;
`;

const ProductImage = styled.img`
  vertical-align: middle;
  height: clamp(130px, 10vw, 150px);
`;

const Header = styled(Container)``;
const Price = styled.strong``;
const ProductInfo = styled.section`
  > * {
    display: block;
    margin: 10px auto;
  }

  > h3 {
    width: 80%;
  }

  > ${Price} {
    width: 50%;
    background-color: black;
    color: white;
  }
`;

//  --- Buttons ---
const MoreInfoButton = styled(Link)`
  font-size: 14.5px;
  letter-spacing: 1px;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: transparent;
    color: rgb(150, 0, 0);
    box-shadow: none;
    font-weight: bold;
  }
`;

const AddToCartButton = styled(Button)`
  display: block;
  margin: 10px auto;

  &:hover {
    background-color: rgb(255, 213, 0);
    color: black;
    box-shadow: -4px 4px 2px rgb(169, 169, 169);
  }
`;

export default Product;
