import Extensions from './components/Extensions'
import Faq from './components/FAQ'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Subscribe from './components/Subscribe'
import Features from './components/ui/Features'
import MainLayout from './Layout/MainLayout'
import PaddedLayout from './Layout/PaddedLayout'


function App() {

  return (
    <MainLayout>
      <Header />
      <div className='bg-soft-blue w-full h-44 rounded-full absolute -z-10 -right-36 top-28 overflow-hidden lg:w-1/2 lg:top-[400px] lg:h-64'></div>
      <PaddedLayout>
        <Hero />
        <Features />
        <Extensions />
        <Faq />
      </PaddedLayout>
      <Subscribe />
      <Footer />
    </MainLayout>
  )
}

export default App
