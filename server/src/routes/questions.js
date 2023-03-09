const express = require('express');
const mysql = require('mysql2/promise');
require('dotenv').config();

const router = express.Router();

// logic to get questions

router.get('/questions', async (req, res) => {
    const topic = req.query.topic;
    let rows;
    try {
        // DB conifgurations
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME,
        });
        // if selected topic is not all
        if (topic !== 'All') {
            [rows] = await connection.execute(
                `SELECT q.id, q.topic, q.question, 
            JSON_ARRAYAGG(JSON_OBJECT('id', a.id, 'answer', a.answer, 'correct', a.correct)) AS answers
          FROM questions q
          LEFT JOIN answers a ON q.id = a.questions_id
          WHERE q.topic = ?
          GROUP BY q.id, q.topic, q.question
          ORDER BY RAND()
          LIMIT 10`,
                [topic]
            );
            // if selected topic is all
        } else {
            [rows] = await connection.execute(
                `SELECT q.id, q.topic, q.question, 
            JSON_ARRAYAGG(JSON_OBJECT('id', a.id, 'answer', a.answer, 'correct', a.correct)) AS answers
          FROM questions q
          LEFT JOIN answers a ON q.id = a.questions_id
          GROUP BY q.id, q.topic, q.question
          ORDER BY RAND()
          LIMIT 20`,
                [topic]
            );
        }

        res.json(rows);

        await connection.end();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
