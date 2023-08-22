import React from "react";

export const InfiniteScroll: React.FC = () => {
  return (
    <div
      x-data="{}"
      x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
      className="mt-24 w-full inline-flex flex-nowrap overflow-hidden bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
    >
      <ul
        x-ref="logos"
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
      >
        {[1, 2, 3, 4, 5, 2, 3, 5, 4, 2, 5, 5, 6, 6, 7, 3].map(
          (_, index: number) => {
            return (
              <li key={index} className="w-full">
                Lorem&nbsp;Ipsum
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};
