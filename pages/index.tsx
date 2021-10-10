import type { NextPage } from 'next'
import { MainComponent } from '../components/smart/index';
import { ThemeProvider } from '@mui/styles';

const theme = {};

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainComponent />
    </ThemeProvider>
  )
}

export default Home
