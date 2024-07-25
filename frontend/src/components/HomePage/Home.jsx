import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import FirstDivision from './FirstDivision'
import SecondDivision from './SecondDivision'
import ThirdDivision from './ThirdDivision'
import FourthDivision from './FourthDivision'

const Home = () => {
  return (
    <main>
      <Header />
      <div className="home-page-header"></div>
      <main className='home'>
        <FirstDivision />
        <SecondDivision />
        <ThirdDivision />
        <FourthDivision />
      </main>
      <Footer />
    </main>
  );
}

export default Home;