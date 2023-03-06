import React, { useEffect, useState } from 'react';
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
                const data: QuestionsArray[] = await response.json();
                setQuestions(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchQuestions();
    }, [questions]);

    return <div></div>;
};

export default Questions;
