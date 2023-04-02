import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styles from './App.module.scss'
import Main from "../Main"
import Scan from "../Scan"
import PayTo from "../PayTo"

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Routes>
          <Route path="/1">
            <Route index element={<Main />} />
            <Route path='scan' element={<Scan />} />
            <Route path='payto' element={<PayTo />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
