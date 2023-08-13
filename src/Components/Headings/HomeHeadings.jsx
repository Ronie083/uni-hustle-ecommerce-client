

const HomeHeadings = ({heading, headingText}) => {
    return (
        <div>
            <h1 className="text-5xl font-bold">{heading}</h1>
            <p className="text-lg my-3 max-w-4xl">{headingText}</p>
        </div>
    );
};

export default HomeHeadings;