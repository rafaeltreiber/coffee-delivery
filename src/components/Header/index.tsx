import Logo from '../../../public/img/Logo.svg'
import Location from '../../../public/img/Location.svg'
import Cart from '../../../public/img/Cart.svg'
import { HeaderContainer, LocationCartContainer, LogoWrapper } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <LogoWrapper>
        <img src={Logo} alt='logo svg' />
      </LogoWrapper>
      <LocationCartContainer>
        <img src={Location} alt='location svg' />
        <img src={Cart} alt='cart svg' />
      </LocationCartContainer>
    </HeaderContainer>
  );
}
