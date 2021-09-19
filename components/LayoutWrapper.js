import { useState, useEffect } from 'react';
import { logEvent as logGAEvent } from './analytics/GoogleAnalytics';
import headerNavLinks from '@/data/headerNavLinks';
import Link from './Link';
import SectionContainer from './SectionContainer';
import Footer from './Footer';
import MobileNav from './MobileNav';

const LayoutWrapper = ({ children }) => {
  const [show, setShow] = useState(false);

  const logClickEvent = () => {
    logGAEvent('subscribe_youtube');
  }

  useEffect(() => {
    let timer1 = setTimeout(() => setShow(true), 10 * 1000)
    return () => {
      clearTimeout(timer1)
    }
  }, []);

  return (
    <>
      {show && (
        <div x-data className="bg-red-100 p-5 w-full rounded">
          <div className="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
            <div className="flex space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="flex-none fill-current text-red-500 h-4 w-4"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
              <div className="flex-1 leading-tight text-sm text-red-700 font-medium">
                <a
                  href="https://www.youtube.com/channel/UCw05fUBPwmpu-ehXFMqfdMw?sub_confirmation=1"
                  target="_blank"
                  rel="referrer noreferrer"
                  onClick={logClickEvent}
                >
                  Suscríbete a mi canal de Youtube.
                </a>
              </div>
              <button type="button" onClick={() => setShow(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="flex-none fill-current text-red-600 h-3 w-3"
                >
                  <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
      <SectionContainer>
        <div className="flex flex-col justify-between h-screen">
          <header className="flex items-center justify-between py-10">
            <div>
              <Link href="/" aria-label="Tailwind CSS Blog">
                <div className="flex items-center justify-between">
                  <div className="mr-3">
                    <img
                      src="https://s3.amazonaws.com/gndx.dev/gndx.png"
                      className="w-16 rounded"
                    />
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex items-center text-base leading-5">
              <div className="hidden sm:block">
                {headerNavLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              <MobileNav />
            </div>
          </header>
          <main className="mb-auto">{children}</main>
          <Footer />
        </div>
      </SectionContainer>
    </>
  );
};

export default LayoutWrapper;
