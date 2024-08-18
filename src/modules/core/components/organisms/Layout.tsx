import { Outlet } from 'react-router-dom';

const Layout = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <aside>Menu</aside>
      <main className="flex flex-col justify-between w-full">
        <div>
          <Outlet />
        </div>
        <footer>
          <p className="text-center">{`© ${currentYear} meu portifólio. Todos os direitos reservados.`}</p>
        </footer>
      </main>
    </>
  );
};

export default Layout;
