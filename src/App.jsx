import { useEffect} from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import {
  Sidenav,
  Ripple,
  Tab,
  initTE,
} from "tw-elements";
import { HomePage } from './pages/homePage';
import { SignIn } from './components/login';
import { Register } from './components/register';
import { Reset } from './components/reset';
import { DashView } from './dashboard/mainView/dashView';
import { Profile } from './dashboard/account/profile';
import { UpdateProfile } from './dashboard/account/update';
import { ChangePassword } from './dashboard/account/changePassword';
import { AccountUpgrade } from './dashboard/account/accountUpgrade';
import { KYC } from './dashboard/account/kyc';
import { PinManagemnet } from './dashboard/account/pinmanagement';
import { BankToPay } from './dashboard/funding wallet/bankTopay';
import { WalletFunding } from './dashboard/funding wallet/fundMarket';
import { BuyData } from './dashboard/buy data/buyData';
import { BuyAirtime } from './dashboard/buy data/buy airtime';
import { ElectricityBill } from './dashboard/bills/electricity';
import { CableSub } from './dashboard/bills/cablesub';
import { Transaction } from './dashboard/transaction';
import { DataTransaction } from './dashboard/mainView/dataTrasaction';
import { DataWalletSummary } from './dashboard/mainView/dataWalletSummary';
import { WalletSummary } from './dashboard/mainView/walletSummary';

function App() {
  useEffect(() => {
    
  initTE({ Sidenav, Ripple,Tab });
  }, []);

  return (
    <>
      <Router>
            <Routes>
              <Route exact path="/" element={ <HomePage/>}/>
              <Route exact path="/login" element={<SignIn/>}/>
              <Route exact path="/reset" element={<Reset/>}/>
              <Route exact path="/register" element={<Register/>}/>
              <Route exact path="/dashboard" element={<DashView/>}/>
              <Route exact path="/Profile" element={<Profile/>}/> 
              <Route exact path="/Profile/update" element={<UpdateProfile/>}/>
              <Route exact path="/password/update" element={<ChangePassword/>}/>
              <Route exact path="/account/upgrade" element={<AccountUpgrade/>}/>  
              <Route exact path="/account/Kyc" element={<KYC/>}/>
              <Route exact path="/account/pin" element={<PinManagemnet/>}/>
              <Route exact path="/bankpayment" element={<BankToPay/>}/>
              <Route exact path="/fundwallet" element={<WalletFunding/>}/>
              <Route exact path="/buy data" element={<BuyData/>}/>
              <Route exact path="/buy airtime" element={<BuyAirtime/>}/> 
              <Route exact path="/electrcitybill" element={<ElectricityBill/>}/>
              <Route exact path="/cablesub" element={<CableSub/>}/>
              <Route exact path="/transaction" element={<Transaction/>}/>
              <Route exact path="/datatransaction" element={<DataTransaction/>}/>
              <Route exact path="/dataWalletSum" element={<DataWalletSummary/>}/>
              <Route exact path="/walletSum" element={<WalletSummary/>}/>
            </Routes>
      </Router>
    </>
  )
}

export default App
