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
                            <div>
                                <details id="courseDetails" open>
                                    <summary>Курс</summary>

                                    <div className="row">
                                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <label for="id_courseName">Название курса:</label>
                                            <input type="text" className="form-control" id="id_courseName" name="id_courseName" value={item.courseName}
                                                placeholder="Название курса" />
                                        </div>
                                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <label for="id_organization">Проводившая организация:</label>
                                            <input type="text" className="form-control" id="id_organization" name="id_organization" value={item.organization}
                                                placeholder="Проводившая организация" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <label for="id_endingCourse">Год окончания:</label>
                                            <input type="date" className="form-control" id="id_endingCourse" name="id_endingCourse" value={item.endingCourse} />
                                        </div>
                                    </div>
                                </details>
                            </div>
                        )
                    }
                    else {
                        return (
                            <div>
                                <details id="courseDetails">
                                    <summary>Курс</summary>

                                    <div className="row">
                                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <label for="id_courseName">Название курса:</label>
                                            <input type="text" className="form-control" id="id_courseName" name="id_courseName" value=""
                                                placeholder="Название курса" />
                                        </div>
                                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <label for="id_organization">Проводившая организация:</label>
                                            <input type="text" className="form-control" id="id_organization" name="id_organization" value=""
                                                placeholder="Проводившая организация" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <label for="id_endingCourse">Год окончания:</label>
                                            <input type="date" className="form-control" id="id_endingCourse" name="id_endingCourse" value={item.endingCourse} />
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
export default ShowCourses;