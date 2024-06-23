

import React, { useState } from 'react';
import axios from 'axios';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { LiaClockSolid } from "react-icons/lia";
import { MdStar } from "react-icons/md";
const InvoiceForm = () => {
  const [invoiceDetails, setInvoiceDetails] = useState({
    currency: '',
    invBasicAmount: 0,
    invTaxAmount: 0,
    totalInvAmount: 0,
    advancePaid: 0,
    tcsApplicable: ''
  });
console.log(invoiceDetails)
  // State for Alternate Payee Details
  const [payeeDetails, setPayeeDetails] = useState({
    alternatePayee1: '',
    alternatePayee2: '',
    city: '',
    street: '',
    country: '',
    bankKey: '',
    bankAccNo: '',
    reference: ''
  });
console.log(payeeDetails)

  
 
  const handleInvoiceChange = (e) => {
    const { name, value } = e.target;
    setInvoiceDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  // Handle change for Payee Details
  const handlePayeeChange = (e) => {
    const { name, value } = e.target;
    setPayeeDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      ...invoiceDetails,
      ...payeeDetails
    };

    console.log(formData);

    axios.post('http://localhost:3005/api/formdata', formData)
      .then((response) => {
        console.log(response.data);
        alert("data saved success fully");
      })
      .catch((error) => {
        console.error(error);
        alert('Error occurred while submitting the form');
      });
  };






return (
  <div className='over_all_container'>     

              <div className='over__firstchild_container'>

                              <div className='text_container'>
                                        <h1> Field and Template Search</h1> <br/>
                                        <p> You can search for documents and folders, in the <a>Search Pane,</a> by  assigned template , field value or multiple
                                        field values using the field search type</p><br/><br/>

                                        <p>The<a> Quick Search</a> and <a>Basic Search</a> types also let you search across all fields in the repository. Or, increase the
                                        power of your searches by using the <a>advanced fileds and templates syntax</a><br/>
                                        </p><br/>

                                        <p>To specify a field and value to search for, type the value you want to search for in the field. The search values you can input depend on the field type and any constraints on the field. For instance, you cannot serach for
                                          alphabet characters in a number field, and if an administrator has constrained the phone number format that can be typed in a phone number field, you will not be able to type the number in a non-matching format. Likewise,
                                          when performing a Date, Time or Date/Time search, you will only be able to input date and time values that 
                                          match the date and time formatting for that field.
                                        </p><br/>
                                        <p> When searching on a date field, you can search for a date range. Learn about the</p>
                                    <p> types of date searches</p><br/>
                                    <br/>

                                    <h3>To perform a field and /or template search</h3>
                                        <br/>
                                        <br/>
                                        <p> To search by field  value or template in the <a>Laserfiche Windows client</a></p>
                                                  <br/>

                                              <ol>
                                              <li>   In the <a> Search Pane,</a> click <span> Customize Search </span> and select <span> Field Search</span> </li>
                                                <li> Choose the search you want to run by selecting one or both of the following:
                                                  <li><ul>
                                                      <li>To search by field. select <span> Search across fields</span></li>
                                                    </ul> </li>  
                                                </li>
                                                </ol>     
                              </div>

                                <div className='form-container'>
                                                
                                                  <div><b>Invoice details</b> <b>Action History</b></div>
                                                  
                                                  
                                                  
                                                  <div className="accordion accordion-flush" id="accordionFlushExample1">
                                                              <div className="accordion-item">
                                                                        <h2 className="accordion-header" id="flush-headingOne">
                                                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                              INVOICE AMOUNT DETAILS
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                                          <div className="accordion-body">
                                                                            
                                                                                <div className='form_input_elements'>
                                                                                  <label htmlFor='currency'> <LiaClockSolid/> Currency <sup>< MdStar className='star_color'/></sup>:</label>   
                                                                                          <select id="currency" value={invoiceDetails.currency} onChange={handleInvoiceChange}> 
                                                                                                             <option value="INR">INR - Indian Rupee</option>
                                                                                                              <option value="USD">USD - US Dollar</option>
                                                                                                              <option value="EUR">EUR - Euro</option>
                                                                                                              <option value="GBP">GBP - British Pound</option>
                                                                                                              <option value="JPY">JPY - Japanese Yen</option>
                                                                                                              <option value="AUD">AUD - Australian Dollar</option>
                                                                                                              <option value="CAD">CAD - Canadian Dollar</option>
                                                                                                              <option value="CHF">CHF - Swiss Franc</option>
                                                                                                              <option value="CNY">CNY - Chinese Yuan</option>
                                                                                                              <option value="RUB">RUB - Russian Ruble</option>
                                                                                          </select>
                                                                                </div>
                                                                                
                                                                                </div>
                                                                               <div className='form_input_elements'>
                                                                                 <label htmlFor="basicAmount" > <LiaClockSolid/> Inv Basic Amount <sup>< MdStar className='star_color'/></sup>:</label>

                                                                                  <input type="number"  id="basicAmount" name="invBasicAmount" value={invoiceDetails.invBasicAmount} onChange={handleInvoiceChange}/>
                                                                              </div>
                                                                              <div className='form_input_elements'>
                                                                                 <label htmlFor="basicAmount" > <LiaClockSolid/>Inv tax Amt <sup>< MdStar className='star_color'/></sup>:</label>

                                                                                  <input type="number"  id="basicAmount" name="invTaxAmount" value={invoiceDetails.invTaxAmount} onChange={handleInvoiceChange}/>
                                                                              </div> 
                                                                              <div className='form_input_elements'> 

                                                                                  <label htmlFor="basicAmount" ><LiaClockSolid/> Total Inv Amount &nbsp;[inclu of tax] <sup>< MdStar className='star_color'/></sup>:</label>
                                                                                  <input type="number"  id="basicAmount"  name="totalInvAmount" value={invoiceDetails.totalInvAmount} onChange={handleInvoiceChange}/>
                                                                              </div> 
                                                                              <div className='form_input_elements'>
                                                                                  <label htmlFor="basicAmount" > <LiaClockSolid/> Advance paid <sup>< MdStar className='star_color'/></sup>:</label>
                                                                                  <input type="number"  id="basicAmount"  name="advancePaid" value={invoiceDetails.advancePaid} onChange={handleInvoiceChange}/>
                                                                              
                                                                           
                                                                               </div>
                                                                               <div className='form_input_elements'>
                                                                                  <label htmlFor="basicAmount" ><LiaClockSolid/>  Net payable Amt <sup>< MdStar className='star_color'/></sup>:</label>
                                                                                  <input type="number"  id="basicAmount" name="netPayableAmount" value={invoiceDetails.netPayableAmount} onChange={handleInvoiceChange}/>
                                                                              
                                                                           
                                                                               </div>

                                                                                <div className='form_input_elements  inside_span_access'>
                                                                                <label htmlFor="basicAmount" > <LiaClockSolid/> <span>Tcs applicable  </span> <sup>< MdStar className='star_color'/></sup>:</label>
                                                                                <span>
                                                                                  <span className='radio'>
                                                                                      <input type="radio" id="yes"  name="tcsApplicable" value="yes" checked={invoiceDetails.tcsApplicable === 'yes'} onChange={handleInvoiceChange}/>
                                                                                      <label htmlFor='yes'>yes</label>
                                                                                      </span>
                                                                                    <span className='radio'>     
                                                                                        <input type="radio" id="no" name="tcsApplicable" value="no" checked={invoiceDetails.tcsApplicable === 'no'} onChange={handleInvoiceChange}/>   
                                                                                        <label htmlFor='no'>No</label> 
                                                                                    </span>                                                                               
                                                                                </span>
                                                                                </div>






                                                                        </div>
                                                              </div>
                            
                            
                                                  </div>
                                                  
                                                      
                                                      
                                                  <div className="accordion accordion-flush" id="accordionFlushExample2">
                                                              <div className="accordion-item">
                                                                        <h2 className="accordion-header" id="flush-headingTwo">
                                                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                             ALTERNATE PAYEE DETAILS
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                                          <div className="accordion-body">
                                                                            
                                                                              
                                                                                
                                                                                </div>
                                                                               <div className='form_input_elements'>
                                                                                 <label htmlFor="AlternatePayee1" > <LiaClockSolid/> Alternate Payee 1:</label>

                                                                                  <input type="text"  id="AlternatePayee1" name="alternatePayee1" value={payeeDetails.alternatePayee1} onChange={handlePayeeChange}/>
                                                                              </div>
                                                                              <div className='form_input_elements'>
                                                                                 <label htmlFor="AlternatePayee2" > <LiaClockSolid/>Alternate Payee 2:</label>

                                                                                  <input type="text"  id="AlternatePayee2" name="alternatePayee2" value={payeeDetails.alternatePayee2} onChange={handlePayeeChange}/>
                                                                              </div> 
                                                                              <div className='form_input_elements'> 

                                                                                  <label htmlFor="City" ><LiaClockSolid/> City :</label>
                                                                                  <input type="text"  id="City"  name="city" value={payeeDetails.city} onChange={handlePayeeChange}/>
                                                                              </div> 
                                                                              <div className='form_input_elements'>
                                                                                  <label htmlFor="Street" > <LiaClockSolid/> Street:</label>
                                                                                  <input type="text"  id="Street" name="street" value={payeeDetails.street} onChange={handlePayeeChange}/>
                                                                              
                                                                           
                                                                               </div>
                                                                               <div className='form_input_elements'>
                                                                                  <label htmlFor="Country" ><LiaClockSolid/>  Country:</label>
                                                                                  <input type="text"  id="Country" name="country" value={payeeDetails.country} onChange={handlePayeeChange}/>
                                                                              
                                                                           
                                                                               </div>
                                                                               <div className='form_input_elements'>
                                                                                  <label htmlFor="BankKey" ><LiaClockSolid/> Bank Key / IfscCode :</label>
                                                                                  <input type="text"  id="BankKey" name="bankKey" value={payeeDetails.bankKey} onChange={handlePayeeChange}/>
                                                                              
                                                                           
                                                                               </div>
                                                                               <div className='form_input_elements'>
                                                                                  <label htmlFor="BankAccNo" ><LiaClockSolid/>  Bank Acc No:</label>
                                                                                  <input type="number"  id="BankAccNo"  name="bankAccNo" value={payeeDetails.bankAccNo} onChange={handlePayeeChange}/>
                                                                              
                                                                           
                                                                               </div>

                                                                               <div className='form_input_elements'>
                                                                                  <label htmlFor="Reference" ><LiaClockSolid/>Reference :</label>
                                                                                  <input type="text"  id="Reference" name="reference" value={payeeDetails.reference} onChange={handlePayeeChange}/>
                                                                              
                                                                           
                                                                               </div>




                                                                        </div>
                                                              </div>
                            
                            
                                                  </div>
                                                  
                                                  <div className="accordion accordion-flush" id="accordionFlushExample3">
                                                              <div className="accordion-item">
                                                                        <h2 className="accordion-header" id="flush-headingT3">
                                                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse3" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                             ALTERNATE PAYEE DETAILS
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapse3" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                                          <div className="accordion-body">
                                                                            
                                                                              
                                                                                
                                                                          </div>
                                     
                                                          
                                                                             
                                                                             
                                                                               

                                                                


                                                                        </div>
                                                              </div>
                            
                            
                                                  </div>

                                                  
                                                




                                </div>
                              
                                  
                    
                    
                  
              </div>     
        





           




                                    
                  <div className='footer_container'>
                       
                       <p className='abcd'>
                      <span className='abcd1'>CURRENCY </span>
                       <span className='abcd1'>Inv Basic Amt : {}</span>
                       <span className='abcd1'>Basic tax Amt: {}</span>
                       <span className='abcd1'>Inv Total Amt : {}</span>
                       <span className='abcd1'>Tds Amt : {}</span>
                       <span className='abcd1'>Net Payable Amt : {}</span>
                       <span className='abcd1'>Basic Amt Diff: {}</span>
                       
                       </p>
                       <span className='span_con2'>
                        <select>
                          <option>select action</option>
                          <option>yes</option>
                          <option>No</option>
                        </select>
                          <button> Reject</button>
                          <button onClick={handleSubmit}> Approve</button>
                       </span>

                </div>


    </div>

  );
};

export default InvoiceForm;








