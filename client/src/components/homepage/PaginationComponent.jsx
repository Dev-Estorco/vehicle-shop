import React from "react";
import { Pagination } from "antd";
import '../../styles/landing-page/pagination.css'


const PaginationComponent = ({ total, currentPage, onPageChange }) => {
    return (
        <Pagination
            total={total}
            current={currentPage}
            onChange={onPageChange}
            pageSize={4}
            showSizeChanger={false}
            hideOnSinglePage={true}
            className="pagination"
        
        />
    );
};

export default PaginationComponent;





// const Pagination = ({ currentPage, totalPages, onPageChange }) => {
//     const getPageNumbers = () => {
//       const pageNumbers = [];
//       const maxVisiblePages = 5;
      
//       if (totalPages <= maxVisiblePages) {
//         for (let i = 1; i <= totalPages; i++) {
//           pageNumbers.push(i);
//         }
//       } else {
//         let start = Math.max(currentPage - 2, 1);
//         let end = Math.min(start + maxVisiblePages - 1, totalPages);
        
//         if (end - start < maxVisiblePages - 1) {
//           start = Math.max(end - maxVisiblePages + 1, 1);
//         }
        
//         if (start > 1) pageNumbers.push(1, '...');
//         for (let i = start; i <= end; i++) {
//           pageNumbers.push(i);
//         }
//         if (end < totalPages) pageNumbers.push('...', totalPages);
//       }
      
//       return pageNumbers;
//     };
  
//     return (
//       <nav className="pagination" aria-label="Pagination">
//         <button 
//           onClick={() => onPageChange(currentPage - 1)} 
//           disabled={currentPage === 1}
//           aria-label="Go to previous page"
//         >
//           Prev
//         </button>
//         {getPageNumbers().map((number, index) => (
//           <button
//             key={index}
//             onClick={() => typeof number === 'number' ? onPageChange(number) : null}
//             className={`pagination-button ${currentPage === number ? 'active' : ''}`}
//             aria-current={currentPage === number ? 'page' : null}
//             aria-label={`Go to page ${number}`}
//           >
//             {number}
//           </button>
//         ))}
//         <button 
//           onClick={() => onPageChange(currentPage + 1)} 
//           disabled={currentPage === totalPages}
//           aria-label="Go to next page"
//         >
//           Next
//         </button>
//       </nav>
//     );
//   };


//   export default Pagination;