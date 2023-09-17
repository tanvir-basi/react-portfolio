import React from 'react';
import work from '../data/work';
import WorkItem from './WorkItem';

function Work() {
   return (
      <div className=' pb-6'>
         <h2 className='text-4xl md:text-4xl mb-1 md:mb-3 font-bold'>Professional Portfolio</h2>
         <div className="flex flex-col md:flex-row items-center justify-center ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               {work.map(project => (
                  <WorkItem
                     imgUrl={project.imgUrl}
                     title={project.title}
                     description={project.description}
                     link={project.link}
                  />
               ))}
            </div>
         </div>
      </div>
   )
}

export default Work;