import baseurl from './baseurl'
import axios from 'axios'


 const commonAPI=async(httpmethod,endpoints,requestedBody)=>{

    const requestedConfig={
        method:httpmethod,
        url:baseurl+endpoints,
        data:requestedBody
    }

    return await axios(requestedConfig)
    .then((res)=>{
        return res
    })
    .catch((err)=>{
        return err
    })

}
export default commonAPI