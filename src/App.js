import logo from './logo.svg';
import './App.css';
import firebase from './firebase';
import { useEffect, useState, useSyncExternalStore } from 'react';

function App() {
  const [name, setName] = useState("")
  const [empId, setEmpId] = useState("")
  const [no, setNo] = useState("")
  const [address, setAddress] = useState("")
  const [data, setData] = useState([])
  function onSubmit(){
    for(let i=0; i<data.length; i++){
      if(empId == data[i]['empid']){
        window.alert("Employee ID Already Exists !!")
        return
      }

    }
    const ref = firebase.firestore().collection("users")
    ref.doc().set({
      name : name,
      empid : empId,
      contact : no,
      address: address
      
    }).then(()=>{
      window.alert("Data Successfully Inserted")
      setName("")
      setEmpId("")
      setNo("")
      setAddress("")
    })
  }

  function getData(){
    const ref = firebase.firestore().collection("users")
    ref.onSnapshot((querysnapshot)=>{
      let temp=[]
      querysnapshot.forEach((doc)=>{
      temp.push(doc.data())
      })
      setData(temp)
    })
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <>
    <div>
      <h1>Digital Diary</h1>
<label style={{marginLeft:"2vw"}}>Employee ID</label>
<input type="text" value={empId} onChange={(e)=> setEmpId(e.target.value)} style={{marginLeft:"2vw"}}/><br/><br/>
<label style={{marginLeft:"2vw"}}>Name</label>
<input type="text" value={name} onChange={(e)=> setName(e.target.value)}style={{marginLeft:"2vw"}} /> <br/><br/>
<label style={{marginLeft:"2vw"}}>Contact No</label>
<input type="text" value={no} onChange={(e)=> setNo(e.target.value)} style={{marginLeft:"2vw"}}/> <br/><br/>
<label style={{marginLeft:"2vw"}}>Address</label>
<textarea value={address} onChange={(e)=> setAddress(e.target.value)} style={{marginLeft:"2vw"}}/> <br/><br/>

<button onClick={onSubmit}>Submit</button>
<br/><br/>
<h1>Inserted Data</h1>
{data.map((doc)=>(<>Employee ID :- {doc.empid} <br/>Name :- {doc.name}<br/>
Contact No :- {doc.contact}<br/>
Address :- {doc.address}<br/><br/></>))}
    </div>


</>

  );
}

export default App;
