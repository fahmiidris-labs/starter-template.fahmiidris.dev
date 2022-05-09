import * as React from 'react';
import { ExternalLinkIcon } from '@heroicons/react/outline';

import { Logo } from '@/components/logo';
import { Link } from '@/components/link';

import type { TNextPageWithLayout } from 'next';

type TStarterTemplate = {
  title: string;
  description: string;
  href: string;
};

const starterTemplates: TStarterTemplate[] = [
  {
    title: 'Next.js + Tailwind CSS + JavaScript',
    description: 'A starter template for Next.js with Tailwind CSS and JavaScript',
    href: '',
  },
  {
    title: 'Next.js + Tailwind CSS + TypeScript',
    description: 'A starter template for Next.js with Tailwind CSS and TypeScript',
    href: '',
  },
  {
    title: 'CRA + Tailwind CSS + JavaScript',
    description: 'A starter template for CRA with Tailwind CSS and JavaScript',
    href: '',
  },
  {
    title: 'CRA + Tailwind CSS + TypeScript',
    description: 'A starter template for CRA with Tailwind CSS and TypeScript',
    href: '',
  },
];

const HomePage: TNextPageWithLayout = (): JSX.Element => {
  return (
    <>
      <div className="relative flex min-h-screen items-center justify-center px-4">
        <div className="container flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <Logo className="h-10 w-auto !text-white" />
            <h1 className="pt-4 text-center text-3xl font-semibold text-white">
              Documentation for Starter Template
            </h1>
            <p className="text-sm text-slate-400">Start your project with this starter template.</p>
          </div>
          <div className="py-8">
            <Link
              href="/docs"
              className="inline-flex items-center justify-between space-x-2 rounded-lg border border-slate-300 bg-white py-2 pl-4 pr-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 dark:border-transparent dark:bg-slate-800 dark:text-slate-300 dark:ring-offset-slate-900 dark:hover:bg-slate-700"
            >
              Documentation
            </Link>
          </div>
          <div className="grid max-w-2xl grid-cols-2 gap-4">
            {starterTemplates.map((template) => (
              <Link
                key={template.title}
                href={template.href}
                openNewTab={true}
                className="col-span-1 inline-flex items-center justify-between space-x-2 rounded-lg border border-slate-300 bg-white py-2 pl-4 pr-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 dark:border-transparent dark:bg-slate-800 dark:text-slate-300 dark:ring-offset-slate-900 dark:hover:bg-slate-700"
              >
                <span>{template.title}</span>
                <ExternalLinkIcon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
        <div className="container absolute bottom-0 flex items-center justify-center py-4">
          <p className="flex items-center justify-center space-x-4 text-xs font-semibold">
            © {new Date().getFullYear()} - By
            <Link
              href="https://www.fahmiidris.dev"
              openNewTab={true}
              className="animated-underline ml-1 text-white"
            >
              Fahmi Idris
            </Link>
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

HomePage.Props = {
  Layout: React.Fragment,
  meta: {
    title: 'Welcome',
    description: 'Start your project with this starter template.',
  },
};

export default HomePage;
