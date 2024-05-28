import React, { useState } from 'react';


const questions = [
  // Bollywood Questions
  {
    question: 'Who is known as the "King of Bollywood"?',
    options: ['Shah Rukh Khan', 'Salman Khan', 'Aamir Khan', 'Akshay Kumar'],
    answer: 'Shah Rukh Khan',
    difficulty: 'easy'
  },
  {
    question: 'Which Bollywood actor is often referred to as the "Greek God"?',
    options: ['Hrithik Roshan', 'Ranbir Kapoor', 'Ranveer Singh', 'Arjun Rampal'],
    answer: 'Hrithik Roshan',
    difficulty: 'tough'
  },
  {
    question: 'Who was the first Indian actress to win the Miss World title?',
    options: ['Aishwarya Rai', 'Sushmita Sen', 'Priyanka Chopra', 'Lara Dutta'],
    answer: 'Aishwarya Rai',
    difficulty: 'easy'
  },
  {
    question: 'Which Bollywood film won the Academy Award for Best Foreign Language Film?',
    options: ['Mother India', 'Lagaan', 'Gandhi', 'Slumdog Millionaire'],
    answer: 'Mother India',
    difficulty: 'tough'
  },
  {
    question: 'Who directed the movie "Gully Boy"?',
    options: ['Zoya Akhtar', 'Karan Johar', 'Anurag Kashyap', 'Sanjay Leela Bhansali'],
    answer: 'Zoya Akhtar',
    difficulty: 'easy'
  },
  {
    question: 'Which actor won the National Film Award for Best Actor for his role in the movie "Piku"?',
    options: ['Amitabh Bachchan', 'Irrfan Khan', 'Ranveer Singh', 'Shah Rukh Khan'],
    answer: 'Amitabh Bachchan',
    difficulty: 'tough'
  },
  // Formula 1 Racing Questions
  {
    question: 'Which Formula 1 team holds the record for the most Constructors\' Championships?',
    options: ['Ferrari', 'Mercedes', 'McLaren', 'Red Bull Racing'],
    answer: 'Ferrari',
    difficulty: 'easy'
  },
  {
    question: 'Who is the youngest Formula 1 World Champion in history?',
    options: ['Sebastian Vettel', 'Lewis Hamilton', 'Fernando Alonso', 'Michael Schumacher'],
    answer: 'Sebastian Vettel',
    difficulty: 'tough'
  },
  {
    question: 'Which driver holds the record for the most Grand Prix wins?',
    options: ['Lewis Hamilton', 'Michael Schumacher', 'Ayrton Senna', 'Sebastian Vettel'],
    answer: 'Lewis Hamilton',
    difficulty: 'easy'
  },
  {
    question: 'Which circuit hosts the prestigious Monaco Grand Prix?',
    options: ['Circuit de Spa-Francorchamps', 'Circuit de Barcelona-Catalunya', 'Circuit de Monaco', 'Autodromo Nazionale Monza'],
    answer: 'Circuit de Monaco',
    difficulty: 'tough'
  },
  {
    question: 'Who is known as the "Flying Finn" in Formula 1?',
    options: ['Kimi Räikkönen', 'Valtteri Bottas', 'Mika Häkkinen', 'Keke Rosberg'],
    answer: 'Kimi Räikkönen',
    difficulty: 'easy'
  },
  {
    question: 'Which driver famously crashed while leading the final lap of the 2008 Brazilian Grand Prix, allowing Lewis Hamilton to win the championship?',
    options: ['Felipe Massa', 'Kimi Räikkönen', 'Sebastian Vettel', 'Nico Rosberg'],
    answer: 'Felipe Massa',
    difficulty: 'tough'
  },
  // Add more questions here...
  {
    question: 'Which driver won the most consecutive World Drivers\' Championships?',
    options: ['Michael Schumacher', 'Lewis Hamilton', 'Juan Manuel Fangio', 'Sebastian Vettel'],
    answer: 'Michael Schumacher',
    difficulty: 'tough'
  },
  {
    question: 'Which team holds the record for the most consecutive Constructors\' Championships?',
    options: ['Ferrari', 'Mercedes', 'McLaren', 'Red Bull Racing'],
    answer: 'Ferrari',
    difficulty: 'tough'
  },
  {
    question: 'Which driver famously collided with Michael Schumacher at the 1994 Australian Grand Prix?',
    options: ['Damon Hill', 'Ayrton Senna', 'Jacques Villeneuve', 'David Coulthard'],
    answer: 'Damon Hill',
    difficulty: 'tough'
  },
  {
    question: 'Which team introduced the innovative "double diffuser" design in the 2009 Formula 1 season?',
    options: ['Brawn GP', 'Ferrari', 'Red Bull Racing', 'McLaren'],
    answer: 'Brawn GP',
    difficulty: 'tough'
  },
  // More Bollywood Questions
  {
    question: 'Who is the highest-paid actress in Bollywood?',
    options: ['Deepika Padukone', 'Priyanka Chopra', 'Kangana Ranaut', 'Alia Bhatt'],
    answer: 'Deepika Padukone',
    difficulty: 'easy'
  },
  {
    question: 'Which Bollywood actor played the role of Milkha Singh in the movie "Bhaag Milkha Bhaag"?',
    options: ['Ranveer Singh', 'Hrithik Roshan', 'Farhan Akhtar', 'Akshay Kumar'],
    answer: 'Farhan Akhtar',
    difficulty: 'easy'
  },
  {
    question: 'Who composed the soundtrack for the movie "Dilwale Dulhania Le Jayenge"?',
    options: ['A.R. Rahman', 'Shankar-Ehsaan-Loy', 'Jatin-Lalit', 'Anu Malik'],
    answer: 'Jatin-Lalit',
    difficulty: 'easy'
  },
  {
    question: 'Which Bollywood film is the highest-grossing Indian film worldwide?',
    options: ['Dangal', 'Baahubali 2: The Conclusion', 'Bajrangi Bhaijaan', 'Secret Superstar'],
    answer: 'Baahubali 2: The Conclusion',
    difficulty: 'easy'
  },
  {
    question: 'Who won the Filmfare Award for Best Actor for his performance in the movie "Uri: The Surgical Strike"?',
    options: ['Vicky Kaushal', 'Ayushmann Khurrana', 'Ranbir Kapoor', 'Shahid Kapoor'],
    answer: 'Vicky Kaushal',
    difficulty: 'tough'
  }
];


const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="quiz container text-center">
      {currentQuestion < questions.length ? (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          <div className="btn-group-vertical">
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} className="btn btn-primary mb-2" onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2>Your score: {score} / {questions.length}</h2>
        </div>
      )}
    </div>
  );
};

export default Quiz;
