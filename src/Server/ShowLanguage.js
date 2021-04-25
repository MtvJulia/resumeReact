function ShowLanguage(props) {
   
    let arrayToDisplay = props.arrayToDisplay;
    var id_langName="id_langName";    
    var id_level="id_level";   
     var count=0;
    console.log("////////////////////////////////////////////////////");
    console.log(props);
   const DeleteLang = (event)=>
    {
        var langList = document.getElementById("langList");
        console.log(langList);
        var langDetails = document.getElementById(event.target.id).outerHTML;
        console.log(langDetails);
        langList.removeChild(langDetails); 

    }
  
  if(arrayToDisplay.length != 0)
    {
        return (
            <div>              
                {                     
                    arrayToDisplay.map((item) => {
                        count++;                        
                        if (item.langName != null) {
                            return (
                                //откорректировать разметку div
                                <div>
                                    <a id={"idDelete"+count} href="javascript:DeleteLang(e)" name = "delete" onClick={function(event){
                                             var langList = document.getElementById("langList");
                                             console.log(langList);
                                             var langDetails = document.getElementById(event.target.id).outerHTML;
                                             console.log(langDetails);
                                             langList.removeChild(langDetails);                                  
                                        }}>Удалить
                                    <details id="langDetails" open>
                                        <summary>Язык</summary>
                                        
                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_langName">Язык:</label>                                                  
                                                <input type="text" className="form-control" value={item.langName} id ={id_langName+count} onChange = {
                                                    function(event)
                                                    {      
                                                        props.arrayToDisplay[count-1].langName = document.getElementById(event.target.id).value ;                                              
                                                        document.getElementById(event.target.id).value = event.target.value;
                                                        console.log(document.getElementById(event.target.id).value);
                                                        console.log( props.arrayToDisplay[count-1].langName);
                                                    }}  
                                                    name="id_langName" placeholder="Введите язык" />
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_level">Уровень владения:</label>
                                                <select className="form-control" id={id_level+count} name="id_level" value={item.level} onChange = {
                                                    function(event)
                                                    {
                                                        props.arrayToDisplay[count-1].level =  document.querySelector(`#${event.target.id}`).value;
                                                        document.querySelector(`#${event.target.id}`).value = document.querySelector(`#${event.target.id}`).value ;                                                        
                                                        console.log(document.getElementById(event.target.id).value);                                                      
                                                        console.log( props.arrayToDisplay[count-1].level);
                                                        console.log( props.arrayToDisplay[count-1].level);
                                                    } }  >                                                                                                                                                       
                                                                                                        
                                                    <option disabled>Выберите уровень</option>
                                                    <option selected></option>
                                                    <option>A1 - начальный</option>
                                                    <option>A2 - базовый</option>
                                                    <option>B1 - средний</option>
                                                    <option>B2 - выше среднего</option>
                                                    <option>C1 - продвинутый</option>
                                                    <option>C2 - профессиональный</option>
                                                </select>
                                            </div>
                                        </div>
                                    </details>
                                    </a>
                                </div>
                            )                            
                        } 
                                                                                     
                    })
                }
                 <div hidden>
                 
                <details id="langDetailsClear" open>
                <a id={"idDelete"+count} href="javascript:DeleteLang(e)" name = "delete" onClick={DeleteLang()}>Удалить
                    <summary>Язык</summary>
                    <div className="row">
                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <label for="id_langName">Язык:</label>
                            <input type="text" className="form-control"  id="id_langName" name="id_langName"
                                placeholder="Введите язык" />
                        </div>
                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <label for="id_level">Уровень владения:</label>
                            <select className="form-control" id="id_level" name="id_level"  >
                                <option disabled>Выберите уровень</option>
                                <option selected></option>
                                <option>A1 - начальный</option>
                                <option>A2 - базовый</option>
                                <option>B1 - средний</option>
                                <option>B2 - выше среднего</option>
                                <option>C1 - продвинутый</option>
                                <option>C2 - профессиональный</option>
                            </select>
                        </div>
                    </div>
                    </a>
                </details>
              
            </div>
            </div>
        );
    }
    else {
        return (            
            <div>
                <details id="langDetails" open>
                    <summary>Язык</summary>
                    <div className="row">
                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <label for="id_langName">Язык:</label>
                            <input type="text" className="form-control"  id="id_langName" name="id_langName"
                                placeholder="Введите язык" />
                        </div>
                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <label for="id_level">Уровень владения:</label>
                            <select className="form-control" id="id_level" name="id_level"  >
                                <option disabled>Выберите уровень</option>
                                <option selected></option>
                                <option>A1 - начальный</option>
                                <option>A2 - базовый</option>
                                <option>B1 - средний</option>
                                <option>B2 - выше среднего</option>
                                <option>C1 - продвинутый</option>
                                <option>C2 - профессиональный</option>
                            </select>
                        </div>
                    </div>
                </details>
            </div>
        )
    }  

}





export default ShowLanguage;
















