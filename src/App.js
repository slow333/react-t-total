import './main.css';
import { CssBasic, CssMedium, CssAdvanced} from './container/domCss/02-css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <CssBasic />
        <CssMedium />
        <CssAdvanced />
      </main>
    </div>
  );
}

export default App;
