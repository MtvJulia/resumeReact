import React from 'react';

class ShowEducation extends React.Component {

    constructor(props) {
        super(props)
        this.input = React.createRef()


      // this.DeleteEducation = this.DeleteEducation.bind(this);
       
      }

    //   DeleteEducation(e)
    //   {
    //     var langList = document.getElementById("langList");        
    //     var langDetails =document.getElementById(e.target.parentNode.id);
    //     console.log(langDetails);       
    //     langList.remove("beforeend", langDetails);
    //   }
     

    render() {
        
    var id_institutName="id_institutName";    
    var id_levelEducation="id_levelEducation"; 
    var id_faculty="id_faculty";  
    var id_specialty="id_specialty";  
    var id_ending="id_ending";    
    var count=0;

    let { arrayToDisplay} = this.props;

       
    if(arrayToDisplay.length != 0)
    {
        return (
            <div>              
                {                     
                    arrayToDisplay.map((item) => {
                        count++;                        
                        if (item.institutName != null) {
                            return (
                                //откорректировать разметку div
                                <div> 
                                     <details id="educationDatails" open>
                                    <summary>Mесто учебы</summary>
                                    <div className="row">
                                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <label for="id_institutName">Наименование учебного заведения:</label>
                                            <input type="text" className="form-control" id={id_institutName+count} defaultValue={item.institutName} name="id_institutName"
                                                placeholder="Введите наименование учебного заведения" ref={this.input} />
                                        </div>
                                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <label for="id_levelEducation">Уровень образование:</label>
                                            <select className="form-control" id={id_levelEducation+count} defaultValue={item.levelEducation} name="id_levelEducation" ref={this.input}>
                                                <option disabled>Выберите уровень</option>
                                                <option selected></option>
                                                <option value ="6">Высшее</option>
                                                <option value ="7">Бакалавр</option>
                                                <option value ="8">Магистр</option>
                                                <option value ="9">Специалист</option>
                                                <option value ="10">Кандидат наук</option>
                                                <option value ="11">Доктор наук</option>
                                                <option value ="12">Неполное высшее</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <label for="id_faculty">Факультет:</label>
                                            <input type="text" className="form-control" id={id_faculty+count} name="id_faculty" defaultValue={item.faculty}
                                                placeholder="Введите факультет"ref={this.input} />
                                        </div>
                                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <label for="id_specialty">Специальность:</label>
                                            <input type="text" className="form-control" id={id_specialty+count} name="id_specialty" defaultValue={item.specialty}
                                                placeholder="Введите специальность"ref={this.input} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <label for="id_ending">Год окончания:</label>
                                            <input type="date" className="form-control" id={id_ending+count} name="id_ending" defaultValue={item.ending} ref={this.input}/>
                                        </div>
                                    </div>
                                </details>                                                                  
                                </div>
                            )                            
                        } 
                                                                                     
                    })
                }
                  <div hidden>
                <details id="educationDatailsClear" open>
                    <summary>Mесто учебы</summary>
                    <div className="row">
                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <label for="id_institutName">Наименование учебного заведения:</label>
                            <input type="text" className="form-control" id="id_institutName" name="id_institutName"
                                placeholder="Введите наименование учебного заведения"defaultValue ="" ref={this.input} />
                        </div>
                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <label for="id_levelEducation">Уровень образование:</label>
                            <select className="form-control" id="id_levelEducation"  name="id_levelEducation"defaultValue ="" ref={this.input}>
                                <option disabled>Выберите уровень</option>
                                <option selected></option>
                                <option value ="6">Высшее</option>
                                <option value ="7">Бакалавр</option>
                                                <option value ="8">Магистр</option>
                                                <option value ="9">Специалист</option>
                                                <option value ="10">Кандидат наук</option>
                                                <option value ="11">Доктор наук</option>
                                                <option value ="12">Неполное высшее</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <label for="id_faculty">Факультет:</label>
                            <input type="text" className="form-control" id="id_faculty" name="id_faculty" 
                                placeholder="Введите факультет" defaultValue ="" ref={this.input}/>
                        </div>
                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <label for="id_specialty">Специальность:</label>
                            <input type="text" className="form-control" id="id_specialty" name="id_specialty"
                                placeholder="Введите специальность"defaultValue ="" ref={this.input} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <label for="id_ending">Год окончания:</label>
                            <input type="date" className="form-control" id="id_ending" name="id_ending" defaultValue ="" ref={this.input} />
                        </div>
                    </div>
                </details>

            </div>
            </div>
        );
    }
    else {
        return (            
            <div>
                <details id="educationDatailsClear" open>
                <summary>Mесто учебы</summary>
                    <div className="row">
                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <label for="id_institutName">Наименование учебного заведения:</label>
                            <input type="text" className="form-control" id="id_institutName" name="id_institutName"
                                placeholder="Введите наименование учебного заведения"defaultValue ="" ref={this.input} />
                        </div>
                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <label for="id_levelEducation">Уровень образование:</label>
                            <select className="form-control" id="id_levelEducation"  name="id_levelEducation"defaultValue ="" ref={this.input}>
                                <option disabled>Выберите уровень</option>
                                <option selected></option>
                                                <option value ="6">Высшее</option>
                                                <option value ="7">Бакалавр</option>
                                                <option value ="8">Магистр</option>
                                                <option value ="9">Специалист</option>
                                                <option value ="10">Кандидат наук</option>
                                                <option value ="11">Доктор наук</option>
                                                <option value ="12">Неполное высшее</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <label for="id_faculty">Факультет:</label>
                            <input type="text" className="form-control" id="id_faculty" name="id_faculty" 
                                placeholder="Введите факультет" defaultValue ="" ref={this.input}/>
                        </div>
                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <label for="id_specialty">Специальность:</label>
                            <input type="text" className="form-control" id="id_specialty" name="id_specialty"
                                placeholder="Введите специальность"defaultValue ="" ref={this.input} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <label for="id_ending">Год окончания:</label>
                            <input type="date" className="form-control" id="id_ending" name="id_ending" defaultValue ="" ref={this.input} />
                        </div>
                    </div>
                </details>
            </div>
        )
    }  

}
    }

export default ShowEducation;
