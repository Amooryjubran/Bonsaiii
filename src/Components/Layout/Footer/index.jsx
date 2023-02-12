import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./style.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer>
      <div>
        <Link to="https://github.com/Amooryjubran/Bonsaiii">
          <GitHubIcon />
        </Link>
        <Link to="https://twitter.com/AmooryJu">
          <TwitterIcon />
        </Link>
      </div>
    </footer>
  );
}
