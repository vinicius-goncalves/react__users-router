import { NavLink } from "react-router-dom";
import SectionContainer from "../components/SectionContainer";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import DBUser from "../ts/interfaces/DBUser";

function UsersPage(): JSX.Element {

    const context = useContext(UserContext) as { users: DBUser[] }

    return (
        <div>
            <SectionContainer title="Users" briefing="Our latest users">
                <ul className="border border-gray-500/15 rounded-lg p-4 text-left text-2xl w-full max-w-lg my-3 shadow-lg list-decimal list-inside">
                    {
                        context.users.map(user => (
                            <li>
                                <NavLink key={ user.Id } to={ `${user.Id}`} className="hover:opacity-70 inline-block"> { user.Name }</NavLink>
                            </li>
                        ))
                    }
                </ul>
                <small className="text-zinc-500/60">Select one user to see the details and manage them</small>
            </SectionContainer>
        </div>
    );
}

export default UsersPage;