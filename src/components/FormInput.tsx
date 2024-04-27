import { HTMLInputTypeAttribute } from "react";

function FormInput({ type, briefing, placeholder, name }: { type: HTMLInputTypeAttribute, briefing: string, placeholder: string, name: string }): JSX.Element {

    return (
        <label className="mb-4 block">
            <p className="text-gray-500/50 mb-2 -mt-1">{ briefing }</p>
            <input type={ type } className="bg-gray-200/90 rounded-md p-2 w-full focus:outline-transparent" placeholder={ placeholder } name={ name } />
        </label>
    );
}

export default FormInput;