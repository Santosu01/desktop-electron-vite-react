import { Outlet } from 'react-router-dom';
import CustomDivider from '@/modules/core/components/atoms/CustomDivider';

const Layout = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <aside className="p-4 bg-[#211f21]">Menu</aside>
      <main className="flex flex-col justify-between w-full p-4 bg-[#141314]">
        <div>
          <Outlet />
        </div>
        <footer>
          <CustomDivider />
          <p className="text-center pt-4">{`© ${currentYear} meu portifólio. Todos os direitos reservados.`}</p>
        </footer>
      </main>
    </>
  );
};

export default Layout;
