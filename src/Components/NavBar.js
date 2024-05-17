import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/discord-timestamp'}>Discord Timestamps</Link>
                </li>
            </ul>
        </div>
    )
}