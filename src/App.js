import './App.css';
import PostMessages from './components/PostMessages';
import { Provider } from 'react-redux'
import { store } from './actions/store'
import { Container, AppBar, Typography } from '@material-ui/core';

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="lg">
        <AppBar position="static" color="primary">
          <Typography
            variant="h3"
            align="center"
          >
            Post Center
          </Typography>
        </AppBar>
        <PostMessages />
      </Container>
    </Provider>
  );
}

export default App;
