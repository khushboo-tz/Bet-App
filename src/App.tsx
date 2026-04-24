import { HashRouter, Routes, Route } from 'react-router-dom';
import PhoneFrame from './components/PhoneFrame';
import Splash from './screens/Splash';
import Intro from './screens/Intro';
import Login from './screens/Login';
import Otp from './screens/Otp';
import Home from './screens/Home';
import BetDetail from './screens/BetDetail';
import { AuthProvider } from './auth';

export default function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <PhoneFrame>
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/otp" element={<Otp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/bet/:id" element={<BetDetail />} />
          </Routes>
        </PhoneFrame>
      </HashRouter>
    </AuthProvider>
  );
}
