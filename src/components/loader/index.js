import { TailSpin } from "react-loader-spinner";

const AppLoader = () => {
  return <div className="loader">
    <TailSpin
      color="#e1aa4c"
      height={100}
      width={100}
    />
  </div>
};

export default AppLoader;