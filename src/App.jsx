import './App.css'
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

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
import { RechargePin } from './dashboard/pin/rechargePin';
import { ResultChecker } from './dashboard/pin/buyscratchcard';
import { BuyDataCoupon } from './dashboard/buy data/dataCupon';
import { BulkSmS } from './dashboard/pin/bulkSim';
import { Provider } from 'react-redux';
import store from './store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CreateUserAccount } from './dashboard/account/createAccount';
import { ProtectedRoute } from './protectedRoute';
import { ProtectedAuthRoute } from './protectedAuthRoute';

function App() {
  return (
    <>
     <Provider store={store}>
        <Router>
              <Routes>
                <Route exact path="/" element={ <HomePage/>}/>
                <Route
                  element={
                    <ProtectedAuthRoute/>
                  }
                  >
                <Route exact path="/login" element={<SignIn/>}/>
                <Route exact path="/reset" element={<Reset/>}/>
                <Route exact path="/register" element={<Register/>}/>
                </Route>
                <Route
                  element={
                    <ProtectedRoute/>
                  }
               >
                <Route exact path="/dashboard" element={<DashView/>}/>
                <Route exact path="/account">
                <Route exact path="/account/Profile" element={<Profile/>}/> 
                <Route exact path="/account/Profile/update" element={<UpdateProfile/>}/>
                <Route exact path="/account/create" element={<CreateUserAccount/>}/>
                <Route exact path="/account/password/update" element={<ChangePassword/>}/>
                <Route exact path="/account/upgrade" element={<AccountUpgrade/>}/>  
                <Route exact path="/account/Kyc" element={<KYC/>}/>
                <Route exact path="/account/pin" element={<PinManagemnet/>}/>
                </Route>
                <Route exact path="/bankpayment" element={<BankToPay/>}/>
                <Route exact path="/fundwallet" element={<WalletFunding/>}/>
                <Route exact path="/purchase">
                <Route exact path="/purchase/data" element={<BuyData/>}/>
                <Route exact path="/purchase/airtime" element={<BuyAirtime/>}/>
                <Route exact path="/purchase/scratchcard" element={<ResultChecker/>}/>
                <Route exact path="/purchase/rechargeCardPin" element={<RechargePin/>}/>
                <Route exact path="/purchase/datacoupon" element={<BuyDataCoupon/>}/>
                <Route exact path="/purchase/bulkSms" element={<BulkSmS/>}/>
                </Route>
                <Route exact path="/electrcitybill" element={<ElectricityBill/>}/>
                <Route exact path="/cablesub" element={<CableSub/>}/>
                <Route exact path="/transaction" element={<Transaction/>}/>
                <Route exact path="/datatransaction" element={<DataTransaction/>}/>
                <Route exact path="/dataWalletSum" element={<DataWalletSummary/>}/>
                <Route exact path="/walletSum" element={<WalletSummary/>}/>
                </Route>
              </Routes>
        </Router>
        <ToastContainer />
      </Provider>
    </>
  )
}

export default App
