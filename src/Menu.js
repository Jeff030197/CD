import { Link } from "react-router-dom";
import ErrorImage from "./assets/images/404.png";

export default function Menu() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-screen-lg text-center">
        <img
          src={ErrorImage}
          alt="404"
          className="w-full h-auto max-h-screen object-contain"
        />
        <p className="text-5xl mt-6 mb-4"><strong>Under Construction</strong></p>
        <div className="text-center">
          <button className="bg-blue-600 rounded-lg py-2 px-4">
            <Link to={"/"}>
              <p className="py-1 mx-2">Take me back</p>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
