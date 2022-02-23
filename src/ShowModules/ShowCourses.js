import React from 'react';

class ShowCourses extends React.Component {

    constructor(props) {
        super(props)
        this.input = React.createRef();
    }

    DeleteCourse(e) {
        let courseDetails = document.getElementById(e.target.parentNode.parentNode.id);
        courseDetails.parentNode.removeChild(courseDetails);
    }
    render() {

        let id_courseName = "id_courseName";
        let id_organization = "id_organization";
        let id_endingCourse = "id_endingCourse";
        let count = 0;

        let { arrayToDisplay } = this.props;
        console.dir(this.props);

        return (
            <div id="courseListUnit">
                {
                    arrayToDisplay.map((item) => {
                        console.log(item);
                        count++;
                        return (
                            <div>
                                <details id={"courseDetails" + count} open>
                                    <summary>Курс
                                        <a className='btn-add-del' id={"idDeleteCourse" + count} href="javascript:DeleteCourse(e)" name="delete" onClick={this.DeleteCourse} >Удалить</a>
                                    </summary>
                                    <div className="row">
                                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <label className="form-label" htmlFor="id_courseName">Наименование курса:</label>
                                            <input className="form-control" type="text"
                                                id={id_courseName + count}
                                                name="id_courseName" placeholder="Название курса"
                                                defaultValue={item.courseName}
                                                ref={this.input}
                                            />
                                        </div>
                                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <label className="form-label" htmlFor="id_organization">Проводившая организация:</label>
                                            <input className="form-control" type="text" id={id_organization + count} name="id_organization" defaultValue={item.organization}
                                                ref={this.input} placeholder="Проводившая организация" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <label className="form-label" htmlFor="id_endingCourse">Год окончания:</label>
                                            <input className="form-control" type="date" id={id_endingCourse + count} name="id_endingCourse" defaultValue={item.endingCourse} ref={this.input} />
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

export default ShowCourses;

