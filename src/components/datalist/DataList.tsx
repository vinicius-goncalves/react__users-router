function DataList({ children }: { children: React.ReactNode }): JSX.Element {

    return (
        <dl className="my-4 w-full p-4 border border-gray-300/50 rounded-lg">
            { children }
        </dl>
    );
}

export default DataList;