import React, { useState, useEffect }  from 'react'
import { Minus,Plus} from 'react-feather';
function Slot() {

    const [inputFields, setInputFields] = useState([
        { name: '' }
        ])
        const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
        }
        const addFields = () => {
        let newfield = { name: '' }
        setInputFields([...inputFields, newfield])
        }
    const submit = (e) => {
        e.preventDefault();
        console.log(inputFields)
        }
        const removeFields = (index) => {
        let data = [...inputFields];
        data.splice(index, 1)
        setInputFields(data)
        }
        const handleSubmit = async (e) => {
        
    
        }
  return (


    <div className='w-full'>

                <form onSubmit={submit}>
                    {inputFields.map((input, index) => {
                    return (
                        <div  className="w-full h-20 ">
                            <hr></hr>
                        <div className="flex my-4 gap-4 w-full" key={index}>
                       
                      <div className='w-5/6'>
                      <input
                        className='h-8 rounded border-solid border-2  border-slate-300 w-full'
                          
                          placeholder={`g1_slot${index+1} `}
                          value={input.name}
                          onChange={event => handleFormChange(index, event)}
                        />
                      </div>
                        <Minus  onClick= {() => removeFields(index)} color='white'  className='bg-red-600 h-6 w-7 rounded' ></Minus>
                     
                      </div>
                      </div>
                    )
                  })
                  }
                </form>
                <div onClick={addFields} className=" justify-center items-center text-white justify-items-center gap-2  ">
                    <div className=' justify-center items-center flex bg-blue-400 w-32 justify-items-center h-8 '><Plus></Plus><h2>Add Slot</h2></div>
                 
                
                </div>
            
    </div>
  )
}

export default Slot