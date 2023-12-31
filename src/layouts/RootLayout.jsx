import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import './rootLayout.css'

const RootLayout = ({ children, title, backButton, searchBar }) => {
  return (
    <div className="background-hex">
      <div className="background-hex-two">
        <div className="background-lines">
          <div className=" d-flex flex-column">
            <Navbar title={title} backButton={backButton} searchBar={searchBar} />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RootLayout
