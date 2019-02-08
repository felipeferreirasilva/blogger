export const checkIfIsLogged = (user) => {
    console.log('Chamou')
    if(Object.keys(user).length > 0){
       return true
    }else{
        return false
    }
}