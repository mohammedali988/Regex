import Axios from 'axios';
import {useState} from 'react';
import swal from 'sweetalert';
import './App.css';

function ForSave(){
    const [name, setName ]= useState('');
    const [discription, setDiscription] = useState('');

    const hundleSubmit = (e) => {
        e.preventDefault();
        Axios
        .post('http://localhost:8000/sav/', {name, discription})
        .then( result => {
            console.log(result)
            if(result) {
                setName('')
                setDiscription('')
                swal('your query saved')
            }
        })
        .catch ( err => console.log(err))
    }

    console.log(name, discription)
    return (
        <div>
            <form onSubmit={hundleSubmit} className="card card-body mt-4 mb-4"> 
                <div className='text2'>
                    <div className="form-group">
                        <h4 id='h3'>Name:</h4>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"
                        onChange={e => setName(e.target.value)}
                        style={{'background-color': '#e3f2fd'}}
                        ></textarea>
                    </div>
                </div>
                <div className='text3'>
                    <div className="form-group">
                        <h4 id='h3'>Description:</h4>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" 
                        onChange={e => setDiscription(e.target.value)}
                        style={{'background-color': '#e3f2fd'}}
                        ></textarea>
                    </div>
                </div>
                <button type='submit' className="btn btn-primary" >submit</button>
            </form>
        </div>
    )
}
export default ForSave;