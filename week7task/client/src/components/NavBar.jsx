import {Link} from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">home</Link>
      <Link to="/">books</Link>
    </nav>
  );
}
