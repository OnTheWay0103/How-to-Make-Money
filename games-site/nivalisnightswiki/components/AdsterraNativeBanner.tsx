/**
 * Adsterra native banner slot.
 *
 * The network's loader looks up `#container-<hash>` and injects the ad into
 * it. Both tags are emitted as one raw HTML block so the browser parses them
 * in source order — rendering the script through React can hoist it to
 * <head>, where the container does not exist yet.
 */

const AD_SCRIPT_SRC =
  'https://bauval.org/21/a5cfce17260d4208b83eeff59ec76e39';
const AD_CONTAINER_ID = 'container-a5cfce17260d4208b83eeff59ec76e39';

interface AdsterraNativeBannerProps {
  className?: string;
}

export default function AdsterraNativeBanner({
  className = '',
}: AdsterraNativeBannerProps) {
  const snippet = [
    `<script async data-cfasync="false" src="${AD_SCRIPT_SRC}"></script>`,
    `<div id="${AD_CONTAINER_ID}"></div>`,
  ].join('');

  return (
    <aside
      className={`not-prose my-10 ${className}`}
      aria-label="Advertisement"
    >
      <p className="text-[10px] uppercase tracking-[0.15em] text-gray-600 mb-2">
        Advertisement
      </p>
      <div dangerouslySetInnerHTML={{ __html: snippet }} />
    </aside>
  );
}
