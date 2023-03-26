import styled from "styled-components";

export const CoffeeDetailContainer = styled.div`
  display: flex;
  justify-content: space-between;

  font-family: "Roboto";
  line-height: 130%;
  color: #574f4d;

  padding: 8px 4px;
`;

export const CoffeeInfoWrapper = styled.div`
  display: flex;

  width: 255px;
  height: 64px;

  gap: 20px;
`;

export const CoffeePriceWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  width: 55px;
  height: 21px;
`;

export const PriceInfo = styled.span`
  font-weight: 700;
  font-size: 16px;
`;

export const CoffeeInfo = styled.div`
  display: flex;
  flex-direction: column;

  width: 171px;
  height: 61px;

  gap: 8px;
`;

export const CoffeeEditionTools = styled.div`
  display: flex;

  font-weight: 400;

  gap: 8px;
`;

export const RemoveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 91px;
  height: 32px;

  padding: 0px 8px;

  gap: 4px;

  background: #e6e5e5;
  border-radius: 6px;

  text-transform: uppercase;
  border: none;

  cursor: pointer;

  font-size: 12px;
  line-height: 160%;
`;

export const ButtonIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export const CoffeeName = styled.span`
  font-size: 16px;
  color: #403937;
`;
