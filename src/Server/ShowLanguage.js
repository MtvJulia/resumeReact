// function ShowLanguage(props) {

//     console.log(props);
//    // let arrayToDisplay = props.arrayToDisplay;
//     let { arrayToDisplay, setLangName, setLevel } = props;
//     console.log(props);

//     var id_langName="id_langName";    
//     var id_level="id_level";   
//      var count=0;
//     console.log("---------------------//////////////////--------------------------");
//     console.log(props);
// //    const DeleteLang = (event)=>
// //     {
// //         var langList = document.getElementById("langList");
// //         console.log(langList);
// //         var langDetails = document.getElementById(event.target.id).outerHTML;
// //         console.log(langDetails);
// //         langList.removeChild(langDetails); 

// //     }
  
//   if(arrayToDisplay.length != 0)
//     {
//         return (
//             <div>              
//                 {                     
//                     arrayToDisplay.map((item) => {
//                         count++;                        
//                         if (item.langName != null) {
//                             return (
//                                 //откорректировать разметку div
//                                 <div>
//                                     {/* <a id={"idDelete"+count} href="javascript:DeleteLang(e)" name = "delete" onClick={function(event){
//                                              var langList = document.getElementById("langList");
//                                              console.log(langList);
//                                              var langDetails = document.getElementById(event.target.id).outerHTML;
//                                              console.log(langDetails);
//                                              langList.removeChild(langDetails);                                  
//                                         }}>Удалить */}
//                                     <details id="langDetails" open>
//                                         <summary>Язык</summary>
                                        
//                                         <div className="row">
//                                             <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
//                                                 <label for="id_langName">Язык:</label>                                                  
//                                                 <input type="text" className="form-control" value={item.langName} id ={id_langName+count} onChange = {(event) => setLangName(event,event.target.id) }  
//                                                     name="id_langName" placeholder="Введите язык" />
//                                             </div>
//                                             <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
//                                                 <label for="id_level">Уровень владения:</label>
//                                                 <select className="form-control" id={id_level+count} name="id_level" value={item.level} onChange = {(event) => setLevel(event) }  >
//                                                     {/* // function(event)
//                                                     // {
//                                                     //     props.arrayToDisplay[count-1].level =  document.querySelector(`#${event.target.id}`).value;
//                                                     //     document.querySelector(`#${event.target.id}`).value = document.querySelector(`#${event.target.id}`).value ;                                                        
//                                                     //     console.log(document.getElementById(event.target.id).value);                                                      
//                                                     //     console.log( props.arrayToDisplay[count-1].level);
//                                                     //     console.log( props.arrayToDisplay[count-1].level);
//                                                     // }  */}
                                                                                                                                                                                                          
                                                                                                        
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
//                                     {/* </a> */}
//                                 </div>
//                             )                            
//                         } 
                                                                                     
//                     })
//                 }
//                  <div hidden>
                 
//                 <details id="langDetailsClear" open>
//                 <a id={"idDelete"+count} href="javascript:DeleteLang(e)" name = "delete" >Удалить  {/* onClick={DeleteLang()} */}                
//                     <summary>Язык</summary>
//                     <div className="row">
//                         <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
//                             <label for="id_langName">Язык:</label>
//                             <input type="text" className="form-control"  id="id_langName" name="id_langName"
//                                 placeholder="Введите язык" />
//                         </div>
//                         <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
//                             <label for="id_level">Уровень владения:</label>
//                             <select className="form-control" id="id_level" name="id_level"  >
//                                 <option disabled>Выберите уровень</option>
//                                 <option selected></option>
//                                 <option>A1 - начальный</option>
//                                 <option>A2 - базовый</option>
//                                 <option>B1 - средний</option>
//                                 <option>B2 - выше среднего</option>
//                                 <option>C1 - продвинутый</option>
//                                 <option>C2 - профессиональный</option>
//                             </select>
//                         </div>
//                     </div>
//                     </a>
//                 </details>
              
