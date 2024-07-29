import styled from "@emotion/styled";
import { LinearProgress, linearProgressClasses, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const quizzes = [
    {
        question: "What is the capital of Alaska?",
        options: ["Juneau", "Phoenix", "Sacramento", "Montgomery"],
        answer: "Juneau",
    },
    {
        question: "What is the capital of Arizona?",
        options: ["Juneau", "Phoenix", "Sacramento", "Montgomery"],
        answer: "Phoenix",
    },
    {
        question: "What is the capital of California?",
        options: ["Juneau", "Phoenix", "Sacramento", "Montgomery"],
        answer: "Sacramento",
    },
    {
        question: "What is the capital of Alabama?",
        options: ["Juneau", "Phoenix", "Sacramento", "Montgomery"],
        answer: "Montgomery",
    },
    {
        question: "Which state has Albany as its capital?",
        options: ["New York", "New Jersey", "Connecticut", "Massachusetts"],
        answer: "New York",
    },
    {
        question: "Which state has Denver as its capital?",
        options: ["Utah", "Colorado", "Wyoming", "Nebraska"],
        answer: "Colorado",
    },
    {
        question: "Which state has Harrisburg as its capital?",
        options: ["Pennsylvania", "Ohio", "Maryland", "West Virginia"],
        answer: "Pennsylvania",
    },
    {
        question: "Which state has Baton Rouge as its capital?",
        options: ["Louisiana", "Mississippi", "Alabama", "Georgia"],
        answer: "Louisiana",
    },
    {
        question: "Which state has Providence as its capital?",
        options: ["Rhode Island", "Connecticut", "New Hampshire", "Maine"],
        answer: "Rhode Island",
    },
    {
        question: "Which state has Little Rock as its capital?",
        options: ["Arkansas", "Missouri", "Tennessee", "Kentucky"],
        answer: "Arkansas",
    },
];

const trueFalse = [
    {
        question: "The Earth is the third planet from the Sun.",
        options: ["True", "False"],
        answer: "True",
    },
    {
        question: "The Earth is the third planet from the Sun.",
        options: ["True", "False"],
        answer: "False",
    },
    {
        question: "The Earth is the third planet from the Sun.",
        options: ["True", "False"],
        answer: "False",
    },
    {
        question: "The Earth is the third planet from the Sun.",
        options: ["True", "False"],
        answer: "Montgomery",
    }
];

const ThemeQuizCard = () => {
    const location = useLocation();
    const { formValues } = location.state || {};
    const [questionType, setQuestionType] = useState("");
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [error, setError] = useState("");
    const [animateClass, setAnimateClass] = useState("");

    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => {
        const palette = theme.palette || {};
        const grey = palette.grey || {};
        const mode = palette.mode || 'light';


        return {
            height: 10,
            borderRadius: 5,
            [`&.${linearProgressClasses.colorPrimary}`]: {
                backgroundColor: grey[mode === 'light' ? 200 : 800] || '#f5f5f5',
            },
            [`& .${linearProgressClasses.bar}`]: {
                borderRadius: 5,
                backgroundColor: mode === 'light' ? '#1a90ff' : '#308fe8',
            },
        };
    });

    const handleOptionSelect = (option) => {
        setSelectedOptions((prevState) => ({
            ...prevState,
            [currentQuestionIndex]: option,
        }));
        setError("");
    };

    useEffect(() => {
        if (formValues && formValues.type.length > 0) {
            setQuestionType(formValues.type[0]);
        }
    }, [formValues]);

    const handleNext = () => {
        if (selectedOptions[currentQuestionIndex]) {
            if (currentQuestionIndex < quizzes.length - 1) {
                setAnimateClass("bounceInRight");
                setTimeout(() => {
                    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
                    setAnimateClass("");
                }, 500);
            } else {
                setQuizCompleted(true);
            }
            setError("");
        } else {
            setError("Please select an option before proceeding.");
        }
    };

    const getScore = () => {
        return quizzes.reduce((score, quiz, index) => {
            return selectedOptions[index] === quiz.answer ? score + 1 : score;
        }, 0);
    };

    const progressValue = ((currentQuestionIndex + 1) / quizzes.length) * 100;

    const renderMCQ = () => {
        const currentQuiz = quizzes[currentQuestionIndex];

        if (!currentQuiz) return <div>Loading...</div>;

        return (
            <div
                className="lw557v3"
                style={{ "--lw557v3-0": "auto", "--lw557v3-3": "auto" }}
            >
                <div className="hideBelow--s">
                    <div className="qqq2at1" style={{ "--qqq2at1-0": "grid" }}>
                        <div
                            className="ptkavt3"
                            style={{
                                "--ptkavt3-1": "left-pill",
                                "--ptkavt3-4": "var(--mint-200-twilight-900)",
                                "--ptkavt3-7": "var(--mint-200-gray-600)",
                                "--ptkavt3-15": "var(--sherbert-200-twilight-900)",
                            }}
                        >
                            <div
                                data-testid="learn-progress-count"
                                offset="0"
                                className="nonuigb"
                                style={{ "--nonuigb-1": "-0.0625rem", "--nonuigb-4": "0rem" }}
                            >
                                <p className="n170vgq2">{currentQuestionIndex + 1}</p>
                            </div>
                        </div>
                        <div className="p1etwds3">
                            <div className="pxfdng">
                                <BorderLinearProgress variant="determinate" value={progressValue} />
                            </div>
                        </div>
                        <div
                            className="ptkavt3"
                            style={{
                                "--ptkavt3-1": "right-pill",
                                "--ptkavt3-4": "var(--gray-400-twilight-900)",
                                "--ptkavt3-7": "var(--gray-400-gray-600)",
                                "--ptkavt3-15": "var(--gray-400-twilight-900)",
                            }}
                        >
                            <p className="n170vgq2">{quizzes.length}</p>
                        </div>
                    </div>
                </div>

                <div className="hideAbove--s" hidden>
                    <div className="f1ejztt0">
                        <div className="mWeb-base qqq2at1" style={{ "--qqq2at1-0": "grid" }}>
                            <div
                                className="ptkavt3"
                                style={{
                                    "--ptkavt3-1": "left-pill",
                                    "--ptkavt3-4": "var(--mint-200-twilight-900)",
                                    "--ptkavt3-7": "var(--mint-200-gray-600)",
                                    "--ptkavt3-15": "var(--sherbert-200-twilight-900)",
                                }}
                            >
                                <div
                                    data-testid="learn-progress-count"
                                    offset="0"
                                    className="nonuigb"
                                    style={{ "--nonuigb-1": "-0.0625rem", "--nonuigb-4": "0rem" }}
                                >
                                    <p className="n170vgq2">{currentQuestionIndex + 1}</p>
                                </div>
                            </div>
                            <div className="p1etwds3">
                                <div className="pxfdng">
                                    <Stack spacing={2} sx={{ flexGrow: 1 }}>
                                        <BorderLinearProgress variant="determinate" value={progressValue} />
                                    </Stack>
                                </div>
                            </div>
                            <div
                                className="ptkavt3"
                                style={{
                                    "--ptkavt3-1": "right-pill",
                                    "--ptkavt3-4": "var(--gray-400-twilight-900)",
                                    "--ptkavt3-7": "var(--gray-400-gray-600)",
                                    "--ptkavt3-15": "var(--gray-400-twilight-900)",
                                }}
                            >
                                <p className="n170vgq2">{quizzes.length}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {quizCompleted ? (
                    <div className="results">
                        <h2>
                            Your Score: {getScore()} / {quizzes.length}
                        </h2>
                        <ul>
                            {quizzes.map((quiz, index) => (
                                <li key={index}>
                                    <strong>Q{index + 1}:</strong> {quiz.question} <br />
                                    <strong>Your Answer:</strong>{" "}
                                    {selectedOptions[index] || "Not Answered"} <br />
                                    <strong>Correct Answer:</strong> {quiz.answer}
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <div
                        aria-live="polite"
                        className={`sdz9qxu svwhkoh quiz-content ${animateClass}`}
                        style={{
                            "--svwhkoh-3": "0",
                            "--svwhkoh-6": "1.5rem 2rem 1rem",
                            "--svwhkoh-13": "initial",
                        }}
                    >
                        <div className="question">
                            <h2>{currentQuiz.question}</h2>
                        </div>
                        <div className="description">
                            <section
                                aria-label="Choose matching term"
                                className="sopsrza l13gwy0d"
                                style={{ "--l13gwy0d-5": "initial" }}
                            >
                                <div
                                    aria-hidden="true"
                                    className="m1cbai0d"
                                    data-testid="study-question-answers-label"
                                >
                                    Choose matching term
                                </div>
                            </section>
                            <div className="options ajefojz">
                                {currentQuiz.options.map((option, index) => (
                                    <div
                                        key={index}
                                        className={`option w1uwrq7e ${selectedOptions[currentQuestionIndex] === option
                                            ? "selected swjz05g"
                                            : ""
                                            }`}
                                        onClick={() => handleOptionSelect(option)}
                                    >
                                        {option}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="errorProceed">
                            <section
                                className="io5mc6a l13gwy0d"
                                aria-live="assertive"
                                style={{ '--l13gwy0d-5': 'initial' }}
                            >
                                <div
                                    aria-hidden="true"
                                    className="m1cbai0d"
                                    data-testid="study-question-answers-label"
                                >
                                    {error}
                                </div>
                            </section>
                            <button className="next-button" onClick={handleNext}>
                                {currentQuestionIndex < quizzes.length - 1 ? "Next" : "Finish"}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        );
    };

    const renderTrueFalse = () => <div>  const currentQuiz = quizzes[currentQuestionIndex];

        if (!currentQuiz) return <div>Loading...</div>;

        return (
        <div
            className="lw557v3"
            style={{ "--lw557v3-0": "auto", "--lw557v3-3": "auto" }}
        >
            <div className="hideBelow--s">
                <div className="qqq2at1" style={{ "--qqq2at1-0": "grid" }}>
                    <div
                        className="ptkavt3"
                        style={{
                            "--ptkavt3-1": "left-pill",
                            "--ptkavt3-4": "var(--mint-200-twilight-900)",
                            "--ptkavt3-7": "var(--mint-200-gray-600)",
                            "--ptkavt3-15": "var(--sherbert-200-twilight-900)",
                        }}
                    >
                        <div
                            data-testid="learn-progress-count"
                            offset="0"
                            className="nonuigb"
                            style={{ "--nonuigb-1": "-0.0625rem", "--nonuigb-4": "0rem" }}
                        >
                            <p className="n170vgq2">{currentQuestionIndex + 1}</p>
                        </div>
                    </div>
                    <div className="p1etwds3">
                        <div className="pxfdng">
                            <BorderLinearProgress variant="determinate" value={progressValue} />
                        </div>
                    </div>
                    <div
                        className="ptkavt3"
                        style={{
                            "--ptkavt3-1": "right-pill",
                            "--ptkavt3-4": "var(--gray-400-twilight-900)",
                            "--ptkavt3-7": "var(--gray-400-gray-600)",
                            "--ptkavt3-15": "var(--gray-400-twilight-900)",
                        }}
                    >
                        <p className="n170vgq2">{trueFalse.length}</p>
                    </div>
                </div>
            </div>

            <div className="hideAbove--s" hidden>
                <div className="f1ejztt0">
                    <div className="mWeb-base qqq2at1" style={{ "--qqq2at1-0": "grid" }}>
                        <div
                            className="ptkavt3"
                            style={{
                                "--ptkavt3-1": "left-pill",
                                "--ptkavt3-4": "var(--mint-200-twilight-900)",
                                "--ptkavt3-7": "var(--mint-200-gray-600)",
                                "--ptkavt3-15": "var(--sherbert-200-twilight-900)",
                            }}
                        >
                            <div
                                data-testid="learn-progress-count"
                                offset="0"
                                className="nonuigb"
                                style={{ "--nonuigb-1": "-0.0625rem", "--nonuigb-4": "0rem" }}
                            >
                                <p className="n170vgq2">{currentQuestionIndex + 1}</p>
                            </div>
                        </div>
                        <div className="p1etwds3">
                            <div className="pxfdng">
                                <Stack spacing={2} sx={{ flexGrow: 1 }}>
                                    <BorderLinearProgress variant="determinate" value={progressValue} />
                                </Stack>
                            </div>
                        </div>
                        <div
                            className="ptkavt3"
                            style={{
                                "--ptkavt3-1": "right-pill",
                                "--ptkavt3-4": "var(--gray-400-twilight-900)",
                                "--ptkavt3-7": "var(--gray-400-gray-600)",
                                "--ptkavt3-15": "var(--gray-400-twilight-900)",
                            }}
                        >
                            <p className="n170vgq2">{trueFalse.length}</p>
                        </div>
                    </div>
                </div>
            </div>

            {quizCompleted ? (
                <div className="results">
                    <h2>
                        Your Score: {getScore()} / {trueFalse.length}
                    </h2>
                    <ul>
                        {trueFalse.map((quiz, index) => (
                            <li key={index}>
                                <strong>Q{index + 1}:</strong> {quiz.question} <br />
                                <strong>Your Answer:</strong>{" "}
                                {selectedOptions[index] || "Not Answered"} <br />
                                <strong>Correct Answer:</strong> {quiz.answer}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div
                    aria-live="polite"
                    className={`sdz9qxu svwhkoh quiz-content ${animateClass}`}
                    style={{
                        "--svwhkoh-3": "0",
                        "--svwhkoh-6": "1.5rem 2rem 1rem",
                        "--svwhkoh-13": "initial",
                    }}
                >
                    <div className="question">
                        <h2>{currentQuiz.question}</h2>
                    </div>
                    <div className="description">
                        <section
                            aria-label="Choose matching term"
                            className="sopsrza l13gwy0d"
                            style={{ "--l13gwy0d-5": "initial" }}
                        >
                            <div
                                aria-hidden="true"
                                className="m1cbai0d"
                                data-testid="study-question-answers-label"
                            >
                                Choose matching term
                            </div>
                        </section>
                        <div className="options ajefojz">
                            {currentQuiz.options.map((option, index) => (
                                <div
                                    key={index}
                                    className={`option w1uwrq7e ${selectedOptions[currentQuestionIndex] === option
                                        ? "selected swjz05g"
                                        : ""
                                        }`}
                                    onClick={() => handleOptionSelect(option)}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="errorProceed">
                        <section
                            className="io5mc6a l13gwy0d"
                            aria-live="assertive"
                            style={{ '--l13gwy0d-5': 'initial' }}
                        >
                            <div
                                aria-hidden="true"
                                className="m1cbai0d"
                                data-testid="study-question-answers-label"
                            >
                                {error}
                            </div>
                        </section>
                        <button className="next-button" onClick={handleNext}>
                            {currentQuestionIndex < quizzes.length - 1 ? "Next" : "Finish"}
                        </button>
                    </div>
                </div>
            )}
        </div>
        );</div>;

    const renderShortAnswer = () => <div>Short Answer</div>;

    return (
        <>
            {renderMCQ()}
        </>
    );
};

export default ThemeQuizCard;
