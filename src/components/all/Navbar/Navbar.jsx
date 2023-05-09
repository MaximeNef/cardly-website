import Footer from './Footer/Footer';
import Header from './Header/Header';

const Navbar = ({ children, current }) => {
  return (
    <div className="w-full bg-backgroundWhite">
      <Header />
      {children}
      {!(current == 'waitlist') ? <Footer /> : null}
    </div>
  );
};

export default Navbar;
