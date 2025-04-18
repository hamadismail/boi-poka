import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../components/Footer/Footer';
import './root.css';
import { PulseLoader } from 'react-spinners';

const Root = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <div>
      <Navbar></Navbar>

      {isNavigating ? (
        <div className="flex justify-center mt-8">
          <PulseLoader color="#2f4f4f"></PulseLoader>
        </div>
      ) : (
        <Outlet></Outlet>
      )}

      <Footer></Footer>
    </div>
  );
};

export default Root;
