import s from "./LoadMoreBtn.module.css"
const LoadMoreBtn = ({ children, onClick, disabled }) => {
  return (
    <button className={s.loadMore} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
export default LoadMoreBtn;