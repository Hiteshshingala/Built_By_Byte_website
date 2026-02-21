'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Accordion({ items }) {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="divide-y divide-neutral-200 border border-neutral-200 rounded-xl overflow-hidden bg-white">
      {items.map((item, index) => {
        const id = index;
        const isOpen = openId === id;
        return (
          <div key={id}>
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : id)}
              className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-semibold text-neutral-900 hover:bg-neutral-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${id}`}
              id={`accordion-heading-${id}`}
            >
              {item.question}
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-neutral-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <div
              id={`accordion-panel-${id}`}
              role="region"
              aria-labelledby={`accordion-heading-${id}`}
              className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`}
            >
              <div className="px-6 pb-4 pt-0 text-neutral-600 leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
