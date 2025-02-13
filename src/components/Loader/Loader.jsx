import { FidgetSpinner } from 'react-loader-spinner';

const Loader = (isLoading) => {
  return <FidgetSpinner visible={isLoading}
  height="80"
  width="80"
  ariaLabel="fidget-spinner-loading"
  wrapperStyle={{}}
  wrapperClass="fidget-spinner-wrapper" />;
};
export default Loader;
