const initState = {
    questions: [
        {id: '1', question: '<h3>this is our first question can your answer it?</h3>', option1: 'option1', option2: 'option2', option3: 'option3', option4: 'option4', nextCommand: '1'},
        {id: '2', question: '<h3>this is our second question can your answer it?</h3>', option1: 'option1', option2: 'option2', option3: 'option3', option4: 'option4', nextCommand: '2'},
        {id: '3', question: '<h3>this is our third question can your answer it?</h3>', option1: 'option1', option2: 'option2', option3: 'option3', option4: 'option4', nextCommand: '3'},
        {id: '4', question: '<h3>this is our forth question can your answer it?</h3>', option1: 'option1', option2: 'option2', option3: 'option3', option4: 'option4',nextCommand: '0'}
    ]
    
}

const contentReducer = (state = initState,action)=>{
    return state
}

export default contentReducer