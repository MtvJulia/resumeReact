import React from 'react';

class ShowLanguage extends React.Component {

    constructor(props) {
        super(props)
        this.input = React.createRef();
    }

    DeleteLang(e) {
        let langDetails = document.getElementById(e.target.parentNode.parentNode.id);
        langDetails.parentNode.removeChild(langDetails);
    }

    render() {

        let id_langName = "id_langName";
        let id_level = "id_level";
        let count = 0;
        let { arrayToDisplay } = this.props;

        return (
            <div id="langListUnit">
                {
                    arrayToDisplay.map((item) => {
                        count++;

                        return (
                            <div>
                                <details id={"langDetails" + count} open>

                                    <summary>Язык
                                        <a className='btn-add-del' id={"idDeleteLang" + count} href="javascript:DeleteLang(e)" 
                                        name="delete" onClick={this.DeleteLang} >Удалить</a>
                                    </summary>

                                    <div className="row">
                                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <label className="form-label" htmlFor="id_langName">Язык:</label>
                                            <select className="form-select" id={id_langName + count} name="id_langName"
                                                defaultValue={item.langName}
                                                ref={this.input}
                                            >
                                                <option value="" disabled selected hidden>Выберите язык</option>
                                                <option value="1">Украинский</option>
                                                <option value="2">Русский</option>
                                                <option value="3">Английский</option>
                                                <option value="4">Китайский</option>
                                                <option value="5">Испанский</option>
                                                <option value="6">Польский</option>
                                                <option value="7">Немецкий</option>
                                                <option value="8">Французский</option>
                                                <option value="9">Итальянский</option>
                                                <option value="10">Португальский</option>
                                                <option value="11">Арабский</option>
                                                <option value="12">Хинди</option>
                                                <option value="13">Японский</option>
                                                <option value="14">Белорусский</option>
                                                <option value="15">Иврит</option>
                                                <option value="16">Турецкий</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <label className="form-label" htmlFor="id_level">Уровень владения:</label>
                                            <select className="form-select" id={id_level + count} name="id_level"
                                                defaultValue={item.level}
                                                ref={this.input}>
                                                <option value="" disabled selected hidden>Выберите уровень</option>
                                                <option value="1">A1 - начальный</option>
                                                <option value="2">A2 - базовый</option>
                                                <option value="3">B1 - средний</option>
                                                <option value="4">B2 - выше среднего</option>
                                                <option value="5">C1 - продвинутый</option>
                                                <option value="6">C2 - профессиональный</option>
                                            </select>
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

export default ShowLanguage;