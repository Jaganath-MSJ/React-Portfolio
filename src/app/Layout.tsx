import { Outlet } from 'react-router-dom';
import { UiProvider, useUi } from './providers/UiProvider';
import { Navigation } from '@/features/navigation/Navigation';
import { Footer } from '@/features/footer/Footer';
import { CommandPalette } from '@/features/command-palette/CommandPalette';
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
      <CommandPalette />
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
