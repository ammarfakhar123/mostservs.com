import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumb({ items = [], isDark = true }) {
  const textColor = isDark ? 'text-slate-300' : 'text-slate-600';
  const linkColor = isDark ? 'text-slate-300 hover:text-[#0098D4]' : 'text-slate-600 hover:text-[#F37021]';
  const activeColor = isDark ? 'text-white font-bold' : 'text-slate-900 font-bold';
  const separatorColor = isDark ? 'text-slate-400' : 'text-slate-400';

  return (
    <nav aria-label="Breadcrumb" className={`text-xs ${textColor} font-medium`}>
      <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2">
        <li className="flex items-center gap-1.5">
          <Link
            to="/"
            className={`flex items-center gap-1 transition-colors ${linkColor}`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${separatorColor}`} />
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          if (isLast) {
            return (
              <li
                key={item.label}
                className={`line-clamp-1 max-w-[260px] sm:max-w-none ${activeColor}`}
                aria-current="page"
              >
                {item.label}
              </li>
            );
          }

          return (
            <li key={item.label} className="flex items-center gap-1.5">
              <Link
                to={item.href}
                className={`transition-colors line-clamp-1 ${linkColor}`}
              >
                {item.label}
              </Link>
              <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${separatorColor}`} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
