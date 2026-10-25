'use client';

/**
 * Adsterra native banner slot.
 *
 * The network's loader looks up `#container-<hash>` and injects the ad into
 * it. Scripts inserted through innerHTML never execute, so following a
 * client-side route change the banner silently stayed empty — the script tags
 * are therefore stripped from the rendered markup and re-created with
 * createElement in an effect. The container div is still server-rendered so it
 * exists before the effect fires.
 */

import { useEffect, useRef } from 'react';

const AD_SCRIPT_SRC =
  'https://bauval.org/21/a5cfce17260d4208b83eeff59ec76e39';
const AD_CONTAINER_ID = 'container-a5cfce17260d4208b83eeff59ec76e39';

interface AdsterraNativeBannerProps {
  className?: string;
}

export default function AdsterraNativeBanner({
  className = '',
}: AdsterraNativeBannerProps) {
  const injected = useRef(false);

  useEffect(() => {
    if (injected.current) return;
    injected.current = true;

    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.src = AD_SCRIPT_SRC;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <aside
      className={`not-prose my-10 ${className}`}
      aria-label="Advertisement"
    >
      <p className="text-[10px] uppercase tracking-[0.15em] text-gray-600 mb-2">
        Advertisement
      </p>
      <div id={AD_CONTAINER_ID} />
    </aside>
  );
}
