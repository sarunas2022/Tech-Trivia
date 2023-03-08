import React, { useEffect, useState } from 'react';
import Button from '../../components/button/Button';
import './questions.scss';

interface AnswersArray {
    id: number;
    answer: string;
    correct: number;
}

interface QuestionsArray {
    id: number;
    topic: string;
    question: string;
    answers: AnswersArray[];
}

const Questions: React.FC = () => {
    const [questions, setQuestions] = useState<QuestionsArray[]>([]); // Saves fetched questions
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Keep track of the current question index
    const [userAnswers, setUserAnswers] = useState([]);
    console.log(questions);
    // getting questions for selected topic
    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response: Response = await fetch(
                    'http://localhost:8080/questions?topic=All'
                );
                const data = await response.json();
                setQuestions(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchQuestions();
    }, []);

    // On button moves to next question
    const nextQuestion = (e: React.FormEvent) => {
        e.preventDefault();
        setCurrentQuestionIndex(currentQuestionIndex + 1); // Increment the current question index on button click
    };
    // on the last question button click relocates to show results
    const showResults = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <>
            <div className='output'>
                {/* if there are questions fetched returns questions with current indx */}
                {questions.length > 0 && (
                    <form
                        className='output__card'
                        key={questions[currentQuestionIndex].id}
                    >
                        {/* to show topic of the current question */}
                        <h2 className='output__topic'>
                            {`${questions[
                                currentQuestionIndex
                            ].topic.toUpperCase()} question`}
                        </h2>
                        <h3 className='output__question'>
                            {questions[currentQuestionIndex].question}
                        </h3>
                        {/*maps through all answers for current question and displays them  */}
                        {questions[currentQuestionIndex].answers.map(
                            (answer) => (
                                <div
                                    className='output__answers'
                                    key={answer.id}
                                >
                                    <input
                                        type='radio'
                                        id={answer.id.toString()}
                                        name={questions[
                                            currentQuestionIndex
                                        ].id.toString()}
                                    />
                                    <label htmlFor={answer.id.toString()}>
                                        {answer.answer}
                                    </label>
                                </div>
                            )
                        )}

                        {currentQuestionIndex < questions.length - 1 ? ( // Only show the NEXT button if there are more questions to display
                            <Button
                                color='$purple'
                                onClick={(e) => nextQuestion(e)}
                            >
                                NEXT
                            </Button>
                        ) : (
                            // Display a FINISH button instead of NEXT button for the last question
                            <Button
                                color='$purple'
                                onClick={(e) => showResults(e)}
                            >
                                FINISH
                            </Button>
                        )}
                    </form>
                )}
            </div>
        </>
    );
};

export default Questions;
