function ShowLanguage(props) {

    let arrayToDisplay = props.arrayToDisplay;
    console.log("////////////////////////////////////////////////////");
    console.log(props);

    return (

        <div>
            {
                arrayToDisplay.map((item) => {
                    if (item.langName != null) {
                        return (
                            //откорректировать разметку div
                            <div>
                                <fieldset className="scheduler-border">
                                    <details id="langDetails">
                                        <summary>Язык</summary>
                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_langName">Язык:</label>
                                                <input type="text" className="form-control" value={item.langName} id="id_langName" name="id_langName"
                                                    placeholder="Введите язык" />
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_level">Уровень владения:</label>
                                                <select className="form-control" id="id_level" name="id_level" value={item.level} >
                                                    <option disabled>Выберите уровень</option>
                                                    <option selected></option>
                                                    <option>A1 - начальный</option>
                                                    <option>A2 - базовый</option>
                                                    <option>B1 - средний</option>
                                                    <option>B2 - выше среднего</option>
                                                    <option>C1 - продвинутый</option>
                                                    <option>C2 - профессиональный</option>
                                                </select>
                                            </div>
                                        </div>
                                    </details>
                                </fieldset>
                            </div>
                        )
                    }
                })
            }            
        </div>
    );

}

// function ShowLanguageEmpty() {
//     return (

//         <div>
//             {
//                 arrayToDisplay.map((item) => {
//                     if (item.langName != null) {
//                         return (
//                             //откорректировать разметку div
//                             <div>
//                                 <fieldset className="scheduler-border">
//                                     <details id="langDetailsEmpty">
//                                         <summary>Язык</summary>
//                                         <div className="row">
//                                             <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
//                                                 <label for="id_langName">Язык:</label>
//                                                 <input type="text" className="form-control" id="id_langName" name="id_langName"
//                                                     placeholder="Введите язык" />
//                                             </div>
//                                             <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
//                                                 <label for="id_level">Уровень владения:</label>
//                                                 <select className="form-control" id="id_level" name="id_level"  >
//                                                     <option disabled>Выберите уровень</option>
//                                                     <option selected></option>
//                                                     <option>A1 - начальный</option>
//                                                     <option>A2 - базовый</option>
//                                                     <option>B1 - средний</option>
//                                                     <option>B2 - выше среднего</option>
//                                                     <option>C1 - продвинутый</option>
//                                                     <option>C2 - профессиональный</option>
//                                                 </select>
//                                             </div>
//                                         </div>
//                                     </details>
//                                 </fieldset>
//                             </div>
//                         )
//                     }
//                 })
//             }

//         </div>
//     );

// }

//module.exports.ShowLanguageEmpty = ShowLanguageEmpty;
export default ShowLanguage ;
















