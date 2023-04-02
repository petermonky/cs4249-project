import styles from './App.module.scss'
import { useSearchParams } from 'react-router-dom';
import Main from "../Main"
import { useRef } from 'react';

function App() {
  const [searchParams] = useSearchParams();
  const idRef = useRef(searchParams.get("id"))

  return (
    <div className={styles.app}>
      <Main />
    </div>
  )
}

export default App
