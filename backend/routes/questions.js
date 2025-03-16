const Question = require('./models/Question');

app.get('/api/questions', async (req, res) => {
    try {
        const questions = await Question.find();
        console.log('Fetched questions:', questions); 
        res.json(questions);
    } catch (err) {
        console.error('Error fetching questions:', err); 
        res.status(500).json({ message: 'Error fetching questions' });
    }
});
