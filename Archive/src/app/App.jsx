import './App.css'
import React, {useState} from 'react';
import lankaNIC from 'lanka-nic';
import InputField from "../components/Inputer/InputField.jsx";
import Button from "react-bootstrap/Button";
import Button1, {Button2} from "../components/Button/Button.jsx";

function App() {


    const [nicNumber, setNicNumber] = useState('');




    const getNICInfo = () => {

        console.log(nicNumber)

        const {dateOfBirth, gender} = lankaNIC.getInfoFromNIC(nicNumber);

        const g1 = dateOfBirth.toString()

        setDateOfBirth(g1)
        setGender(gender)

    }

    const [g1 , setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');


    return (
        <>
        <div className={'parent-class'}>

            <h1>NIC Generator</h1>
            <br/>
            <label htmlFor="nicNumber">Enter NIC number:</label>

            <InputField
                type="text"
                id="nicNumber"
                name="nicNumber"
                value={nicNumber}
                onChange={(e) => setNicNumber(e.target.value)}
                required
            />

            <Button1 type="button" onClick={()=>(getNICInfo())}/>

            <br/><br/>

            <div>
                <h3>Date of Birth:</h3>  <p style={{color:"red"}}> {g1} </p>
                <h3>Gender :</h3> <p style={{color:"red"}}> {gender} </p>

                <p></p>

            </div>
            <div className={'child-class'}>
                <Button2/>
            </div>


        </div>
        </>
    );

}


export default App
