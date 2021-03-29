function ShowRecommending(props) {

    let arrayToDisplay = props.arrayToDisplay;
    console.log("////////////////////////////////////////////////////");
    console.log(props);

    return (

        <div>
            {
                arrayToDisplay.map((item) => {
                    if(item.phoneCompany!= null )
                    {
                        return (
                            //откорректировать разметку div
                            <div>
                                <tr>
                                    <td>
                                        <h2>Рекомендации</h2>
                                    </td>
                                </tr>
                                <tr>
                                    <td> <label className="control-label" for="id_personRecommending">ФИО рекомендующего:</label></td>
                                    <td className="col-sm-8">
                                        <input type="text" className="form-control" id="id_personRecommending" value={item.personRecommending} name="id_personRecommending" placeholder="ФИО рекомендующего" />
                                    </td>
                                </tr>
                                <tr>
                                    <td> <label className="control-label" for="id_company">Компания, должность:</label></td>
                                    <td className="col-sm-8">
                                        <input type="text" className="form-control" id="id_company" value={item.company} name="id_company" placeholder="Компания, должность" />
                                    </td>
                                </tr>
                                <tr>
                                    <td> <label className="control-label" for="id_emailCompany">Электронная почта:</label></td>
                                    <td className="col-sm-8">
                                        <input type="email" className="form-control" id="id_emailCompany" value={item.emailCompany} name="id_emailCompany" placeholder="address@site.com" />
                                    </td>
                                </tr>
                                <tr>
                                    <td> <label className="control-label" for="id_phoneCompany">Телефон:</label></td>
                                    <td className="col-sm-8">
                                        <input type="" className="form-control" id="id_phoneCompany" value={item.phoneCompany} name="id_phoneCompany" placeholder="+380661234567" />
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
                        <h2>Рекомендации</h2>
                    </td>
                </tr>
                <tr>
                    <td> <label className="control-label" for="id_personRecommending">ФИО рекомендующего:</label></td>
                    <td className="col-sm-8">
                        <input type="text" className="form-control" id="id_personRecommending"  name="id_personRecommending" placeholder="ФИО рекомендующего" />
                    </td>
                </tr>
                <tr>
                    <td> <label className="control-label" for="id_company">Компания, должность:</label></td>
                    <td className="col-sm-8">
                        <input type="text" className="form-control" id="id_company"  name="id_company" placeholder="Компания, должность" />
                    </td>
                </tr>
                <tr>
                    <td> <label className="control-label" for="id_emailCompany">Электронная почта:</label></td>
                    <td className="col-sm-8">
                        <input type="email" className="form-control" id="id_emailCompany"  name="id_emailCompany" placeholder="address@site.com" />
                    </td>
                </tr>
                <tr>
                    <td> <label className="control-label" for="id_phoneCompany">Телефон:</label></td>
                    <td className="col-sm-8">
                        <input type="" className="form-control" id="id_phoneCompany"  name="id_phoneCompany" placeholder="+380661234567" />
                    </td>
                </tr>
            </div>

        </div>

    );

}
export default ShowRecommending;