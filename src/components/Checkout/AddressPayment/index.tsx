import { AddressForm, Header, AddressPaymentContainer, AddressWrapper, DeliveryAddress, FormWrapper, HeaderIconWrapper, HeaderInfo, InputField, LineWrapper, PaymentWrapper, TitleInfo, CardTypesWrappper, PaymentTypeButton, ButtonIcon } from "./styles";
import LocationIcon from '../../../../public/img/LocationIcon.svg'
import DollarIcon from '../../../../public/img/DollarIcon.svg'
import CreditCardIcon from '../../../../public/img/CreditCardIcon.svg'
import DebitCardIcon from '../../../../public/img/DebitCardIcon.svg'
import MoneyIcon from '../../../../public/img/MoneyIcon.svg'

export function AddressPayment() {
  return (
    <AddressPaymentContainer>
      <AddressWrapper>
        <Header>
          <HeaderIconWrapper>
            <img src={LocationIcon} />
          </HeaderIconWrapper>

          <TitleInfo>
            <DeliveryAddress>Endereço de Entrega</DeliveryAddress>
            <HeaderInfo>
              Informe o endereço onde deseja receber seu pedido
            </HeaderInfo>
          </TitleInfo>
        </Header>
        <AddressForm>
          <FormWrapper>
            <LineWrapper>
              <InputField placeholder="CEP" />
            </LineWrapper>
            <LineWrapper>
              <InputField placeholder="Rua" style={{ width: "100%" }} />
            </LineWrapper>
            <LineWrapper>
              <InputField placeholder="Número" />
              <InputField placeholder="Complemento" style={{ width: "100%" }} />
            </LineWrapper>
            <LineWrapper>
              <InputField placeholder="Bairro" />
              <InputField placeholder="Cidade" style={{ width: "276px" }} />
              <InputField placeholder="UF" style={{ width: "60px" }} />
            </LineWrapper>
          </FormWrapper>
        </AddressForm>
      </AddressWrapper>

      <PaymentWrapper>
        <Header>
          <HeaderIconWrapper>
            <img src={DollarIcon} />
          </HeaderIconWrapper>

          <TitleInfo>
            <DeliveryAddress>Pagamento</DeliveryAddress>
            <HeaderInfo>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </HeaderInfo>
          </TitleInfo>
        </Header>

        <CardTypesWrappper>
          <PaymentTypeButton>
            <ButtonIcon src={CreditCardIcon} />
            Cartão de crédito
          </PaymentTypeButton>
          <PaymentTypeButton>
            <ButtonIcon src={DebitCardIcon} />
            Cartão de débito
          </PaymentTypeButton>
          <PaymentTypeButton>
            <ButtonIcon src={MoneyIcon} />
            Dinheiro
          </PaymentTypeButton>

        </CardTypesWrappper>
      </PaymentWrapper>

    </AddressPaymentContainer>
  )
}