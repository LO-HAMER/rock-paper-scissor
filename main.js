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
    
    console.log(getUserChoice('rock'));
    console.log(getUserChoice('computer'));