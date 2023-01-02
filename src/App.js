import React, { useState, useEffect }  from 'react'
import { Minus,Plus} from 'react-feather';
import logo from './logo.svg';
import './App.css';
import './components/Slot.js'
import Slot from './components/Slot.js';

function App() {
  const [group, setGroups] = useState([
    { name: '' }
    ])

    const addGroup = () => {
      let newfield = { name: '' }
      setGroups([...group, newfield])
      }
      const removeGroup = (index) => {
        let data = [...group];
        data.splice(index, 1)
        setGroups(data)
        }
  return (
    <div className="border-solid border-2 border-slate-300  h-screen m-4 ">
      <div className=' '>
          <div className=' border-solid border-b-2 border-slate-300 bg-gray-100 h-10 p-2'><h2 className='col' >Groups/slots</h2>
         </div>
  

        {  group.map((input, index) => {
                    return (

                      <div className="border-solid border-b-2 border-slate-300 my-6">
                        <div className='flex gap-2 border-solid border-b-2 border-slate-200 my-6'>
<div className='flex w-1/3 gap-9 font-bold '>
  <h2>#</h2>
  <h2>Grupo</h2>
</div>
<div className='w-full px-10 font-bold'>
  <h2>Slot</h2>
</div>
                        </div>
<div className="  border-solid  border-slate-300 min-h-80 flex gap-10 p-4 mt-4 items-start" key={index}>
                          <div className='flex w-1/3 justify-center items-center gap-2 justify-items-center '>
                            
                            <Minus onClick={removeGroup} color='white'  className='bg-red-600 h-8 w-10 rounded' ></Minus>
                            <input placeholder={`group ${index+1} `} className='h-8 rounded border-solid border-2  border-slate-300 w-full'></input>
                            </div> 
                        <div className='w-full'>

                          <Slot></Slot>
                        </div>
                      </div>

                      </div>
                       
                    )
                  })
                }


<div onClick={addGroup} className=" justify-center items-center text-white justify-items-center gap-2 m-4  ">
                    <div className=' justify-center items-center flex bg-blue-900 w-32 justify-items-center h-8 '><Plus></Plus><h2>Add Groups</h2></div>
                 
                
                </div>

      </div>



    </div>
  );
}

export default App;
