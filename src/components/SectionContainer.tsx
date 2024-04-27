interface ISectionContainer {
    title: string;
    briefing: string;

    children: React.ReactNode;
    className?: string;
}

function SectionContainer({ title, briefing, children, className }: ISectionContainer): JSX.Element {

    return (
        <div className={ `flex flex-col items-center justify-center w-full h-screen ${className}` }>
            <hgroup className="text-center">
                <h2 className="text-4xl font-bold">{ title }</h2>
                <p className="text-zinc-500/90">{ briefing }</p>
            </hgroup>
            { children }
        </div>
    );
}

export default SectionContainer;