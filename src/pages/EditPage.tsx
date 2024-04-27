import { useContext } from "react";
import { Form, NavLink, useNavigation } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import DBUser from "../ts/interfaces/DBUser";
import SectionContainer from "../components/SectionContainer";
import FormInput from "../components/FormInput";
import DataList from "../components/datalist/DataList";
import DataTerm from "../components/datalist/DataTerm";

function EditPage(): JSX.Element {

    const { user } = useContext(UserContext) as { user: DBUser };
    const navigation = useNavigation();

    // const errors = useActionData();

    return (
        <Form method="POST" className="flex flex-col items-center justify-center h-screen">
            <SectionContainer title={ user.Name.length >= 16 ? user.Name.slice(0, 16) + '...' : user.Name } briefing={ user.Id } className="h-fit border border-gray-300/50 rounded-lg max-w-lg p-5 shadow-lg">
                <small className="text-gray-500 mt-6">You are editing the details of { user.Name }</small>
                <DataList>
                    <DataTerm title="Games Owned">
                        <FormInput briefing="How many games does this user have now?" type="number" placeholder={ `${user.GamesOwned} games owned` } name="games_owned" />
                    </DataTerm>
                    <DataTerm title="Most Played Game">
                        <FormInput briefing="What is the most played game of this user?" type="text" placeholder={ `${user.MostPlayedGame}` } name="most_played_game" />
                    </DataTerm>
                </DataList>
                <menu className="flex gap-4 w-full justify-center items-center gap-y-2">
                    <li>
                        <button type="submit" className="bg-black text-white w-32 py-2 text-center hover:cursor-pointer block rounded-sm hover:opacity-85">
                            { ['loading', 'submitting'].includes(navigation.state) ? 'Editing...' : 'Confirm' }
                        </button>
                    </li>
                    <li>
                        <button className="text-red-600 border border-red-600 px-10 py-1.5 rounded-sm hover:bg-red-600 hover:text-white transition-colors">Delete</button>
                    </li>
                </menu>
            </SectionContainer>
            <NavLink to={ `../${user.Id}` } className="mt-5 hover:opacity-60">
                <span>Go back</span>
            </NavLink>
        </Form>
    );
}

export default EditPage;