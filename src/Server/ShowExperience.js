import React from 'react';

class ShowExperience extends React.Component {

    constructor(props) {
        super(props)
        this.input = React.createRef()


        // this.DeleteExperience = this.DeleteExperience.bind(this);

    }

    //   DeleteExperience(e)
    //   {
    //     var experienceList = document.getElementById("experienceList");        
    //     var experienceDetails =document.getElementById(e.target.parentNode.id);
    //     console.log(experienceDetails);       
    //     experienceList.remove("beforeend", experienceDetails);
    //   }


    render() {

        var id_startWork = "id_startWork";
        var id_endWork = "id_endWork";
        var id_stillWorking = "id_stillWorking";
        var id_positionWork = "id_positionWork";
        var id_companyName = "id_companyName";
        var id_jobDuties_1 = "id_jobDuties_1";
        var count = 0;

        let { arrayToDisplay } = this.props;


        if (arrayToDisplay.length != 0) {
            return (
                <div>
                    {
                        arrayToDisplay.map((item) => {
                            count++;
                            if (item.endWork != null) {
                                return (

                                    <div>
                                        <details id="experienceDetails" open>
                                            <summary>Mесто работы</summary>

                                            <div className="row">
                                                <div className="form-group col-12 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                                    <label for="id_startWork">Начало работы:</label>
                                                    <input type="date" className="form-control" id={id_startWork+count} name="id_startWork" defaultValue={item.startWork.substr(0, 10)} ref={this.input} />
                                                </div>
                                                <div className="form-group col-12 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                                    <label for="id_endWork">Конец работы:</label>
                                                    <input type="date" className="form-control" id={id_endWork+count} name="id_endWork" defaultValue={item.endWork.substr(0, 10)} ref={this.input}/>
                                                </div>
                                                <div className="form-group col-12 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                                    <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id={id_stillWorking+count} className="custom-control-input" checked={0} name="id_stillWorking"ref={this.input} />
                                                        <label className="custom-control-label" for="id_stillWorking">Еще работаю</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                    <label for="id_positionWork">Должность:</label>
                                                    <input type="text" className="form-control" id={id_positionWork+count} name="id_positionWork" defaultValue={item.positionWork}
                                                        placeholder="Должность"ref={this.input} />
                                                </div>
                                                <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                    <label for="id_companyName">Название компании:</label>
                                                    <input type="text" className="form-control" id={id_companyName+count} name="id_companyName" defaultValue={item.companyName}
                                                        placeholder="Название компании"ref={this.input} />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="form-group col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <label for="id_jobDuties_1">Обязанности:</label>
                                                    <textarea className="form-control" id={id_jobDuties_1+count} name="id_jobDuties" defaultValue={item.jobDuties}ref={this.input}></textarea>
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
                                                    <input type="date" className="form-control" id={id_startWork+count} name="id_startWork" defaultValue={item.startWork.substr(0, 10)} ref={this.input}/>
                                                </div>
                                                <div className="form-group col-12 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                                    <label for="id_endWork">Конец работы:</label>
                                                    <input type="date" className="form-control" id={id_endWork+count} name="id_endWork" defaultValue={null} ref={this.input}/>
                                                </div>
                                                <div className="form-group col-12 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                                    <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                        <input type="checkbox" id={id_stillWorking+count} className="custom-control-input" checked={item.stillWorking} ref={this.input} name="id_stillWorking" />
                                                        <label className="custom-control-label" for="id_stillWorking">Еще работаю</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                    <label for="id_positionWork">Должность:</label>
                                                    <input type="text" className="form-control" id={id_positionWork+count} name="id_positionWork" defaultValue={item.positionWork}
                                                        placeholder="Должность"ref={this.input} />
                                                </div>
                                                <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                    <label for="id_companyName">Название компании:</label>
                                                    <input type="text" className="form-control" id={id_companyName+count} name="id_companyName" defaultValue={item.companyName}
                                                        placeholder="Название компании" ref={this.input}/>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="form-group col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <label for="id_jobDuties_1">Обязанности:</label>
                                                    <textarea className="form-control" id={id_jobDuties_1+count} name="id_jobDuties" defaultValue={item.jobDuties}ref={this.input}></textarea>
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
                                    <input type="date" className="form-control" id="id_startWork" name="id_startWork"defaultValue ="" ref={this.input} />
                                </div>
                                <div className="form-group col-12 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <label for="id_endWork">Конец работы:</label>
                                    <input type="date" className="form-control" id="id_endWork" name="id_endWork" defaultValue ="" ref={this.input}/>
                                </div>
                                <div className="form-group col-12 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                        <input type="checkbox" id="id_stillWorking" className="custom-control-input" name="id_stillWorking" defaultValue ="" ref={this.input}/>
                                        <label className="custom-control-label" for="id_stillWorking">Еще работаю</label>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <label for="id_positionWork">Должность:</label>
                                    <input type="text" className="form-control" id="id_positionWork" name="id_positionWork"
                                        placeholder="Должность"defaultValue ="" ref={this.input} />
                                </div>
                                <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <label for="id_companyName">Название компании:</label>
                                    <input type="text" className="form-control" id="id_companyName" name="id_companyName"
                                        placeholder="Название компании"defaultValue ="" ref={this.input} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <label for="id_jobDuties_1">Обязанности:</label>
                                    <textarea className="form-control" id="id_jobDuties_1" name="id_jobDuties"defaultValue ="" ref={this.input} ></textarea>
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
                                <input type="date" className="form-control" id="id_startWork" name="id_startWork"defaultValue ="" ref={this.input} />
                            </div>
                            <div className="form-group col-12 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <label for="id_endWork">Конец работы:</label>
                                <input type="date" className="form-control" id="id_endWork" name="id_endWork"defaultValue ="" ref={this.input} />
                            </div>
                            <div className="form-group col-12 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                    <input type="checkbox" id="id_stillWorking" className="custom-control-input" name="id_stillWorking" defaultValue ="" ref={this.input}/>
                                    <label className="custom-control-label" for="id_stillWorking">Еще работаю</label>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <label for="id_positionWork">Должность:</label>
                                <input type="text" className="form-control" id="id_positionWork" name="id_positionWork"
                                    placeholder="Должность"defaultValue ="" ref={this.input} />
                            </div>
                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <label for="id_companyName">Название компании:</label>
                                <input type="text" className="form-control" id="id_companyName" name="id_companyName"
                                    placeholder="Название компании"defaultValue ="" ref={this.input} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <label for="id_jobDuties_1">Обязанности:</label>
                                <textarea className="form-control" id="id_jobDuties_1" name="id_jobDuties" defaultValue ="" ref={this.input}></textarea>
                            </div>
                        </div>
                    </details>
                </div>
            )
        }

    }
}

export default ShowExperience;