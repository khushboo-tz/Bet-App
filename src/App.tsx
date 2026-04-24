import { HashRouter, Routes, Route } from 'react-router-dom';
import PhoneFrame from './components/PhoneFrame';
import Splash from './screens/Splash';
import Onboarding from './screens/Onboarding';
import Home from './screens/Home';
import BetDetail from './screens/BetDetail';

export default function App() {
  return (
    <HashRouter>
      <PhoneFrame>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/home" element={<Home />} />
          <Route path="/bet/:id" element={<BetDetail />} />
        </Routes>
      </PhoneFrame>
    </HashRouter>
  );
}
