import Image from './Image';
import Link from './Link';

import { logEvent as logGAEvent } from './analytics/GoogleAnalytics';

const Card = ({ title, description, imgSrc, href }) => {
  const logClickEvent = () => {
    logGAEvent('view_project');
  };

  return (
    <div className="p-4 md:w-1/2 md" style={{ maxWidth: '544px' }}>
      <div className="h-full overflow-hidden border-2 border-gray-200 rounded-md border-opacity-60">
        {href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <img
              onClick={logClickEvent}
              alt={title}
              src={imgSrc}
              className="object-cover object-center lg:h-48 md:h-36"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <img
            alt={title}
            src={imgSrc}
            className="object-cover object-center lg:h-48 md:h-36"
            width={544}
            height={306}
          />
        )}
        <div className="p-6">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
            {href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
          <p className="mb-3 prose text-gray-500 max-w-none">{description}</p>
          {href && (
            <Link
              href={href}
              className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600"
              aria-label={`Link to ${title}`}
            >
              Learn more &rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
