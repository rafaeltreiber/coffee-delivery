import { ChipsContainer, CardContainer, Currency, CurrencyValueContainer, Description, Name, PriceCartContainer, Value, CartIcon, AmountCartContainer, CoffeeImage } from "./styles";
import { Chip } from "../Chip";
import { AmountSelector } from "./AmountSelector";

import ExpressoTradicional from '../../../../public/img/ExpressoTradicional.svg';
import ExpressoAmericano from '../../../../public/img/ExpressoAmericano.svg';
import ExpressoCremoso from '../../../../public/img/ExpressoCremoso.svg';
import ExpressoGelado from '../../../../public/img/ExpressoGelado.svg';
import CafecomLeite from '../../../../public/img/CafécomLeite.svg';
import Latte from '../../../../public/img/Latte.svg';
import Capuccino from '../../../../public/img/Capuccino.svg';
import Macchiato from '../../../../public/img/Macchiato.svg';
import Mocaccino from '../../../../public/img/Mocaccino.svg';
import ChocolateQuente from '../../../../public/img/ChocolateQuente.svg';
import Cubano from '../../../../public/img/Cubano.svg';
import Havaiano from '../../../../public/img/Havaiano.svg';
import Arabe from '../../../../public/img/Arabe.svg';
import Irlandes from '../../../../public/img/Irlandes.svg';
import CartIconButton from '../../../../public/img/CartIconButton.svg';

interface CoffeeCardProps {
  image: string;
  tags: string[];
  name: string;
  description: string;
}

function GetSVGFromString(svg: string) {
  switch (svg) {
    case "Expresso Tradicional":
      return ExpressoTradicional;
    case "Expresso Americano":
      return ExpressoAmericano;
    case "Expresso Cremoso":
      return ExpressoCremoso;
    case "Expresso Gelado":
      return ExpressoGelado;
    case "Café com Leite":
      return CafecomLeite;
    case "Latte":
      return Latte;
    case "Capuccino":
      return Capuccino;
    case "Macchiato":
      return Macchiato;
    case "Mocaccino":
      return Mocaccino;
    case "Chocolate Quente":
      return ChocolateQuente;
    case "Cubano":
      return Cubano;
    case "Havaiano":
      return Havaiano;
    case "Árabe":
      return Arabe;
    case "Irlandês":
      return Irlandes;
  }
}


export function CoffeeCard({ image, tags, name, description }: CoffeeCardProps) {
  return (
    <CardContainer>
      <CoffeeImage src={GetSVGFromString(image)} alt='Expresso tradicional' />
      <ChipsContainer>
        {
          tags.map((tag) => (
            <Chip text={tag} key={tag} />
          ))
        }
      </ChipsContainer>
      <Name>
        {name}
      </Name>
      <Description>{description}</Description>
      <PriceCartContainer>
        <CurrencyValueContainer>
          <Currency>R$</Currency>
          <Value>9,90</Value>
        </CurrencyValueContainer>
        <AmountCartContainer>
          <AmountSelector />
          <CartIcon src={CartIconButton} alt='cart button' />

        </AmountCartContainer>
      </PriceCartContainer>
    </CardContainer>
  )
}