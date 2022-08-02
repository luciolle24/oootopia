import { Fragment } from 'react';
import Footer from './footer/footer';
import MainNavBar from './header/navigation';

function Layout(props) {
  return (
    <Fragment>
      <header>
        <MainNavBar />
      </header>
      <main>
        {props.children}
        <Footer />
      </main>
    </Fragment>
  );
}

export default Layout;
