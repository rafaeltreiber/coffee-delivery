import { AddressHeader, AddressPaymentContainer, AddressWrapper, DeliveryAddress, HeaderIconWrapper, HeaderInfo, PaymentWrapper, TitleInfo } from "./styles";
import LocationIcon from '../../../../public/img/LocationIcon.svg'

export function AddressPayment() {
  return (
    <AddressPaymentContainer>
      <AddressWrapper>
        <AddressHeader>
          <HeaderIconWrapper>
            <img src={LocationIcon} />

          </HeaderIconWrapper>
          <TitleInfo>
            <DeliveryAddress>Endereço de Entrega</DeliveryAddress>
            <HeaderInfo>
              Informe o endereço onde deseja receber seu pedido
            </HeaderInfo>
          </TitleInfo>
        </AddressHeader>
      </AddressWrapper>
      <PaymentWrapper>
        <h1>Payment</h1>
      </PaymentWrapper>

    </AddressPaymentContainer>
  )
}