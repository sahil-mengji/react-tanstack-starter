import React, { Suspense } from 'react';

const TanStackRouterDevtools =
  import.meta.env.MODE === 'dev'
    ? () => null // Render nothing in dev
    : React.lazy(() =>
        import('@tanstack/router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools
          // For Embedded Mode:
          // default: res.TanStackRouterDevtoolsPanel
        }))
      );
const ReactQueryDevtoolsPanel =
  import.meta.env.MODE === 'dev'
    ? () => null // Render nothing in dev
    : React.lazy(() =>
        import('@tanstack/react-query-devtools').then((res) => ({
          default: res.ReactQueryDevtoolsPanel
        }))
      );

export default function Devtools() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <Suspense>
        <TanStackRouterDevtools />
        <button
          className="fixed bottom-0 left-40 p-1 px-3 text-sm m-2 bg-[#16181f] text-white rounded border border-gray-500"
          onClick={() => setIsOpen(!isOpen)}>
          Tanstack Query
        </button>
        {isOpen && <ReactQueryDevtoolsPanel onClose={() => setIsOpen(false)} />}
      </Suspense>
    </div>
  );
}
