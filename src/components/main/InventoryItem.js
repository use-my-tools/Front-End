import React from "react";
import ManageToolPage from "./ManageToolPage";

const InventoryItem = ({ ...props }) => {
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
        <ManageToolPage {...props} />
      </section>
      {/* adding product */}
    </>
  );
};

export default InventoryItem;
