import Minus from '../../../../../public/img/Minus.svg';
import Plus from '../../../../../public/img/Plus.svg';

import { AmountSelectorContainer, CounterWrapper, MinusSelectorSign, PlusSelectorSign } from "./styles";

export function AmountSelector() {
  return (
    <AmountSelectorContainer>
      <CounterWrapper>
        <MinusSelectorSign src={Minus} alt='minus sign' />
        <span>1</span>
        <PlusSelectorSign src={Plus} alt='plus sign' />
      </CounterWrapper>
    </AmountSelectorContainer>
  )
}