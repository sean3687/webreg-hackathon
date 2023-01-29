import React from 'react'
import store from '../../redux/store'
import { useState,useEffect } from 'react'


function EnrolledClassList(){
    const [studyData,setStudyData] = useState(store.getState().classListReducer[0].calander)

    useEffect(()=>{
        console.log(studyData)
    })
  return (
    <div>
    
    </div>
  )
}

export default EnrolledClassList