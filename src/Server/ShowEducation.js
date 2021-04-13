function ShowEducation(props) {

    let arrayToDisplay = props.arrayToDisplay;
    console.log("////////////////////////////////////////////////////");
    console.log(props);

    return (

        <div>
            {
                arrayToDisplay.map((item) => {
                    if (item.institutName != null) {
                        return (
                            <div>
                                <details id="educationDatails" open>
                                    <summary>Mесто учебы</summary>
                                    <div className="row">
                                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <label for="id_institutName">Наименование учебного заведения:</label>
                                            <input type="text" className="form-control" id="id_institutName" value={item.institutName} name="id_institutName"
                                                placeholder="Введите наименование учебного заведения" />
                                        </div>
                                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <label for="id_levelEducation">Уровень образование:</label>
                                            <select className="form-control" id="id_levelEducation" value={item.levelEducation} name="id_levelEducation">
                                                <option disabled>Выберите уровень</option>
                                                <option selected></option>
                                                <option>Высшее</option>
                                                <option>Бакалавр</option>
                                                <option>Магистр</option>
                                                <option>Специалист</option>
                                                <option>Кандидат наук</option>
                                                <option>Доктор наук</option>
                                                <option>Неполное высшее</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <label for="id_faculty">Факультет:</label>
                                            <input type="text" className="form-control" id="id_faculty" name="id_faculty" value={item.faculty}
                                                placeholder="Введите факультет" />
                                        </div>
                                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <label for="id_specialty">Специальность:</label>
                                            <input type="text" className="form-control" id="id_specialty" name="id_specialty" value={item.specialty}
                                                placeholder="Введите специальность" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <label for="id_ending">Год окончания:</label>
                                            <input type="date" className="form-control" id="id_ending" name="id_ending" value={item.ending} />
                                        </div>
                                    </div>
                                </details>

                            </div>
                        )
                    }
                    else {
                        return (
                            <div>
                                <details id="educationDatails" open>
                                    <summary>Mесто учебы</summary>
                                    <div className="row">
                                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <label for="id_institutName">Наименование учебного заведения:</label>
                                            <input type="text" className="form-control" id="id_institutName" name="id_institutName"
                                                placeholder="Введите наименование учебного заведения" />
                                        </div>
                                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <label for="id_levelEducation">Уровень образование:</label>
                                            <select className="form-control" id="id_levelEducation"  name="id_levelEducation">
                                                <option disabled>Выберите уровень</option>
                                                <option selected></option>
                                                <option>Высшее</option>
                                                <option>Бакалавр</option>
                                                <option>Магистр</option>
                                                <option>Специалист</option>
                                                <option>Кандидат наук</option>
                                                <option>Доктор наук</option>
                                                <option>Неполное высшее</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <label for="id_faculty">Факультет:</label>
                                            <input type="text" className="form-control" id="id_faculty" name="id_faculty" 
                                                placeholder="Введите факультет" />
                                        </div>
                                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <label for="id_specialty">Специальность:</label>
                                            <input type="text" className="form-control" id="id_specialty" name="id_specialty"
                                                placeholder="Введите специальность" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <label for="id_ending">Год окончания:</label>
                                            <input type="date" className="form-control" id="id_ending" name="id_ending"  />
                                        </div>
                                    </div>
                                </details>

                            </div>
                        )
                    }
                })
            }

        </div>
    );

}
export default ShowEducation;