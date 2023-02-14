import Header from './Header'
import Footer from './Footer'

const Layout = ({ alternateLanguages, header, footer, children }) => (
  <div>
    <Header navigation={header} />
    <main>{children}</main>
    <Footer navigation={footer} alternateLanguage={alternateLanguages} />
  </div>
)

export default Layout
