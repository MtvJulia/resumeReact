function ShowCourses(props) {

    let arrayToDisplay = props.arrayToDisplay;
    console.log("////////////////////////////////////////////////////");
    console.log(props);

    return (

        <div>
            {
                arrayToDisplay.map((item) => {
                    if (item.courseName != null) {
                        return (
                            //откорректировать разметку div
                            <div>
                                <tr>
                                    <td>
                                        <h2>Курсы повышения квалификации</h2>
                                    </td>
                                </tr>
                                <tr>
                                    <td> <label className="control-label" for="id_courseName">Название курса:</label></td>
                                    <td className="col-sm-8">
                                        <input type="text" className="form-control" id="id_courseName" value={item.courseName} name="id_courseName" placeholder="Название курса" />
                                    </td>
                                </tr>
                                <tr>
                                    <td> <label className="control-label" for="id_organization">Проводившая организация:</label></td>
                                    <td className="col-sm-8">
                                        <input type="text" className="form-control" id="id_organization" name="id_organization" value={item.organization} placeholder="Проводившая организация" />
                                    </td>
                                </tr>
                                <tr>
                                    <td> <label className="control-label" for="id_endingCourse">Год окончания:</label></td>
                                    <td className="col-sm-8">
                                        <input type="date" className="form-control" id="id_endingCourse" value={item.endingCourse} name="id_endingCourse" />
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
                        <h2>Курсы повышения квалификации</h2>
                    </td>
                </tr>
                <tr>
                    <td> <label className="control-label" for="id_courseName">Название курса:</label></td>
                    <td className="col-sm-8">
                        <input type="text" className="form-control" id="id_courseName" name="id_courseName" placeholder="Название курса" />
                    </td>
                </tr>
                <tr>
                    <td> <label className="control-label" for="id_organization">Проводившая организация:</label></td>
                    <td className="col-sm-8">
                        <input type="text" className="form-control" id="id_organization" name="id_organization" placeholder="Проводившая организация" />
                    </td>
                </tr>
                <tr>
                    <td> <label className="control-label" for="id_endingCourse">Год окончания:</label></td>
                    <td className="col-sm-8">
                        <input type="date" className="form-control" id="id_endingCourse" name="id_endingCourse" />
                    </td>
                </tr>

            </div>

        </div>

    );

}
export default ShowCourses;