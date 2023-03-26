import { ButtonIcon, CoffeeDetailContainer, CoffeeEditionTools, CoffeeInfo, CoffeeInfoWrapper, CoffeeName, CoffeePriceWrapper, PriceInfo, RemoveButton } from "./styles";

import { AmountSelector } from "../../../CoffeeList/CoffeeCard/AmountSelector";

import TrashcanIcon from '../../../../../public/img/TrashcanIcon.svg';
import ExpressoTradicional from '../../../../../public/img/ExpressoTradicional.svg';
import ExpressoAmericano from '../../../../../public/img/ExpressoAmericano.svg';
import ExpressoCremoso from '../../../../../public/img/ExpressoCremoso.svg';
import ExpressoGelado from '../../../../../public/img/ExpressoGelado.svg';
import CafecomLeite from '../../../../../public/img/CafécomLeite.svg';
import Latte from '../../../../../public/img/Latte.svg';
import Capuccino from '../../../../../public/img/Capuccino.svg';
import Macchiato from '../../../../../public/img/Macchiato.svg';
import Mocaccino from '../../../../../public/img/Mocaccino.svg';
import ChocolateQuente from '../../../../../public/img/ChocolateQuente.svg';
import Cubano from '../../../../../public/img/Cubano.svg';
import Havaiano from '../../../../../public/img/Havaiano.svg';
import Arabe from '../../../../../public/img/Arabe.svg';
import Irlandes from '../../../../../public/img/Irlandes.svg';


interface CoffeeDetailsProps {
  name: string;
}

export function CoffeeDetails({ name }: CoffeeDetailsProps) {

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


  return (
    <CoffeeDetailContainer>
      <CoffeeInfoWrapper>
        <img src={GetSVGFromString(name)} />
        <CoffeeInfo>
          <CoffeeName>{name}</CoffeeName>
          <CoffeeEditionTools>
            <AmountSelector smallSize />
            <RemoveButton><ButtonIcon src={TrashcanIcon} />Remover</RemoveButton>
          </CoffeeEditionTools>
        </CoffeeInfo>
      </CoffeeInfoWrapper>
      <CoffeePriceWrapper>
        <PriceInfo>R$ 9,90</PriceInfo>

      </CoffeePriceWrapper>
    </CoffeeDetailContainer>
  )

}