import styled from "styled-components";

export const CoffeeSelectionContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 448px;
  height: 498px;

  background: #f3f2f2;
  border-radius: 6px 44px;
`;

export const Divider = styled.hr`
  width: 368px;
  border-top: 1px solid #e6e5e5;
`;

export const SumDescription = styled.div`
  display: flex;
  flex-direction: column;

  width: 368px;
  height: 92px;

  margin: 24px 40px;

  gap: 12px;

  font-family: "Roboto";
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;

  color: #574f4d;
`;

export const LeftSideInfo = styled.span`
  font-size: 14px;
  line-height: 18.2px;
`;
export const RightSideInfo = styled.span`
  font-size: 16px;
  line-height: 20.8px;
`;

export const LineInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TotalLineInfo = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 20px;
  font-weight: 700;
  line-height: 130%;
  color: #403937;
`;

export const ConfirmationButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ConfirmationButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 8px;
  gap: 4px;

  width: 368px;
  height: 46px;

  background: #dbac2c;
  border-radius: 6px;

  border: none;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 160%;

  text-transform: uppercase;

  color: #ffffff;
  font-stretch: 100;

  cursor: pointer;
`;
