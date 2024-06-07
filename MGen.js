// create 3 functions that generate a beginning, middle, and end to a sentence
// Then create a large function with setters and getters utilizing objects to put the complete sentence together
// or instead mayhaps its best to just create 3 simple variables with randomizers to its value and then return the values added together.

function messageGenerator() {
    let M_random = (Math.floor(Math.random() * 5) + 1)
    
    let M_start = [0, 'My chain, My chain! ', 'This is my base form, this is super saiyan, ', 'Every jutsu has a weakness, ', 'Throughout heaven and earth, ', 'Hey Hey Hey! '];

    let M_middle = [0, 'If I tell you where I got my chain, ', 'THIS is super saiyan ascendant, or you can just call it super saiyan 2, ', 'your jutsu\'s weakness ',
     'I alone ', 'It\'s FAAAATTTTT ALBERT!'];

    let M_end = [0, 'then everyone is gonna have my chain and it won\'t be MY chain anymore!',
     'And THIS IS TO GOO EVEN FURTHER BEYYYYOOOND! HAAAAAAAAAAAAAAAAAAA!(How is he generating that much power!?)', 'is my EXISTENCE!', 'am the honored one',
      'Na Nana nana, Gonna have a good time!'];
    
    
    return M_start[M_random] + M_middle[M_random] + M_end[M_random];
    
    
    
    
    //return M_random
}

console.log(messageGenerator());