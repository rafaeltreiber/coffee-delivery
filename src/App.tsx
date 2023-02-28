import { ThemeProvider } from 'styled-components';
import { Main } from './components/Main';
import { defaultTheme } from './styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Main />;
    </ThemeProvider>
  );
}

export default App;
