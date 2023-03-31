import styled from "styled-components";

export const DeliveryConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 160px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;

  padding: 80px 0 40px 0;
`;

export const ConfirmationTitle = styled.span`
  font-family: "Baloo 2", sans-serif;
  font-weight: 800;
  font-size: 32px;
  line-height: 41.6px;
  color: #c47f17;
`;

export const ConfirmationText = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  color: #403937;
`;

export const DeliveryInfoWrapper = styled.div`
  display: flex;

  gap: 102px;
`;

export const DeliveryInfo = styled.div`
  display: flex;

  justify-content: center;
  flex-direction: column;

  width: 526px;
  height: 270px;

  padding-left: 40px;

  gap: 32px;

  border: double 1px transparent;
  border-radius: 6px 36px;

  background-image: linear-gradient(white, white),
    radial-gradient(circle at top left, #dbac2c, #8047f8);
  background-origin: border-box;
  background-clip: padding-box, border-box;
`;

export const AddressLineWrapper = styled.div`
  display: flex;

  width: 354px;
  height: 42px;

  gap: 12px;

  font-family: "Roboto", sans-serif;
  font-size: 16px;
  line-height: 20.8px;
  font-weight: 400;
  color: #574f4d;
`;

export const DeliveryIcon = styled.img`
  width: 32px;
  height: 32px;
`;

export const LinePhrasesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
