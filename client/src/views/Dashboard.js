import React from 'react';
import { Query } from 'react-apollo';
import Blog from "../pages/Blog"

const Dashboard = props => {
    return (
      <>
        <div className="container row mx-auto p-2">
          <div className="col-8">
            <Blog />
          </div>
          <div className="col-3 offset-2">
            <div className="col-4 p-2 sidebar">
            </div>
          </div>
        </div>
      </>
    );
  };


export default Dashboard;