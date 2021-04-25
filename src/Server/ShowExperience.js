function ShowExperience(props) {

    let arrayToDisplay = props.arrayToDisplay;
    console.log("////////////////////////////////////////////////////");
    console.log(props);

    if (arrayToDisplay.length != 0) {
        return (

            <div>
                {
                    arrayToDisplay.map((item) => {
                        console.log(item.endWork);
                        if (item.endWork != "NULL") {
                            return (

                                <div>
                                    <details id="experienceDetails" open>
                                        <summary>Mесто работы</summary>

                                        <div className="row">
                                            <div className="form-group col-12 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                                <label for="id_startWork">Начало работы:</label>
                                                <input type="date" className="form-control" id="id_startWork" name="id_startWork" value={item.startWork.substr(0, 10)} />
                                            </div>
                                            <div className="form-group col-12 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                                <label for="id_endWork">Конец работы:</label>
                                                <input type="date" className="form-control" id="id_endWork" name="id_endWork" value={item.endWork.substr(0, 10)} />
                                            </div>
                                            <div className="form-group col-12 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_stillWorking" className="custom-control-input" checked={0} name="id_stillWorking" />
                                                    <label className="custom-control-label" for="id_stillWorking">Еще работаю</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_positionWork">Должность:</label>
                                                <input type="text" className="form-control" id="id_positionWork" name="id_positionWork" value={item.positionWork}
                                                    placeholder="Должность" />
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_companyName">Название компании:</label>
                                                <input type="text" className="form-control" id="id_companyName" name="id_companyName" value={item.companyName}
                                                    placeholder="Название компании" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="form-group col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <label for="id_jobDuties_1">Обязанности:</label>
                                                <textarea className="form-control" id="id_jobDuties_1" name="id_jobDuties" value={item.jobDuties}></textarea>
                                            </div>
                                        </div>
                                    </details>

                                </div>

                            )
                        }
                        else {
                            return (
                                <div>

                                    <details id="experienceDetails" open>
                                        <summary>Mесто работы</summary>

                                        <div className="row">
                                            <div className="form-group col-12 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                                <label for="id_startWork">Начало работы:</label>
                                                <input type="date" className="form-control" id="id_startWork" name="id_startWork" value={item.startWork.substr(0, 10)} />
                                            </div>
                                            <div className="form-group col-12 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                                <label for="id_endWork">Конец работы:</label>
                                                <input type="date" className="form-control" id="id_endWork" name="id_endWork" value={null} />
                                            </div>
                                            <div className="form-group col-12 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_stillWorking" className="custom-control-input" checked={item.stillWorking} name="id_stillWorking" />
                                                    <label className="custom-control-label" for="id_stillWorking">Еще работаю</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_positionWork">Должность:</label>
                                                <input type="text" className="form-control" id="id_positionWork" name="id_positionWork" value={item.positionWork}
                                                    placeholder="Должность" />
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_companyName">Название компании:</label>
                                                <input type="text" className="form-control" id="id_companyName" name="id_companyName" value={item.companyName}
                                                    placeholder="Название компании" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="form-group col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <label for="id_jobDuties_1">Обязанности:</label>
                                                <textarea className="form-control" id="id_jobDuties_1" name="id_jobDuties" value={item.jobDuties}></textarea>
                                            </div>
                                        </div>
                                    </details>

                                </div>

                            )
                        }
                    })
                }
                <div hidden>

                    <details id="experienceDetailsClear" open>
                        <summary>Mесто работы</summary>

                        <div className="row">
                            <div className="form-group col-12 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <label for="id_startWork">Начало работы:</label>
                                <input type="date" className="form-control" id="id_startWork" name="id_startWork" />
                            </div>
                            <div className="form-group col-12 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <label for="id_endWork">Конец работы:</label>
                                <input type="date" className="form-control" id="id_endWork" name="id_endWork" />
                            </div>
                            <div className="form-group col-12 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                    <input type="checkbox" id="id_stillWorking" className="custom-control-input" name="id_stillWorking" />
                                    <label className="custom-control-label" for="id_stillWorking">Еще работаю</label>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <label for="id_positionWork">Должность:</label>
                                <input type="text" className="form-control" id="id_positionWork" name="id_positionWork"
                                    placeholder="Должность" />
                            </div>
                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <label for="id_companyName">Название компании:</label>
                                <input type="text" className="form-control" id="id_companyName" name="id_companyName"
                                    placeholder="Название компании" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <label for="id_jobDuties_1">Обязанности:</label>
                                <textarea className="form-control" id="id_jobDuties_1" name="id_jobDuties" ></textarea>
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

                <details id="experienceDetailsClear" open>
                    <summary>Mесто работы</summary>

                    <div className="row">
                        <div className="form-group col-12 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <label for="id_startWork">Начало работы:</label>
                            <input type="date" className="form-control" id="id_startWork" name="id_startWork" />
                        </div>
                        <div className="form-group col-12 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <label for="id_endWork">Конец работы:</label>
                            <input type="date" className="form-control" id="id_endWork" name="id_endWork" />
                        </div>
                        <div className="form-group col-12 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                <input type="checkbox" id="id_stillWorking" className="custom-control-input" name="id_stillWorking" />
                                <label className="custom-control-label" for="id_stillWorking">Еще работаю</label>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <label for="id_positionWork">Должность:</label>
                            <input type="text" className="form-control" id="id_positionWork" name="id_positionWork"
                                placeholder="Должность" />
                        </div>
                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <label for="id_companyName">Название компании:</label>
                            <input type="text" className="form-control" id="id_companyName" name="id_companyName"
                                placeholder="Название компании" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-group col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <label for="id_jobDuties_1">Обязанности:</label>
                            <textarea className="form-control" id="id_jobDuties_1" name="id_jobDuties" ></textarea>
                        </div>
                    </div>
                </details>

            </div>

        )



    }


}
export default ShowExperience;