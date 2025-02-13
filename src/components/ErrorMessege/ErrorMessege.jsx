
const ErrorMessage = () => {
  return (
    <div className={s.errorMessage}>
      <div className={s.meassge}>
        Something went wrong... Try again later!
      </div>
      <img
        className={s.errorImage}
        src={errImg}
        alt="Fetch Error"
        width={400}
        height={400}
      />
    </div>
  );
};
export default ErrorMessage;
