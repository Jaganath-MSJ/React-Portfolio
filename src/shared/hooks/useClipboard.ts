import { useCallback, useRef, useState } from 'react';

export function useClipboard(onToast?: (msg: string) => void) {
  const [copiedKey, setCopiedKey] = useState('');
  const tRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const copy = useCallback(
    async (text: string, key: string) => {
      try {
        await navigator.clipboard.writeText(text);
        setCopiedKey(key);
        onToast?.(`Copied ${key}`);
        if (tRef.current) clearTimeout(tRef.current);
        tRef.current = setTimeout(() => setCopiedKey(''), 1600);
      } catch {
        onToast?.("Couldn't copy — try selecting manually");
      }
    },
    [onToast]
  );

  return { copy, copiedKey };
}
