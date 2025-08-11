import React from 'react';
import TimelineItem from './TimelineItem';
import data from '../../data/conferences.json';

export default function Timeline() {
  return (
    <section className="relative py-10 px-4 md:px-10">
      <h2 className="text-center text-3xl font-bold mb-12">Conferences</h2>
      <div className="relative border-l border-r border-gray-300 mx-auto w-[2px] h-full">
        <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 via-gray-300 to-gray-300 -translate-x-1/2"></div>
        <div className="flex flex-col gap-10">
          {data.map((item, index) => (
            <TimelineItem
              key={index}
              date={item.date}
              title={item.title}
              description={item.description}
              align={item.align}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
