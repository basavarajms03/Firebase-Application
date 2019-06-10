const initialstate = {
    projects:[
        {id:'1',title:'help me to find peach',content:'come here i can help you'},
        {id:'2',title:'Basavaraj M Sangur',content:'Software Engineer'}
    ]
};

const projectReducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log("Created Project",action.project);
            break;
        default:
            break;
    }
    return state;
};

export default projectReducer;