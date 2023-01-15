import Header from './Header';
import Footer from './Footer';

const Layout = (props: any) => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center flex-1 w-full max-w-screen-lg px-4 text-center">
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
