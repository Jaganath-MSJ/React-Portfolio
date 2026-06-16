import { createContext, useContext, type ReactNode } from 'react';
import { useTheme, type Theme } from '@/shared/hooks/useTheme';
import { useToast } from '@/shared/hooks/useToast';
import { useClipboard } from '@/shared/hooks/useClipboard';

interface UiContextValue {
  theme: Theme;
  toggleTheme: () => void;
  toastMsg: string;
  showToast: (msg: string) => void;
  copy: (text: string, key: string) => Promise<void>;
  copiedKey: string;
}

const UiContext = createContext<UiContextValue | null>(null);

export function UiProvider({ children }: { children: ReactNode }) {
  const { theme, toggleTheme } = useTheme();
  const { toastMsg, showToast } = useToast();
  const { copy, copiedKey } = useClipboard(showToast);

  return (
    <UiContext.Provider value={{ theme, toggleTheme, toastMsg, showToast, copy, copiedKey }}>
      {children}
    </UiContext.Provider>
  );
}

export function useUi() {
  const ctx = useContext(UiContext);
  if (!ctx) throw new Error('useUi must be used inside <UiProvider>');
  return ctx;
}
