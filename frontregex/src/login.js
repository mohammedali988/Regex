import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import {useState} from 'react';
import swal from 'sweetalert';

function Login(){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onChange = (e)=>{
      setUsername(e.target.value)
    }
    
    const hundleSubmit = (e) => {
      e.preventDefault();
      Axios
      .post('http://localhost:8000/log/', {username, password})
      .then ( result => {
        console.log(result)
        if (result){
          swal('create user sucsess')
        }
      }).catch(err => {
        swal( 'this user Name and password already exist')
      })
    }

    return(
        <div>
          <form onSubmit={hundleSubmit}>
           <div className='text4'>
                <div className="form-group">
                    <h4 id='h3'>User Name :</h4>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                    onChange={onChange}
                    style={{'background-color': '#e3f2fd'}}
                    ></textarea>
                </div>
                <div className="form-group">
                    <h4 id='h3'>Password:</h4>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                    onChange={e => setPassword(e.target.value)}
                    style={{'background-color': '#e3f2fd'}}
                    ></textarea>
                </div>
                </div>
                <button style={{'height':'40px'}} type="submit" className="btn btn-primary">login</button>
           </form>
        </div>
    )
}

export default Login;










{/* <nav class="navbar navbar-light bg-light">
  <form class="form-inline">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit"
     style={{'margin-left':'1000px', 'fontSize':'20px'}} onClick={alert}>LogIn</button>
  </form>
</nav> */}

       