import React from 'react';

class ShowExperience extends React.Component {

    constructor(props) {
        super(props)
        this.input = React.createRef();
        this.setStillWorking = this.setStillWorking.bind(this);
    }
    DeleteExperience(e) {
        let expDetails = document.getElementById(e.target.parentNode.parentNode.id);
        expDetails.parentNode.removeChild(expDetails);
    }
    setStillWorking(e) {
        let stillWorkingChB = document.getElementById(e.target.id);
        console.log(e.target.id);
        console.log(stillWorkingChB.checked);
        stillWorkingChB.checked = e.target.checked;
        console.log(stillWorkingChB.checked);
    }

    render() {

        let id_startWork = "id_startWork";
        let id_endWork = "id_endWork";
        let id_stillWorking = "id_stillWorking";
        let id_positionWork = "id_positionWork";
        let id_companyName = "id_companyName";
        let id_jobDuties_1 = "id_jobDuties_1";
        let count = 0;

        let { arrayToDisplay } = this.props;

        return (
            <div>
                {
                    arrayToDisplay.map((item) => {
                        count++;

                        console.log(item);
                        if (item.endWork != null) item.endWork = item.endWork.substr(0, 10);
                        else item.endWork = null;
                        return (
                            <div>
                                <details id={"experienceDetails" + count} open>
                                    <summary>Mесто работы
                                        <a className='btn-add-del' id={"idDeleteExperience" + count} href="javascript:DeleteExperience(e)" name="delete" onClick={this.DeleteExperience} >Удалить  </a>
                                    </summary>
                                    <div className="row">
                                        <div className="form-group col-12 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                            <label className="form-label" htmlFor="id_startWork">Начало работы:</label>
                                            <input className="form-control" type="date" id={id_startWork + count} name="id_startWork" defaultValue={item.startWork.substr(0, 10)} ref={this.input} />
                                        </div>
                                        <div className="form-group col-12 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                            <label className="form-label" htmlFor="id_endWork">Конец работы:</label>
                                            <input className="form-control" type="date" id={id_endWork + count} name="id_endWork" defaultValue={item.endWork} ref={this.input} />
                                        </div>
                                        <div className="form-group col-12 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                        <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id={id_stillWorking + count} checked={item.stillWorking} onChange={this.setStillWorking} name="id_stillWorking" ref={this.input} />
                                                <label className="form-check-label" htmlFor="id_stillWorking">Еще работаю</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <label className="form-label" htmlFor="id_positionWork">Должность:</label>
                                            <input className="form-control" type="text" id={id_positionWork + count} name="id_positionWork" defaultValue={item.positionWork}
                                                placeholder="Должность" ref={this.input} />
                                        </div>
                                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <label className="form-label" htmlFor="id_companyName">Название компании:</label>
                                            <input className="form-control" type="text" id={id_companyName + count} name="id_companyName" defaultValue={item.companyName}
                                                placeholder="Название компании" ref={this.input} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <label className="form-label" htmlFor="id_jobDuties_1">Обязанности:</label>
                                            <textarea className="form-control" id={id_jobDuties_1 + count} name="id_jobDuties" defaultValue={item.jobDuties} ref={this.input}></textarea>
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

export default ShowExperience;