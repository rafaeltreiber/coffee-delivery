import styled from "styled-components";

export const AddressPaymentContainer = styled.div`
  width: 640px;
  height: 591px;

  display: flex;
  flex-direction: column;

  gap: 12px;
`;

export const AddressWrapper = styled.div`
  width: 640px;
  height: 372px;

  background: #f3f2f2;

  border-radius: 6px;
`;

export const PaymentWrapper = styled.div`
  width: 640px;
  height: 207px;

  background: #f3f2f2;

  border-radius: 6px;
`;

export const Header = styled.div`
  width: 560px;
  height: 44px;

  padding: 40px 40px 32px 40px;

  display: flex;

  gap: 8px;

  font-family: "Roboto";
  font-weight: 400;

  line-height: 130%;
`;

export const TitleInfo = styled.div`
  display: flex;
  flex-direction: column;

  width: 530px;
  height: 44px;
`;

export const DeliveryAddress = styled.span`
  font-size: 16px;

  color: #403937;
`;

export const HeaderInfo = styled.span`
  font-size: 14px;

  color: #574f4d;
`;

export const HeaderIconWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const FormWrapper = styled.div`
  width: 560px;
  height: 216px;

  display: flex;
  flex-direction: column;

  margin: 0 40px;

  gap: 16px;
`;

export const AddressForm = styled.form``;

export const LineWrapper = styled.div`
  display: flex;
  align-items: flex-start;

  gap: 12px;
`;

export const InputField = styled.input`
  display: flex;
  align-items: center;

  padding: 12px;

  background: #eeeded;

  border: 1px solid #e6e5e5;
  border-radius: 4px;
`;

export const CardTypesWrappper = styled.div`
  display: flex;

  gap: 12px;

  margin: 0 40px;
`;

export const PaymentTypeButton = styled.button`
  display: flex;
  align-items: center;

  width: 100%;

  padding: 16px;
  gap: 12px;

  background: #e6e5e5;
  border-radius: 6px;

  border: none;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 160%;

  text-transform: uppercase;

  color: #574f4d;

  cursor: pointer;
`;

export const ButtonIcon = styled.img`
  width: 16px;
  height: 16px;
`;
