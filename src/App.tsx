import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import Button from './components/Button';

function App() {


  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: 'flex', justifyContent:'center', gap: '1rem', padding: '2rem' }}> 
        <Button variant="primary">Primary</Button>
      </div>
  </ThemeProvider>
  )
}

export default App
