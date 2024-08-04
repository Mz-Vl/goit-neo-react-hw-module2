const Description = ({ children }) => {
    const cafeName = 'Sip Happens Café';
    return (
        <>
            <h1>{cafeName}</h1>
            <p>{children}</p>
        </>
    );
};

export default Description;
