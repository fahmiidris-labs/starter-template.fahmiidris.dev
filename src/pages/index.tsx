import * as React from 'react';

import type { TNextPageWithLayout } from 'next';

const HomePage: TNextPageWithLayout = (): JSX.Element => {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center px-4">
        <h1 className="text-center text-xl font-semibold">
          <span className="text-cyan-400">starter-template.fahmiidris.dev</span> currently under
          development!
        </h1>
      </div>
    </>
  );
};

HomePage.Props = {
  Layout: React.Fragment,
  meta: {
    title: 'Home',
    description: 'Start your next Next.js project with this starter template.',
  },
};

export default HomePage;
