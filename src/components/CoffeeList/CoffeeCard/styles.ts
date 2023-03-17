import styled from "styled-components";

export const CardContainer = styled.div`
  width: 256px;
  height: 310px;

  display: flex;
  align-items: center;
  flex-direction: column;

  background: #f3f2f2;
  border-radius: 6px 36px;
`;

export const ChipsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 8px;
`;

export const Name = styled.span`
  font-family: "Baloo 2", sans-serif;

  font-size: 20px;
  font-weight: 700;

  margin-top: 16px;
`;

export const Description = styled.span`
  font-family: "Roboto", sans-serif;

  font-size: 14px;
  font-weight: 400;
  color: #8d8686;

  line-height: 130%;
  text-align: center;

  padding: 8px 20px 0 20px;
`;

export const PriceCartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 208px;
  height: 38px;

  padding-top: 33px;
`;

export const CurrencyValueContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  gap: 5px;

  line-height: 130%;
  color: #574f4d;
`;

export const Currency = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
`;

export const Value = styled.span`
  font-family: "Baloo2", sans-serif;
  font-size: 24px;
  font-weight: 800;
`;

export const AmountCartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 8px;
`;

export const CoffeeImage = styled.img`
  margin-top: -20px;
`;

export const CartIcon = styled.img``;
