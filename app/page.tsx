import Advantages from './(advantages)/layout'
import Navbar from './(nav)/layout'
import Products from './(products)/layout'
import Markets from './(markets)/layout'
import About from './(about)/layout'
import Contact from './(contact)/layout'
import Footer from './(footer)/layout'

export default function Home() {
  return (
    <>
      <Navbar />

      <>
        <div id="home" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', padding: '150px 20px 20px 20px', color: '#fff', background: 'black' }}>
          <div style={{ display: 'grid', position: 'relative' }}>
            <h1 style={{ fontSize: '46px', textAlign: 'center', paddingBottom: '2vh', color: '#8145c2' }}>Contactless fingerprint recognition</h1>
            <h2 style={{ fontSize: '24px', textAlign: 'center', paddingBottom: '16vh' }}>Top-tier algorithm accuracy in NIST PFT III evaluation</h2>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap' }}>
              <button className='home-box'>Highly accurate neural network algorithms</button>
              <button className='home-box'>Work with scans and photo images</button>
              <button className='home-box'>All types of fingerprints are supported</button>
            </div>
          </div>
        </div>

        <Products />

        <Advantages />

        <Markets />

        <About />

        <Contact />

        <Footer />
      </>
    </>
  )
}
