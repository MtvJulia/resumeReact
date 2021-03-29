function ShowEducation(props) {

    let arrayToDisplay = props.arrayToDisplay;
    console.log("////////////////////////////////////////////////////");
    console.log(props);

    return (

        <div>
            {
                arrayToDisplay.map((item) => {
                    if(item.institutName!= null){
                        return (
                            //откорректировать разметку div
                            <div>
                                <tr>
                                    <td>
                                        <h2>Образование</h2>
                                    </td>
                                </tr>
                                <tr>
                                    <td> <label className="control-label" for="id_institutName">Наименование учебного заведения:</label></td>
                                    <td className="col-sm-8">
                                        <input type="text" className="form-control" id="id_institutName" value={item.institutName} name="id_institutName" placeholder="Введите наименование учебного заведения" />
                                    </td>
                                </tr>
                                <tr>
                                    <td> <label className="control-label" for="id_levelEducation">Уровень образование:</label></td>
                                    <td className="col-sm-8">
                                        <select className="form-control" id="id_levelEducation" value={item.levelEducation} name="id_levelEducation">
                                            <option>Высшее</option>
                                            <option>Бакалавр</option>
                                            <option>Магистр</option>
                                            <option>Специалист</option>
                                            <option>Кандидат наук</option>
                                            <option>Доктор наук</option>
                                            <option>Неполное высшее</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td> <label className="control-label" for="id_faculty">Факультет:</label></td>
                                    <td className="col-sm-8">
                                        <input type="text" className="form-control" id="id_faculty" value={item.faculty} name="id_faculty" placeholder="Введите факультет" />
                                    </td>
                                </tr>
                                <tr>
                                    <td> <label className="control-label" for="id_specialty">Специальность:</label></td>
                                    <td className="col-sm-8">
                                        <input type="text" className="form-control" id="id_specialty" name="id_specialty" value={item.specialty} placeholder="Введите специальность" />
                                    </td>
                                </tr>
                                <tr>
                                    <td> <label className="control-label" for="id_ending">Год окончания:</label></td>
                                    <td className="col-sm-8">
                                        <input type="date" className="form-control" id="id_ending" value={item.ending} name="id_ending" />
                                    </td>
                                </tr>    
                            </div>    
                        )
                    }                    
                })
            }
            {/* Пустой сложенный див с + */}
            <div>
                <tr>
                    <td>
                        <h2>Образование</h2>
                    </td>
                </tr>
                <tr>
                    <td> <label className="control-label" for="id_institutName">Наименование учебного заведения:</label></td>
                    <td className="col-sm-8">
                        <input type="text" className="form-control" id="id_institutName"  name="id_institutName" placeholder="Введите наименование учебного заведения" />
                    </td>
                </tr>
                <tr>
                    <td> <label className="control-label" for="id_levelEducation">Уровень образование:</label></td>
                    <td className="col-sm-8">
                        <select className="form-control" id="id_levelEducation"  name="id_levelEducation">
                            <option>Высшее</option>
                            <option>Бакалавр</option>
                            <option>Магистр</option>
                            <option>Специалист</option>
                            <option>Кандидат наук</option>
                            <option>Доктор наук</option>
                            <option>Неполное высшее</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td> <label className="control-label" for="id_faculty">Факультет:</label></td>
                    <td className="col-sm-8">
                        <input type="text" className="form-control" id="id_faculty"  name="id_faculty" placeholder="Введите факультет" />
                    </td>
                </tr>
                <tr>
                    <td> <label className="control-label" for="id_specialty">Специальность:</label></td>
                    <td className="col-sm-8">
                        <input type="text" className="form-control" id="id_specialty" name="id_specialty"  placeholder="Введите специальность" />
                    </td>
                </tr>
                <tr>
                    <td> <label className="control-label" for="id_ending">Год окончания:</label></td>
                    <td className="col-sm-8">
                        <input type="date" className="form-control" id="id_ending"  name="id_ending" />
                    </td>
                </tr>

            </div>

        </div>

    );

}
export default ShowEducation;