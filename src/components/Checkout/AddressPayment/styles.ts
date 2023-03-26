import styled from "styled-components";

export const AddressPaymentContainer = styled.div`
  width: 640px;
  height: 591px;

  display: flex;
  flex-direction: column;

  gap: 12px;

  border: 1px solid;
`;

export const AddressWrapper = styled.div`
  width: 640px;
  height: 372px;

  background: #f3f2f2;
`;

export const PaymentWrapper = styled.div`
  width: 640px;
  height: 207px;

  background: #f3f2f2;
`;

export const AddressHeader = styled.div`
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
