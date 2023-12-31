import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';

function Portfolio() {
   return (
      <div className=' pb-6'>
         <h2 className='text-4xl md:text-4xl mb-1 md:mb-3 font-bold'>Side Projects</h2>
         <div className="flex flex-col md:flex-row items-center justify-center ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               {portfolio.map(project => (
                  <PortfolioItem
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

export default Portfolio;