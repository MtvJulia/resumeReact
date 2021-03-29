function ShowLanguage(props) {

    let arrayToDisplay = props.arrayToDisplay;
    console.log("////////////////////////////////////////////////////");
    console.log(props);

    return (

        <div>
            {
                arrayToDisplay.map((item) => {
                    if(item.langName!=null)
                    {
                        return (
                            //откорректировать разметку div
                            <div>
                                <tr>
                                    <td>
                                        <h2>Владение языками</h2>
                                    </td>
                                </tr>
                                <tr>
                                    <td> <label className="control-label" for="id_langName">Язык:</label></td>
                                    <td className="col-sm-8">
                                        <input type="text" className="form-control" value={item.langName} id="id_langName" name="id_langName" placeholder="Введите язык" />
                                    </td>
                                </tr>
                                <tr>
                                    <td> <label className="control-label" for="id_level">Уровень владения:</label></td>
                                    <td className="col-sm-8">
                                        <select className="form-control" id="id_level" value={item.level} name="id_level">
                                            <option>A1 - начальный</option>
                                            <option>A2 - базовый</option>
                                            <option>B1 - средний</option>
                                            <option>B2 - выше среднего</option>
                                            <option>C1 - продвинутый</option>
                                            <option>C2 - профессиональный</option>
                                        </select>
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
                        <h2>Владение языками</h2>
                    </td>
                </tr>
                <tr>
                    <td> <label className="control-label" for="id_langName">Язык:</label></td>
                    <td className="col-sm-8">
                        <input type="text" className="form-control" id="id_langName" name="id_langName" placeholder="Введите язык" />
                    </td>
                </tr>
                <tr>
                    <td> <label className="control-label" for="id_level">Уровень владения:</label></td>
                    <td className="col-sm-8">
                        <select className="form-control" id="id_level" name="id_level">
                            <option>A1 - начальный</option>
                            <option>A2 - базовый</option>
                            <option>B1 - средний</option>
                            <option>B2 - выше среднего</option>
                            <option>C1 - продвинутый</option>
                            <option>C2 - профессиональный</option>
                        </select>
                    </td>
                </tr>

            </div>

        </div>

    );

}
export default ShowLanguage;
















