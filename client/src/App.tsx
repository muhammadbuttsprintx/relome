import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import useWindowDimensions from './helpers/useWindowDimensions';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './components/Routes';

const App = () => {
  const { width } = useWindowDimensions();
  // const message: null | string = useAppSelector(
  //   (state: StoreState) => state.app.message,
  // );
  // const messageVariant:
  //   | 'primary'
  //   | 'secondary'
  //   | 'success'
  //   | 'danger'
  //   | 'warning'
  //   | 'info'
  //   | 'light'
  //   | 'dark' = useAppSelector((state: StoreState) => state.app.messageVariant);
  return (
    <>
      <div id="top" className="bgAppBlue md:bg-white flex flex-col">
        <Router>
          <Navbar />
          <Routes />
        </Router>

        {width !== null && width > 768 && (
          <div className="bgAppBlue">
            <Footer />
          </div>
        )}
      </div>

      {/* {message && <Message msg={message} variant={messageVariant} />} */}
    </>
  );
};

export default App;
