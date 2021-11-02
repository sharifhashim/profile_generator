const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable :) `, (answer1) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer1}`);
  rl.question(`What's an activity you like doing? `, (answer2) => {
    console.log(`Thank you for your valuable feedback: ${answer2}`);
    rl.question(`What do you listen to while doing that? `, (answer3) => {
      console.log(`Thank you for your valuable feedback: ${answer3}`);
      rl.question(`Which meal is your favourite (e.g: dinner, brunch, etc.)? `, (answer4) => {
        console.log(`Thank you for your valuable feedback: ${answer4}`);
        rl.question(`What's your favourite thing to eat for that meal? `, (answer5) => {
          console.log(`Thank you for your valuable feedback: ${answer5}`);
          rl.question(`Which sport is your absolute favourite? `, (answer6) => {
            console.log(`Thank you for your valuable feedback: ${answer6}`);
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `, (answer7) => {
              console.log(`Thank you for your valuable feedback: ${answer7}`);
              console.log(`${answer1} loves ${answer2} while listening to ${answer3}, devouring ${answer5} for ${answer4}, perfers ${answer6} over any other sport, and is amazing at ${answer7}`)
                rl.close();
            })
          })
        })
      })
    })
  })
});
