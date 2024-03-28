import './Contact.css';

const Contact = () => {
  return (
    <div className="formContainer">
        <div className='formcontainer'>
            <p>Have a question or want to work together? Leave your details and i'll get back to you soon.</p>
      <form>
        <div>
        <input type="text" id="name" name="name" placeholder='Name'></input>
        </div><div>
        <input type="email" id="email" name="email" placeholder='Email'/>
        </div><div>
        <textarea id="message" name="message" placeholder="Message" rows="4" cols="50"></textarea>
        </div><div className='formSubmit'>
        <input id='submit' type="submit" value="Submit"></input>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Contact;
