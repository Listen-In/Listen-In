//https://codesource.io/building-a-blogging-platform-using-react-graphql-and-graphcms/
import React from 'react';
/* import TrendingPosts from '../components/Trending'; */

 const HomeView = props => {
   return (
     <>
       <div className="container row mx-auto p-2">
         <div className="col-8">
           MAIN AREA
         </div>
         <div className="col-3 offset-2">
         <div className="col-4 border bg-secondary p-2 sidebar">
{/*    <TrendingPosts posts={posts} /> */}
 </div>
         </div>
       </div>
     </>
   );
 };

 export default HomeView;

