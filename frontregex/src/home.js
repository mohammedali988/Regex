import {useState} from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import Highlighter from "react-highlight-words";
import Login from './login';
import './App.css';

function Home(){
    const [reguler, setReguler]= useState('');
    const [text, setText]= useState('');
    const [match, setMatch ] = useState([]);

    console.log(reguler, text)
    const onChange = (e)=>{
     setReguler(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('hii mooooooooo')
        axios
        .post("http://localhost:8000/reg/", {reguler, text})
        .then(result => {
            console.log(result, 'hiiiiiii')
            if(result.data){
                let x = result.data
                setMatch(x)
                swal("ther is match");
                console.log(match)
            }
            else(swal('ther is no match'))
        }).catch( err => {
            console.log(err, 'err here')
        })
    }

   return (
       <div>
           <Login/>
           <form onSubmit={handleSubmit} className="card card-body mt-4 mb-4">
           <div className='text1'>
                <div className="form-group">
                    <h4 id='h3'>Regular Expression</h4>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                    onChange={onChange}
                    style={{'background-color': '#e3f2fd'}}
                    ></textarea>
                </div>
            </div>
            <div className='text'>
                <div className="form-group">
                    <h4 id='h3'>Test String</h4>
                    <Highlighter
                        highlightClassName="YourHighlightClass"
                        searchWords={match}
                        autoEscape={true}
                        textToHighlight={text}
                    />
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="7" 
                    style={{'background-color': '#e3f2fd'}}
                    onChange={e => setText(e.target.value)}
                    
                    > 
                </textarea>
                </div>
                    <button style={{'height':'40px'}} type="submit" className="btn btn-primary">submit</button>
            </div>
           </form>
       </div>

   )
}

export default Home;
// onClick = {highlight(text, match)}