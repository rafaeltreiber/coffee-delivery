import { AddressPayment } from "./AddressPayment";
import { CoffeeSelection } from "./CoffeeSelection";
import { CheckoutContainer, Title, TitleContentWrapper } from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <TitleContentWrapper>
        <Title>
          Complete seu pedido
        </Title>
        <AddressPayment />
      </TitleContentWrapper>

      <TitleContentWrapper>
        <Title>
          Cafés selecionados
        </Title>
        <CoffeeSelection />
      </TitleContentWrapper>
    </CheckoutContainer>
  )
}