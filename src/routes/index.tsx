import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: RouteComponent
});

function RouteComponent() {
  return <div className="bg-blue-400 w-full h-full">Hello "/"!</div>;
}
