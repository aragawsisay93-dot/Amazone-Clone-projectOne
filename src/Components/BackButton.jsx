import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./BackButton.css";

function BackButton({ to = -1, label = "Back" }) {
  const navigate = useNavigate();

  return (
    <button className="back-btn" onClick={() => navigate(to)} type="button">
      <FaArrowLeft />
      <span>{label}</span>
    </button>
  );
}

export default BackButton;
