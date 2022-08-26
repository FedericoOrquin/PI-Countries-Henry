export default function validate(input) {
    let errors = {};
    if (!input.name) {
      errors.name = 'Activity name required';
   
    } else if (!/^(?=.{3,20}$)[a-zA-Z]+$/.test(input.name)) {
      errors.name = 'Activity name is invalid, It must only contain letters';
    }
    
    if(!input.duration){
        errors.duration = 'Duration is required'
    }else if(!/^(?=.*[A-Za-z ])(?=.*\d)[A-Za-z \d]{6,}$/.test(input.duration)){
        errors.duration = 'Duration is invalid, minimum one number and 6 letters'
    } 
    
    if(!input.difficulty){
        errors.difficulty = 'Duration is required'
    }

    if(!input.season){
        errors.season = 'Duration is required'
  
    return errors;
  };
}