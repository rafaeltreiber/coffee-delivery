import styled from "styled-components";

interface AmountSelectorContainerProps {
  smallSize: boolean;
}

export const AmountSelectorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: #e6e5e5;
  border-radius: 6px;
`;

export const CounterWrapper = styled.div<AmountSelectorContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 72px;
  height: ${(props) => (props.smallSize ? "32px" : "38px")};

  gap: 4px;
`;

export const MinusSelectorSign = styled.img`
  width: 14px;
  height: 14px;

  margin: 12px 4px 12px 8px;

  cursor: pointer;
`;

export const PlusSelectorSign = styled.img`
  width: 14px;
  height: 14px;

  margin: 12px 8px 12px 4px;

  cursor: pointer;
`;
