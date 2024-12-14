import { AiOutlineCalculator } from "react-icons/ai";
import React, { useState } from "react";

const handleFileUpload = (event) => {

    
    console.log(event.target.files[0]);
    
};


const Dashboard = ()=>{
    const [file, setFile] = useState(null); 
    const handleFileChange = (e) => {
        const file = e.target.files[0]; 
        console.log(file);  
      };

    return (
        <>
        <div className="right-content ">
            <div classNmae="row dashboardBoxWrapperRow">
                
                    <div className="dashboardBoxWrapper d-flex">
                        <div className="dashboardBox">
                            
                            
                        <h5 class="claimValue">Claim Value</h5>
                        <h6 class ="Conract Value">Contract Value</h6>
                        <button class="contractButton">value</button>
                        <h6 class ="Claim Value">Claim Value</h6>
                        <button class="claimButton">value</button>
                        <p class="contractPercentage">1% of Contract Value</p>
                        
                        </div>

                        <div className="dashboardBox">
                        <h5 class="Place">Place</h5>
                        <input
                             type="text"
                             className="placeInput"
                             placeholder="Select the Place for proceedings" />
                             <p class="contractPercentage">is the place for the proceedings the one mentioned in the agreement?</p>
                             <div className="radioGroup">
  <label>
    <input type="radio" name="option" value="yes" /> Yes
  </label>
  <label>
    <input type="radio" name="option" value="no" /> No
  </label>
</div>

       </div>
                        <div className="dashboardBox">
                        <h5 class="Language">Language</h5>
                        <input
                             type="text"
                             className="placeInput"
                             placeholder="Select the Place for proceedings" />
                             <p class="contractPercentage">is the language for the proceedings the one mentioned in the agrrenment</p>
                             <div className="radioGroup">
                                <label>
                                     <input type="radio" name="option" value="yes" /> Yes
                                      </label>
                                      <label>
                                         <input type="radio" name="option" value="no" /> No
                                         </label>
                                         </div>
                        </div>
                        <div className="dashboardBox">
  <h5 className="Statement">Statement</h5>
  
  <div className="uploadContainer">
        
        <div className="uploadBox">
          <label htmlFor="pdfUpload" className="uploadButton">
            <span>write your statement here or upload a pdf</span>
            <input
              type="file"
              id="pdfUpload"
              className="fileInput"
              accept=".pdf"
              onChange={handleFileUpload}
            />
          </label>
        </div>
      </div>


  
</div>
                        
                        <div className="dashboardBox">
                        <h5 class="Agreement under Disputes">Agreement under Disputes</h5>
                        <div className="uploadContainer">
        
        <div className="uploadBox">
          <label htmlFor="pdfUpload" className="uploadButton">
            <span>Upload the Contract Max 2 MB , PDF</span>
            <input
              type="file"
              id="pdfUpload"
              className="fileInput"
              accept=".pdf"
              onChange={handleFileUpload}
            />
          </label>
          <label htmlFor="pdfUpload" className="uploadButton">
            <span>Upload the Contract Max 2 MB , PDF</span>
            <input
              type="file"
              id="pdfUpload"
              className="fileInput"
              accept=".pdf"
              onChange={handleFileUpload}
            />
          </label>
        </div>
      </div>
                        </div>
                        <div className="dashboardBox">
                        <h5 class="Additional Documentation">Additional Documentation</h5>
                        <div className="uploadContainer">
        
        <div className="uploadBox">
          <label htmlFor="pdfUpload" className="uploadButton">
            <span>Upload the Contarct Max 2 MB , PDF</span>
            <input
              type="file"
              id="pdfUpload"
              className="fileInput"
              accept=".pdf"
              onChange={handleFileUpload}
            />
          </label>
        </div>
      </div>
                        
                        
                        </div>
                    </div>
                </div>
            </div>
    
        </>
    )
}
export default Dashboard;