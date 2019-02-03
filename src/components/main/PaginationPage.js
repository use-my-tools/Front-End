import React from "react";

const PaginationPage = ({ className }) => {
  return (
    <nav aria-label="Page navigation example ">
      <ul className={`pagination pagination-circle pg-blue ${className}`}>
        <li className="page-item disabled">
          <p className="page-link">First</p>
        </li>
        <li className="page-item disabled">
          <p className="page-link" aria-label="Previous">
            <span aria-hidden="true">«</span>
            <span className="sr-only">Previous</span>
          </p>
        </li>
        <li className="page-item active">
          <p className="page-link">1</p>
        </li>
        <li className="page-item">
          <p className="page-link">2</p>
        </li>
        <li className="page-item">
          <p className="page-link">3</p>
        </li>
        <li className="page-item">
          <p className="page-link">4</p>
        </li>
        <li className="page-item">
          <p className="page-link">5</p>
        </li>
        <li className="page-item">
          <p className="page-link" aria-label="Next">
            <span aria-hidden="true">»</span>
            <span className="sr-only">Next</span>
          </p>
        </li>
        <li className="page-item">
          <p className="page-link">Last</p>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationPage;
