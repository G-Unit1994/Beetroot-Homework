import React from 'react';
import Header from './components/Header';
import { CityList } from './components/CityList'; // Змінено імпорт

import './css/styles.css';
import './css/weather-icons.main.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="container--inner">
          <Header />
          <main className="content">
            <CityList /> {/* Використано CityList як іменований експорт */}
          </main>
          <footer>
            Have a nice day and don't forget umbrella if you are in New Delhi now!
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
// import Header from './components/Header';
// import CityList from './components/CityList';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <div className="container">
//       <div className="container--inner">
//         <Header />
//         <main className="content">
//           <CityList />
//         </main>
//         <footer>
//           Have a nice day and don't forget umbrella if you are in New Delhi now!
//         </footer>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default App;
