import { NavLink } from "react-router-dom";
import { useContext } from "react";
import SectionContainer from "../components/SectionContainer";
import { UserContext } from "../contexts/UserContext";
import DBUser from "../ts/interfaces/DBUser";

function UserPage(): JSX.Element {

    const { user } = useContext(UserContext) as { user: DBUser };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {
                user && (
                    <>
                        <SectionContainer title={ user.Name } briefing={ user.Id } className="h-fit border border-gray-300/80 rounded-lg max-w-xl p-5 shadow-lg">
                            <dl className="my-4 w-full p-8 border border-gray-300/50 rounded-lg columns-2 text-center">
                                <dt className="font-bold uppercase text-xl">games owned</dt>
                                <dd>{ user.GamesOwned } games owned</dd>

                                <dt className="font-bold uppercase text-xl">Most played game</dt>
                                <dd>{ user.MostPlayedGame }</dd>
                            </dl>
                            <menu className="flex flex-col gap-2 w-full justify-center items-center max-md:gap-16 max-sm:gap- max-sm:justify-around">
                                <li>
                                    <NavLink to="edit" className="bg-black text-white w-32 py-2 text-center hover:cursor-pointer block rounded-sm">
                                        Edit
                                    </NavLink>
                                </li>
                            </menu>
                        </SectionContainer>
                        <NavLink to="/users" className="mt-5 hover:opacity-60 text-left">
                            <span>Go back</span>
                        </NavLink>
                    </>
                )
            }
        </div>
    );
}

export default UserPage;