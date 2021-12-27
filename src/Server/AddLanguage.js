import React from 'react';


class AddLanguage extends React.Component {

    constructor(props) {
        super(props)
        this.input = React.createRef()
        this.DeleteLang = this.DeleteLang.bind(this);               
      }

      DeleteLang(e)
      {
       // var langList = document.getElementById("langListUnit"); 
       // console.log(langList);   
        var langDetails = document.getElementById(e.target.parentNode.id);  
       console.log(e.target.id);       
       //console.log(langDetails);        
        langDetails.parentNode.removeChild(langDetails);         
      }
     
    render() {
        
    var id_langName="id_langName";    
    var id_level="id_level";     
    
        return (     
            <div>                 
                <details id= {"langAddDetails"}  open> 
                               
                <a id="idDelete" href="javascript:DeleteLang(e)" name = "delete" onClick={this.DeleteLang} > Удалить  </a>
                    <summary>Язык</summary>
                    <div className="row">
                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <label for="id_langName">Язык:</label>
                            <input type="text" className="form-control"  id="id_langName" name="id_langName"
                                placeholder="Введите язык" defaultValue ="" ref={this.input} />
                        </div>
                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <label for="id_level">Уровень владения:</label>
                            <select className="form-control" id="id_level" name="id_level" defaultValue ="" ref={this.input}  >
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
    

export default AddLanguage;