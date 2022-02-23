import React from 'react';

class ShowEducation extends React.Component {

    constructor(props) {
        super(props)
        this.input = React.createRef();
    }

    DeleteEducation(e) {
        let educationDetails = document.getElementById(e.target.parentNode.parentNode.id);
        educationDetails.parentNode.removeChild(educationDetails);
    }

    render() {

        let id_institutName = "id_institutName";
        let id_levelEducation = "id_levelEducation";
        let id_faculty = "id_faculty";
        let id_specialty = "id_specialty";
        let id_ending = "id_ending";
        let count = 0;

        let { arrayToDisplay } = this.props;       

        return (
            <div>
                {
                    arrayToDisplay.map((item) => {
                        count++;
                        return (
                            <div>
                                <details id={"educationDatails" + count} open>                                   
                                    <summary>Mесто учебы                                        
                                        <a className='btn-add-del' id={"idDeleteEducation" + count} href="javascript:DeleteEducation(e)" 
                                        name="delete" onClick={this.DeleteEducation} >Удалить</a>                                        
                                    </summary>
                                    <div className="row">
                                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <label className="form-label" htmlFor="id_institutName">Наименование учебного заведения:</label>
                                            <input type="text" className="form-control" id={id_institutName + count} defaultValue={item.institutName} name="id_institutName"
                                                placeholder="Введите наименование учебного заведения" ref={this.input} />
                                        </div>
                                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <label className="form-label" htmlFor="id_levelEducation">Уровень образование:</label>
                                            <select className="form-select" id={id_levelEducation + count} defaultValue={item.levelEducation} name="id_levelEducation" ref={this.input}>
                                                <option disabled>Выберите уровень</option>
                                                <option selected></option>
                                                <option value="6">Высшее</option>
                                                <option value="7">Бакалавр</option>
                                                <option value="8">Магистр</option>
                                                <option value="9">Специалист</option>
                                                <option value="10">Кандидат наук</option>
                                                <option value="11">Доктор наук</option>
                                                <option value="12">Неполное высшее</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <label className="form-label" htmlFor="id_faculty">Факультет:</label>
                                            <input className="form-control" type="text" id={id_faculty + count} name="id_faculty" defaultValue={item.faculty}
                                                placeholder="Введите факультет" ref={this.input} />
                                        </div>
                                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <label className="form-label" htmlFor="id_specialty">Специальность:</label>
                                            <input className="form-control" type="text" id={id_specialty + count} name="id_specialty" defaultValue={item.specialty}
                                                placeholder="Введите специальность" ref={this.input} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <label className="form-label" htmlFor="id_ending">Год окончания:</label>
                                            <input className="form-control" type="date" id={id_ending + count} name="id_ending" defaultValue={item.ending} ref={this.input} />
                                        </div>
                                    </div>
                                </details>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default ShowEducation;
