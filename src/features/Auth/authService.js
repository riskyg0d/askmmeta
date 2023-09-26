import axios from "axios"


const register = async (userData) =>{

    const user = await axios.post('http://localhost:5000/api/users/register',userData)

        if (user.data){
            localStorage.setItem('user',JSON.stringify(user.data))
        }
    return user.data ;
}



const logout = async () =>{
    localStorage.removeItem('user')
}

const login = async({pwd,email})=>{
    const response = await axios.post('http://localhost:5000/api/', {pwd,email})
      if (response.data){
            localStorage.setItem('user',JSON.stringify(response.data))
        }
    return response.data ;
}

export const authService = {
    login,
    logout,
    register,
}