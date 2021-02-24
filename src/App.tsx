import { HorseProvider } from "./context/horse";
import Routes from "./routes";

// Styles
import './styles/global.css';

function App() {
  return (
    <HorseProvider>
      <Routes />
    </HorseProvider>
  );
}

export default App;
