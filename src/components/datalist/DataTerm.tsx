import { Fragment } from "react/jsx-runtime";

function DataTerm({ title, children }: { title: string, children: React.ReactNode }): JSX.Element {

    return (
        <Fragment>
            <dt className="font-bold uppercase">{ title }</dt>
            <dd>
                { children }
            </dd>
        </Fragment>
    );
}

export default DataTerm;