import Link from 'next/link';

const Header = () => {
  const linkStyles =
    'px-2 md:px-4 hover:text-red-500 dark:hover:text-red-400 hover:underline';

  const pages = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'Sign Up',
      path: '/signup',
    },
    {
      title: 'Standings',
      path: '/standings',
    },
    {
      title: 'Player Picks',
      path: '/picks',
    },
  ];

  return <h1>Header</h1>;
};

export default Header;
