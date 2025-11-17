import './ProductPagination.scss';

const ProductPagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination-container">
      <button className="page-btn" onClick={handlePrev} disabled={currentPage === 1}>
        Prev
      </button>

      <div className="page-numbers">
        {pages.map((num) => (
          <button
            key={num}
            className={`page-number ${currentPage === num ? 'active' : ''}`}
            onClick={() => onPageChange(num)}>
            {num}
          </button>
        ))}
      </div>

      <button className="page-btn" onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default ProductPagination;
