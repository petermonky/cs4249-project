import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styles from './App.module.scss'
import Main from "../Main"
import Scan from "../Scan"
import PayTo from "../PayTo"
import ShopeePay from '../ShopeePay'
import TopUp from '../TopUp'

function App() {
  return (
    <div className={styles.app}>
      <Router basename="/cs4249-project">
        <Routes>
          <Route path="/:variant">
            <Route index element={<Main />} />
            <Route path='scan' element={<Scan />} />
            <Route path='payto' element={<PayTo />} />
            <Route path='shopeepay' element={<ShopeePay />} />
            <Route path='topup' element={<TopUp />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
