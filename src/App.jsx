import logo from './logo.svg';
import styles from './style.module.scss';
import Header from './components/header';
import Game from './components/game';

function App() {
  return (
    <div class={styles.App}>
      <Header />
      <Game />
    </div>
  );
}

export default App;
