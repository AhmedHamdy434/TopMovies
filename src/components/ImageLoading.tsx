import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ImageLoading = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <FontAwesomeIcon icon={faSpinner} spin size="2xl" />
    </div>
  );
};

export default ImageLoading;
