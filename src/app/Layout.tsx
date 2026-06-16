import { Outlet } from 'react-router-dom';
import { UiProvider, useUi } from './providers/UiProvider';
import { Navigation } from '@/features/navigation/Navigation';
import { Footer } from '@/features/footer/Footer';
import { ScrollProgress } from '@/shared/ui/ScrollProgress';
import { Toast } from '@/shared/ui/Toast';

function Shell() {
  const { toastMsg } = useUi();
  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Toast msg={toastMsg} />
    </>
  );
}

export function Layout() {
  return (
    <UiProvider>
      <Shell />
    </UiProvider>
  );
}
