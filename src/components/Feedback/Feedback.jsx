const Feedback = ({ options, total, positivePercentage }) => {
    return (
        <div>
            <p>Good: {options.good}</p>
            <p>Neutral: {options.neutral}</p>
            <p>Bad: {options.bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {positivePercentage}%</p>
        </div>
    );
};

export default Feedback;
