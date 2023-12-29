const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
     return userInput
    } else {
      console.log('Error, please type a other userInput.');
    }
    };
    
    const getComputerChoice = () => {
    Math.floor(Math.random() * 3)
    switch(getComputerChoice) {
      case 0:
      return 'rock';
      break;
      case 1:
      return 'paper';
      break;
      case 3:
      return 'scissors'
    }
    };
    const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
     return userInput
    } else {
      console.log('Error, please type a other userInput.');
    }
    };
    
    const getComputerChoice = () => {
      const randomNumber = Math.floor(Math.random() * 3)
        switch(randomNumber) {
       case 0:
       return 'rock';
        break;
        case 1:
         return 'paper';
         break;
         case 2:
        return 'scissors';
    }
    };
    
    const determineWinner = (userChoice,computerChoice) => {
      if (userChoice === computerChoice)
      {return 'the game was tie.'}
    
      if (userChoice === 'rock')
      { if (computerChoice ==='paper')
      {return 'the computer won';}
      } 
      else { return 'you won';}
    
      if (userChoice === 'paper') {
        if (computerChoice === 'scissors')
        {return 'computer won';} else {
          return 'you won';
        }
      }
    
      if (userChoice === 'scissors') {
        if (computerChoice === 'rock')
        {return 'computer won';} else {
          return 'you won';
        }
      }
    }; 
    
    const playGame = () => {
      const userChoice = getUserChoice('rock');
      const computerChoice = getComputerChoice();
      console.log ('you threw:'+ userChoice);
    console.log ('you computer:'+ computerChoice);
    console.log (determineWinner(userChoice, computerChoice));
    }
    
    playGame()
    
    
    
    console.log(getUserChoice('rock'));
    console.log(getUserChoice('computer'));
