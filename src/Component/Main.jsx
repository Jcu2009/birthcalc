import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DateTime } from "luxon";
import { useState } from "react"

export function Main(){
        const [selectedDate, setSelectedDate] = useState(DateTime.now()); //Creates state to store current time
        
     
         function handleChange(date){  //Handle updates state to selected time in calender
                 setSelectedDate(date)
        }

        const [finalDate, setUpdatedDate] = useState(null); //Set the final calced date 

        function getDate(){
                const ageDate = DateTime.fromJSDate(selectedDate)
                const calcDate = DateTime.now().minus({ years: ageDate.year, months: ageDate.month, days: ageDate.day, seconds: ageDate.second})
                // Change the time form the selectedDate to a luxon date value
                // get the year , month , day and second usin luxon math (The time now mins the agedate)

                setUpdatedDate(calcDate)
                // Sets state to the calcValue
        }
 
        

        return(
        <div className="date">
           <div className="grid">
               <div className="element1">Enter your birth date:</div>

               <div><DatePicker
                  className="date-picker-wrapper"
                  selected={selectedDate} //Reneders the date time picker
                  onChange={handleChange} 
                  showIcon
               /> 
               </div>



            <div>
                <button onClick={getDate} className="button">Calculate</button>
                </div>

            </div>     
                <p className="ans">{finalDate ? `Your ${finalDate.year} years ${finalDate.month} months ${finalDate.day} days and ${finalDate.second} seconds old` : "No Date Data"}</p>
        </div>)

}