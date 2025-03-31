import React, { useEffect, useState } from 'react'

const Dash = () => {

    const[project,setProject]=useState({
        projectImg:""
    })
  
    

const [preview,setPreview]=useState("")
const[type,setType]=useState(false)


useEffect(()=>{

   if(project.projectImg){
    console.log(project.projectImg);
    if(project.projectImg.type=="image/png" || project.projectImg.type=="image/jpeg" || project.projectImg.type=="image/jpg"){
        setPreview(URL.createObjectURL(project.projectImg))
        setType(true)

    }
    else{
        alert("upload correct file")
        setType(false)
    }
    
    
   }

},[project.projectImg])

    const submit=()=>{
        console.log(project);
        
    }
  return (
    <div>
       <label onChange={((e)=>(
        setProject({...project,projectImg:e.target.files[0]})
       ))}>
        <input type='file' style={{display:"none"}} />
        <img src={preview?preview:"https://png.pngtree.com/element_our/20190601/ourmid/pngtree-file-upload-icon-image_1344393.jpg"}  alt="" className='img-fluid'  width={"50%"}/>
        </label>
        <br />
        {
            type?"":<p className='fw-bolder text-warning'>
            Upload only the following files type (JPEG,PNG,JPG)here !!!
          </p>
        }
        <br />
        <button onClick={submit}>submit</button>

    </div>
  )
}

export default Dash
