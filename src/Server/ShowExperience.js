function ShowExperience(props){

    let arrayToDisplay = props.arrayToDisplay;
   console.log("////////////////////////////////////////////////////");
   console.log(props);
  

return(
    
 <tr>
    {
        arrayToDisplay.map((item)=>{   
            return(
               <div>
                <tr>
                <td>
                    <h2>Опыт работы</h2>
                </td>
            </tr>
            <tr>
                <td> <label className="control-label" for="id_startWork">Начало работы:</label></td>
                <td className="col-sm-8">
                    <input type="date" className="form-control" value={item.startWork.substr(0,10)}  id="id_startWork" name="id_startWork" />
                </td>
            </tr>
            <tr>
                <td> <label className="control-label" for="id_endWork">Конец работы:</label></td>
                <td className="col-sm-8">
                    <input type="date" className="form-control" value={item.endWork.substr(0,10)}  id="id_endWork" name="id_endWork" />
                </td>
            </tr>
            <tr>
                <td> <label className="control-label" for="id_stillWorking">Еще работаю:</label></td>
                <td >
                    <input className="control-input" type="checkbox" checked={item.stillWorking} id="id_stillWorking"name="id_stillWorking"   />
                </td>
            </tr>
            <tr>
                <td> <label className="control-label" for="id_positionWork">Должность:</label></td>
                <td className="col-sm-8">
                    <input type="text" className="form-control" id="id_positionWork"value={item.positionWork} name="id_positionWork"placeholder="Должность" />
                </td>
            </tr>
            <tr>
                <td> <label className="control-label" for="id_companyName">Название компании:</label></td>
                <td className="col-sm-8">
                    <input type="text" className="form-control" id="id_companyName" value={item.companyName} name="id_companyName"placeholder="Название компании" />
                </td>
            </tr>
            <tr>
                <td> <label className="control-label" for="id_jobDuties">Обязанности:</label></td>
                <td className="col-sm-8">
                    <textarea className="form-control" id="id_jobDuties" value={item.jobDuties} name="id_jobDuties"></textarea>                                               
                </td>
            </tr> 
                    
            </div>      
            
            )
        })
    }
 
 </tr>
);

}
export default ShowExperience;