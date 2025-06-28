import './main.css';
import {Navbar} from './components';
import MyRoutes from './components/Navbar/router';

function App() {
  return (
    <div>
      <Navbar />
      {/* <CssApp /> */}
      <MyRoutes />
    </div>
  );
}

export default App;
