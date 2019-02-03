import React from "react";
import AddProductPage from "./AddProductPage";
import ManageToolPage from "./ManageToolPage";
import { Route } from "react-router-dom";

const InventoryItem = () => {
  return (
    <>
      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Tool Rental Made Easy
        </h2>
        <p className="grey-text text-center w-responsive mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
          amet numquam iure provident voluptate esse quasi, veritatis totam
          voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>

        {/* this is the card */}
        <ManageToolPage />
      </section>
      {/* adding product */}
      <Route path="/addtools" render={props => <AddProductPage {...props} />} />
    </>
  );
};

export default InventoryItem;
