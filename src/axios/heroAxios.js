import axios from "axios"
 

export const getHero = async(id, filter="") => {
    
    try {
        const response = await axios.get(`https://superheroapi.com/api.php/10159306845489803`)
        return response.data
    } 
    catch (error) {
        console.log(error)
    }
}

export const searchHero = async(name) => {
    try {
        const response = await axios.get(`https://superheroapi.com/api.php/10159306845489803/search/${name}`)
        return response.data
    }
    catch (error) {
        console.log(error)
    }
}

export const login = async(email, password) => {
    try {
        const res = await axios.post(`http://challenge-react.alkemy.org/`, {
            "email" : email,
            "password" : password
        })
        let data = {
            status: res.status,
            message: res.data
        }
        return data
    }
    catch (error) {
        let data = {
            status: error.response.status,
            message: error.response.data
        }
        return data
    }
}