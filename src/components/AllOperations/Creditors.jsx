import React, { useState } from 'react'
import { RxUpdate } from "react-icons/rx";
import { MdDelete } from "react-icons/md";
export const Creditors = ({titleS,secondTitle, info , message,isDoc ,button,isText}) => {
    const relatives=["Son","Daughter","Brother","Sister","Wife","Husband","Friend","Blod-Relative","Other"]
    const [selectedRelative, setSelectedRelative] = useState(null);
    const [relativePersons, setRelativePersons] = useState([]);
    console.log('Received props:',titleS,secondTitle, info  )
    const handleRelativeSelect = (relative) => {
      console.log('Selected Relative:', relative);
      setSelectedRelative(relative);
    
       setFormData((prevData) => ({
        ...prevData,
        relation: relative,
      }));
    
       console.log('Updated FormData:', formData);
    };
      const initialFormData = {
        directedTo: '',
        relative:"",
        name: '',
        father: '',
        family: '',
        phone: '',
        email: '',
        giver: '',
        taker: '',
        amount: '',
        reason: '',
        document: null,
      };
    
      const [formData, setFormData] = useState(initialFormData);
      const [formValid, setFormValid] = useState(true);
      const [tableData, setTableData] = useState([]);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
     

      const handleSubmit = (e) => {
        e.preventDefault();
      
        console.log('FormData before submission:', formData);
      
        const isFormValid =
          formData.name.trim() !== '' &&
          formData.father.trim() !== '' &&
          formData.family.trim() !== '';
      
        if (isFormValid) {
          const newRelativePerson = {
            directedTo: formData.directedTo,
            name: formData.name,
            father: formData.father,
            family: formData.family,
            relative: selectedRelative,
            phone: formData.phone,
            email: formData.email,
            giver: formData.giver,
            taker: formData.taker,
            amount: formData.amount,
            reason: formData.reason,
            document: formData.document,
          };
      
          console.log('New Relative Person:', newRelativePerson);
      
          setRelativePersons((prevPersons) => [...prevPersons, newRelativePerson]);
      
          setTableData((prevTableData) => [
            ...prevTableData,
            { ...formData, relative: selectedRelative },
          ]);
      
          setFormData(initialFormData);
          setSelectedRelative(null);
          setFormValid(true);
      
          console.log('FormData after submission:', formData);
        } else {
          setFormValid(false);
        }
      };

      const handleDeleteRow = (index) => {
        setTableData((prevTableData) => {
          const updatedTableData = [...prevTableData];
          updatedTableData.splice(index, 1); 
                 return updatedTableData;
        });
      };

      const handleUpdateRow = (index) => {
        console.log('Received index:', index);

        if (index >= 0 && index < tableData.length) {
          const rowToUpdate = tableData[index];
      
          if (rowToUpdate) {
             setFormData({
              directedTo: rowToUpdate.directedTo || '', 
              name: rowToUpdate.name || '',
              father: rowToUpdate.father || '',
              family: rowToUpdate.family || '',
              phone: rowToUpdate.phone || '',
              email: rowToUpdate.email || '',
              giver: rowToUpdate.giver || '',
              taker: rowToUpdate.taker || '',
              amount: rowToUpdate.amount || '',
              reason: rowToUpdate.reason || '',
              document: rowToUpdate.document || null,
            });
      
           } else {
            console.error(`Row at index ${index} is undefined.`);
          }
        } else {
          console.error(`Invalid index: ${index}`);
        }
      };
      
    return (
    <section className='my-container'>
        <div className='container'>
        <div className='container boxShadow mt-5'>
           
        <div className="box row mb-5 mt-5 pt-4">
        <form className='mt-5' >
          
  <div className="mb-4 mt-3 row">
  <h2 className='mt-4'>{titleS}</h2>

  <div className="col-lg-6 col-md-12"> 
    <label htmlFor="exampleInputEmail1" className="form-label">Directed To</label>
    <input type="text" className="form-control" 
              name="directedTo"
              value={formData.directedTo}
              onChange={handleChange}/>
    <div id="emailHelp" className="form-text">We'll never share your Information with anyone else.</div>
  </div>
  
<div className="col-lg-6 col-md-12">  
<label htmlFor="exampleInputEmail1" className="form-label p-1 mx-3 m-0">Relative relation</label>
<div className="dropdown">
            <button
              className="btnB btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {selectedRelative ? selectedRelative : 'Select Someone'}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
              {relatives.map((relative, index) => (
                <li key={index} >
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => handleRelativeSelect(relative)}
                     >
                    {relative}
                  </a>
                </li>
              ))}
            </ul>
          </div></div>
  </div>
  
  
  <div className="mb-4 mt-3 row">
    <h2>{secondTitle}</h2>
  <div className="col-lg-4 col-md-3"> 
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" 
     name="name"
     value={formData.name}
     onChange={handleChange}/>
   </div>
  <div className="col-lg-4 col-md-3"> 
    <label htmlFor="exampleInputEmail1" className="form-label">Father</label>
    <input type="text" className="form-control" 
      name="father"
     value={formData.father}
     onChange={handleChange}/>
   </div>
  <div className="col-lg-4 col-md-3"> 
    <label htmlFor="exampleInputEmail1" className="form-label">Family</label>
    <input type="text" className="form-control" 
       name="family"
     value={formData.family}
     onChange={handleChange}/>
    </div>

  </div>

  <div className="mb-4 mt-3 row">
   

  <div className="col-lg-4 col-md-3"> 
    <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
    <input type="text" className="form-control" 
      name="phone"
     value={formData.phone}
     onChange={handleChange}/>
   </div>
  <div className="col-lg-4 col-md-3"> 
    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
        name="email"
     value={formData.email}
     onChange={handleChange}/>
   </div>
  <div className="col-lg-4 col-md-3"> 
    <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
    <input type="text" className="form-control" 
      name="address"
     value={formData.address}
     onChange={handleChange}/>
    </div>


<h2 className=' mt-4'>{info}</h2>
{isDoc ? <>
<div className="mb-4 mt-3 row">

  <div className="col-lg-3 col-md-3"> 
    <label htmlFor="exampleInputEmail1" className="form-label">Giver</label>
    <input type="text" className="form-control" 
      name="giver"
     value={formData.giver}
     onChange={handleChange}/>
   </div>
  <div className="col-lg-3 col-md-3"> 
    <label htmlFor="exampleInputEmail1" className="form-label">Taker</label>
    <input type="text" className="form-control" 
      name="taker"
     value={formData.taker}
     onChange={handleChange}/>
   </div>
  <div className="col-lg-3 col-md-3"> 
    <label htmlFor="exampleInputEmail1" className="form-label">Amount</label>
    <input type="text" className="form-control" 
      name="amount"
     value={formData.amount}
     onChange={handleChange}/>
    </div>
    <div className="col-lg-3 col-md-3"> 
    <label htmlFor="exampleInputEmail1" className="form-label">Reason</label>
    <input type="text" className="form-control" 
     name="reason"
     value={formData.reason}
     onChange={handleChange}/>
    </div>
  </div>
  <div className="row">
  <div className="mb-3">
   <label htmlFor="formFile" className="form-label">Documents</label>
  <input className="form-control" type="file" id="formFile"
   name="document"
   value={formData.document}
   onChange={handleChange}/>
 
  
</div>
  </div></>
  :
  !isText ?<>  <div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label"></label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="6">{message}</textarea>
</div></> :<>
<div className="row">
  <div className="mb-3">
   <label htmlFor="formFile" className="form-label">Documents</label>
  <input className="form-control" type="file" id="formFile"
   name="document"
   value={formData.document}
   onChange={handleChange}/>
 
  
</div>
  </div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
  <textarea className="form-control" id="exampleFormControlTextarea1"
    name="reason" 
    value={formData.reason}
     onChange={handleChange} rows="6">{message}</textarea>
</div></> 
}
  </div>
 


<div className="row mb-4 mt-3"><button
    className='subBtn mt-4'
    onClick={handleSubmit}
  >{button}</button></div>

</form>

{!formValid && <p className="text-danger">Please fill in all required fields.</p>}

        </div>
        </div>

</div>

<div className="row mb-5 mt-5 pt-4">
<h2>Saved Data</h2>
        <table className='mt-3 col-lg-12 table-bordered'>
          <thead>
            <tr>
            <th>Name</th>
              <th>Directed To</th>
              <th>Relative</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
          {tableData.map((data, index) => {
      console.log("Rendering table row:", data);
      return (
         <tr key={index}>
            <td>{data.name}</td>
            <td>{data.directedTo}</td>
             <td>{data.relative}</td>
             <td><button className='btnTable' onClick={handleDeleteRow}><MdDelete/></button></td>
             <td><button className='btnTable' onClick={handleUpdateRow}><RxUpdate/></button></td>
             </tr>
      );
   })}
          </tbody>
        </table>
</div>
    </section>
  )
}
