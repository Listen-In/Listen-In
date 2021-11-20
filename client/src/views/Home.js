import React from 'react';
import Home from '../pages/Home'
import Header from '../components/Header'
/* import TrendingPosts from '../components/Trending'; */

 const HomeView = props => {
   return (
     <>
       <div className="container row mx-auto p-2">
         <div className="col-8">
           <Home />
         </div>
         <div className="col-3 offset-2">
         <div className="col-4 p-2 sidebar">
{/*    <TrendingPosts posts={posts} /> */}
 </div>
         </div>
       </div>
     </>
   );
 };

 export default HomeView;

