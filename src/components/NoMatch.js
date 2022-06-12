import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NoMatch.css"
const NoMatch = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  } , [] );


  return (
    <div className="no-match">
      <h1>404 Error Page could not be found</h1>
    </div>
  );
};

export default NoMatch;
