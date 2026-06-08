import { useCallback, useRef, useState } from 'react';

export function useToast() {
  const [toastMsg, setToastMsg] = useState('');
  const tRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = useCallback((msg: string) => {
    setToastMsg(msg);
    if (tRef.current) clearTimeout(tRef.current);
    tRef.current = setTimeout(() => setToastMsg(''), 2200);
  }, []);

  return { toastMsg, showToast };
}
