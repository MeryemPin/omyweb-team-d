import "./JobApplication.css";

const JobApplication = () => {
    return ( 
        <section className="job-application">
             <h1 id="title">Application Form</h1>

  <form action="SEND ADDRESS" id="ft-form" method="POST" accept-charset="UTF-8" enctype="multipart/form-data">
  <fieldset>
    <legend>Job</legend>
    <label>
      Application for *
      <select name="Application for" required>
        <option>Fullstack</option>
        <option>Junior Marketer</option>
      </select>
    </label>
  </fieldset>
  <fieldset>
    <legend>Personal data</legend>
    <div class="two-cols">
      <label>
        First name *
        <input type="text" name="First name" required />
      </label>
      <label>
        Family name *
        <input type="text" name="Family name" required />
      </label>
    </div>
    
  
    <div class="two-cols">
      <label>
        Phone *
        <input type="tel" name="Phone" required />
      </label>
      <label>
        Email address *
        <input type="email" name="Email" required />
      </label>
    </div>
  </fieldset>
  <fieldset>
    <legend>Application documents</legend>
    <div class="two-cols">
      <label>
        Application letter
        <input  type="file" name="file" accept=".doc,.docx,.pdf" />
      </label>
      <label>
        Resume
        <input  type="file" name="file" accept=".doc,.docx,.pdf" />
      </label>
    </div>
    <p>Possible file types: DOC, PDF. Maximum file size: 10 MB.</p>
  </fieldset>
  <div class="btns">
    <input type="text" name="_gotcha" value="" style={{display:"none"}} />
    <input className="btn-file" type="submit" value="Submit application" />
  </div>

  
</form>







        </section>
     );
}
 
export default JobApplication;