import Minus from '../../../../../public/img/Minus.svg';
import Plus from '../../../../../public/img/Plus.svg';

import { AmountSelectorContainer, CounterWrapper, MinusSelectorSign, PlusSelectorSign } from "./styles";

interface AmountSelectorProps {
  smallSize?: boolean;
}

export function AmountSelector({ smallSize }: AmountSelectorProps) {
  return (
    <AmountSelectorContainer>
      <CounterWrapper smallSize>
        <MinusSelectorSign src={Minus} alt='minus sign' />
        <span>1</span>
        <PlusSelectorSign src={Plus} alt='plus sign' />
      </CounterWrapper>
    </AmountSelectorContainer>
  )
}