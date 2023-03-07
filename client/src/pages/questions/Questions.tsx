import React, { useEffect, useState } from 'react';
import Button from '../../components/button/Button';
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
    const [questions, setQuestions] = useState<QuestionsArray[]>([]);
    console.log(questions);

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

    const nextQuestion = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('clicked');
    };

    return (
        <>
            <div className='output'>
                {questions.map((question) => (
                    <form className='output__card' key={question.id}>
                        <h1 className='output__question'>
                            {question.question}
                        </h1>
                        {question.answers.map((answer) => (
                            <div className='output__answers'>
                                <input
                                    type='radio'
                                    id={answer.id.toString()}
                                    name={question.id.toString()}
                                />
                                <label htmlFor={answer.id.toString()}>
                                    {answer.answer}
                                </label>
                            </div>
                        ))}
                        <Button color='orange' onClick={(e) => nextQuestion(e)}>
                            NEXT
                        </Button>
                    </form>
                ))}
            </div>
        </>
    );
};

export default Questions;