//             </div>
//             </div>
//         );
//     }
//     else {
//         return (            
//             <div>
//                 <details id="langDetails" open>
//                     <summary>Язык</summary>
//                     <div className="row">
//                         <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
//                             <label for="id_langName">Язык:</label>
//                             <input type="text" className="form-control"  id="id_langName" name="id_langName"
//                                 placeholder="Введите язык" />
//                         </div>
//                         <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
//                             <label for="id_level">Уровень владения:</label>
//                             <select className="form-control" id="id_level" name="id_level"  >
//                                 <option disabled>Выберите уровень</option>
//                                 <option selected></option>
//                                 <option>A1 - начальный</option>
//                                 <option>A2 - базовый</option>
//                                 <option>B1 - средний</option>
//                                 <option>B2 - выше среднего</option>
//                                 <option>C1 - продвинутый</option>
//                                 <option>C2 - профессиональный</option>
//                             </select>
//                         </div>
//                     </div>
//                 </details>
//             </div>
//         )
//     }  

// }

// export default ShowLanguage;

import React from 'react';

class ShowLanguage extends React.Component {

    constructor(props) {
        super(props)
        this.input = React.createRef()


        this.DeleteLang = this.DeleteLang.bind(this);
       
      }

      DeleteLang(e)
      {
        var langList = document.getElementById("langList");        
        var langDetails =document.getElementById(e.target.parentNode.id);
        console.log(langDetails);       
        langList.remove("beforeend", langDetails);
      }
     

    render() {
        
    var id_langName="id_langName";    
    var id_level="id_level";   
    var count=0;

    let { arrayToDisplay} = this.props;
       
    if(arrayToDisplay.length != 0)
    {
        return (
            <div>              
                {                     
                    arrayToDisplay.map((item) => {
                        count++;                        
                        if (item.langName != null) {
                            return (
                                //откорректировать разметку div
                                <div>                                   
                                    <details id="langDetails" open>
                                    {/* <a id={"idDelete"+count} href="javascript:DeleteLang(e)" name = "delete" > Удалить  onClick={DeleteLang()}</a> */}
                                        <summary>Язык</summary>
                                        
                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_langName">Язык:</label>                                                  
                                                <input type="text" className="form-control"
                                                    id ={id_langName+count}                                                                                                                                                                                          
                                                    name="id_langName" placeholder="Введите язык" 
                                                    defaultValue={item.langName}                                                   
                                                    ref={this.input}                                                
                                                                                                        
                                                    />
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_level">Уровень владения:</label>
                                                <select className="form-control" id={id_level+count} name="id_level" 
                                                 defaultValue={item.level}                                                   
                                                 ref={this.input}                                              
                                                
                                                >                                                                                                                                                                                                                                                                                                                                           
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
                                </div>
                            )                            
                        } 
                                                                                     
                    })
                }
                 <div hidden>                 
                <details id="langDetailsClear" open>
                < a id="id_btnDelete" href="javascript:DeleteLang(e)" name = "delete"  >Удалить  </a>               
                    <summary>Язык</summary>
                    <div className="row">
                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <label for="id_langName">Язык:</label>
                            <input type="text" className="form-control"  id="id_langName" name="id_langName"
                                placeholder="Введите язык" defaultValue ="" ref={this.input} />
                        </div>
                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <label for="id_level">Уровень владения:</label>
                            <select className="form-control" id="id_level" name="id_level" defaultValue ="" ref={this.input} >
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
              
            </div>
            </div>
        );
    }
    else {
        return (            
            <div>
                <details id="langDetails" open>
                    <summary>Язык</summary>
                    <div className="row">
                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <label for="id_langName">Язык:</label>
                            <input type="text" className="form-control"  id="id_langName" name="id_langName"
                                placeholder="Введите язык" defaultValue ="" ref={this.input} />
                        </div>
                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <label for="id_level">Уровень владения:</label>
                            <select className="form-control" id="id_level" name="id_level" defaultValue ="" ref={this.input}  >
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
            </div>
        )
    }  

}
    }

export default ShowLanguage;