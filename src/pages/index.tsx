import * as React from 'react';
import { ChevronRightIcon } from '@heroicons/react/solid';

import { Logo } from '@/components/logo';
import { Link } from '@/components/link';

import { ReactComponent as GitHubIcon } from '@/images/icons/github.svg';
import { ThemeSwitcher } from '@/components/theme-switcher';

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
    href: 'https://www.github.com/fahmiidris-labs/js-nextjs-tailwindcss-starter-template',
  },
  {
    title: 'Next.js + Tailwind CSS + TypeScript',
    description: 'A starter template for Next.js with Tailwind CSS and TypeScript',
    href: 'https://www.github.com/fahmiidris-labs/ts-nextjs-tailwindcss-starter-template',
  },
  {
    title: 'CRA + Tailwind CSS + JavaScript',
    description: 'A starter template for CRA with Tailwind CSS and JavaScript',
    href: 'https://www.github.com/fahmiidris-labs/js-cra-tailwindcss-starter-template',
  },
  {
    title: 'CRA + Tailwind CSS + TypeScript',
    description: 'A starter template for CRA with Tailwind CSS and TypeScript',
    href: 'https://www.github.com/fahmiidris-labs/ts-cra-tailwindcss-starter-template',
  },
];

const HomePage: TNextPageWithLayout = (): JSX.Element => {
  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-40">
        <div className="container relative">
          <div className="flex h-[58px] w-full items-center justify-end">
            <div className="flex items-center">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </nav>
      <div className="relative mt-12 flex min-h-screen flex-col items-center justify-center px-4 md:mt-0">
        <main className="container flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <Logo className="h-10 w-auto dark:!text-white" />
            <h1 className="pt-4 text-center text-lg font-semibold text-slate-700 dark:text-white md:text-3xl">
              Documentation for Starter Template
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Start your project with this starter template.
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 py-10">
            <Link
              href="https://github.com/fahmiidris-labs?tab=repositories&q=starter"
              openNewTab={true}
              className="inline-flex items-center justify-between space-x-2 rounded-lg border border-transparent bg-slate-700 py-2 pl-4 pr-3 text-sm font-semibold text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 dark:border-transparent dark:bg-slate-800 dark:text-slate-300 dark:ring-offset-slate-900 dark:hover:bg-slate-700"
            >
              <GitHubIcon className="h-5 w-5" />
              <span className="hidden md:block">GitHub Repository</span>
              <span className="block md:hidden">GitHub</span>
            </Link>
            <Link
              href="/docs"
              className="inline-flex items-center justify-between space-x-2 rounded-lg border border-slate-300 bg-white py-2 pl-4 pr-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 dark:border-transparent dark:bg-cyan-400 dark:text-slate-700 dark:ring-offset-slate-900 dark:hover:bg-cyan-500"
            >
              Documentation
            </Link>
          </div>
          <div className="">
            <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
              {starterTemplates.map((starterTemplate) => (
                <li key={starterTemplate.title} className="relative flex flex-row-reverse">
                  <div className="peer group flex-auto">
                    <h4 className="mb-2 font-semibold leading-6 text-slate-900 dark:text-slate-200">
                      <Link href={starterTemplate.href} className="animated-underline">
                        {starterTemplate.title}
                      </Link>
                      <ChevronRightIcon className="ml-3 -mt-px inline h-4 w-auto overflow-visible text-slate-400 opacity-0 group-focus-within:opacity-100 group-hover:opacity-100" />
                    </h4>
                    <p className="text-sm leading-6 text-slate-700 dark:text-slate-400">
                      {starterTemplate.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </main>
        <footer className="container mt-8 flex items-center justify-center py-4 md:absolute md:bottom-0 md:mt-0">
          <p className="flex items-center justify-center space-x-4 text-xs font-semibold">
            © {new Date().getFullYear()} - By
            <Link
              href="https://www.fahmiidris.dev"
              openNewTab={true}
              className="animated-underline ml-1 text-slate-700 dark:text-white"
            >
              Fahmi Idris
            </Link>
            . All Rights Reserved.
          </p>
        </footer>
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
