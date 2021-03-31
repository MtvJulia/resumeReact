function ShowRecommending(props) {

    let arrayToDisplay = props.arrayToDisplay;
    console.log("////////////////////////////////////////////////////");
    console.log(props);

    return (

        <div>
            {
                arrayToDisplay.map((item) => {
                    if (item.phoneCompany != null) {
                        return (
                            //откорректировать разметку div
                            <div>
                                <details id="recommendationDetails" open>
                                    <summary>Рекомендации</summary>

                                    <div className="row">
                                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <label for="id_personRecommending">ФИО рекомендующего:</label>
                                            <input type="text" className="form-control" id="id_personRecommending" value={item.personRecommending} name="id_personRecommending" placeholder="ФИО рекомендующего" />
                                        </div>
                                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <label for="id_company">Компания, должность:</label>
                                            <input type="text" className="form-control" id="id_company" value={item.company} name="id_company" placeholder="Компания, должность" />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <label for="id_emailCompany">Электронная почта:</label>
                                            <input type="email" className="form-control" id="id_emailCompany" value={item.emailCompany} name="id_emailCompany" placeholder="address@site.com" />
                                        </div>
                                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <label for="id_phoneCompany">Телефон:</label>
                                            <input type="text" className="form-control" id="id_phoneCompany" value={item.phoneCompany} name="id_phoneCompany" placeholder="+380661234567" />
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
export default ShowRecommending;