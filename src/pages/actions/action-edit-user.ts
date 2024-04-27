import { json, redirect } from "react-router-dom";

export default async function actionUsersPage({ request, params }: { request: Request, params: { userId: string } }) {

    const formData = await request.formData() as FormData;

    const userId = params.userId;
    const gamesOwned = formData.get('games_owned');
    const mostPlayedGame = formData.get('most_played_game');

    const errors = {};

    for(const [ field, value ] of formData.entries()) {
        if(value.length === 0) {
            errors[field] = 'The field cannot be empty.';
        }
    }
    // Array.of(gamesOwned, mostPlayedGame)
    //     .forEach(field => {
    //         if((field as string).length === 0) {
    //             errors[field] = 'The field cannot be empty.'
    //         }
    //     })

    if(Object.keys(errors).length >= 1) {
        return errors;
    }

    const body = {
        id: userId,
        games_owned: gamesOwned,
        most_played_game: mostPlayedGame
    };

    const reqInit: RequestInit = {
        method: request.method,
        body: JSON.stringify(body)
    };

    const res = await fetch('http://localhost:8080/users/'+userId+'/edit', reqInit);

    if(!res.ok) {
        throw json({ message: 'There was not possible to update the users' }, { status: 400, statusText: 'Not updated' })
    }

    return redirect(`../${params.userId}`);
}