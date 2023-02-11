import Axios from 'axios'

let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRlZXBhay5wYWxpd2FsMUByZWRidXMuY29tIiwiaWQiOiI2M2Q0MjU2MTNiZTc5MzA2MjE3NDNkMmUiLCJpYXQiOjE2NzYxMDcwMzgsImV4cCI6MTY3NjE5MzQzOH0.IH4QL-5m9U_OLVY_wNdHUNR5wEyeEXjjOvenNASad1o'

export const getAllTickets = async() =>{
    try{
        console.log(process.env)
        let res = await Axios.get(process.env.REACT_APP_API_HOST+'/v1/ticket',{
            headers:{
                'auth-token': token
            }
        })
        console.log(res.data);
       return res.data.result
    }
    catch(err){
        console.log(err)
       throw new Error(err.message)
    }
}