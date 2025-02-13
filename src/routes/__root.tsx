import * as React from 'react';
import { Outlet, createRootRoute } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: RootComponent
});

function RootComponent() {
  return (
    <React.Fragment>
      <div className="bg-red-300 w-full h-full p-8">
        Hello "__root"! <Outlet />
      </div>
    </React.Fragment>
  );
}
