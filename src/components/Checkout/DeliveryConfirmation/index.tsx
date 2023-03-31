import { AddressLineWrapper, ConfirmationText, ConfirmationTitle, DeliveryConfirmationContainer, DeliveryIcon, DeliveryInfo, DeliveryInfoWrapper, LinePhrasesWrapper, Title } from "./styles";
import DeliveryIllustration from '../../../../public/img/DeliveryIllustration.svg';
import DeliveryLocationIcon from '../../../../public/img/DeliveryLocationIcon.svg';
import DeliveryTimeIcon from '../../../../public/img/DeliveryTimeIcon.svg';
import DeliveryPaymentIcon from '../../../../public/img/DeliveryPaymentIcon.svg';


export function DeliveryConfirmation() {
  return (
    <DeliveryConfirmationContainer>
      <Title>
        <ConfirmationTitle>Uhu! Pedido confirmado</ConfirmationTitle>
        <ConfirmationText>Agora é só aguardar que logo o café chegará até você</ConfirmationText>
      </Title>

      <DeliveryInfoWrapper>
        <DeliveryInfo>
          <AddressLineWrapper>
            <DeliveryIcon src={DeliveryLocationIcon} />
            <LinePhrasesWrapper>
              <span>Entrega em <strong>Rua João Daniel Martinelli, 102</strong></span>
              <span>Farrapos - Porto Alegre, RS</span>
            </LinePhrasesWrapper>
          </AddressLineWrapper>

          <AddressLineWrapper>
            <DeliveryIcon src={DeliveryTimeIcon} />
            <LinePhrasesWrapper>
              <span>Previsão de entrega</span>
              <span><strong>20 min - 30 min</strong></span>
            </LinePhrasesWrapper>
          </AddressLineWrapper>

          <AddressLineWrapper>
            <DeliveryIcon src={DeliveryPaymentIcon} />
            <LinePhrasesWrapper>
              <span>Pagamento na entrega</span>
              <span><strong>Cartão de Crédito</strong></span>
            </LinePhrasesWrapper>
          </AddressLineWrapper>

        </DeliveryInfo>

        <img src={DeliveryIllustration} />

      </DeliveryInfoWrapper>
    </DeliveryConfirmationContainer>
  )
}