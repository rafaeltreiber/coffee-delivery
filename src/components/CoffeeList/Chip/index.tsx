import { ChipContainer } from './styles';

interface IChipProps {
  text: string;
}

export function Chip({ text }: IChipProps) {
  return (
    <ChipContainer>
      {text}
    </ChipContainer>
  )
}
