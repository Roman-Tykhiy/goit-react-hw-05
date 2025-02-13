import s from "./LoadMoreBtn.module.css"
const LoadMoreBtn = ({ onLoadMore, isLoading }) => {
  return (
    <button  onClick={onLoadMore} className={s.LMbuton}>
      {isLoading ? 'Loading...' : 'Show more'}
    </button>
  );
};
export default LoadMoreBtn;
