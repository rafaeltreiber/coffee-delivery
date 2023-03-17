import { ChipsContainer, CardContainer, Currency, CurrencyValueContainer, Description, Name, PriceCartContainer, Value, CartIcon, AmountCartContainer, CoffeeImage } from "./styles";
import ExpressoTradicional from '../../../../public/img/ExpressoTradicional.svg';
import { Chip } from "../Chip";
import { AmountSelector } from "./AmountSelector";
import CartIconButton from '../../../../public/img/CartIconButton.svg';


export function CoffeeCard() {
  return (
    <CardContainer>
      <CoffeeImage src={ExpressoTradicional} alt='Expresso tradicional' />
      <ChipsContainer>
        <Chip text="tradicional" />
      </ChipsContainer>
      <Name>
        Expresso Tradicional
      </Name>
      <Description>O tradicional café feito com água quente e grãos moídos</Description>
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