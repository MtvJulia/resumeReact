import React from 'react';

class ShowRecommending extends React.Component {

    constructor(props) {
        super(props)
        this.input = React.createRef()

       // this.DeleteRecommending = this.DeleteRecommending.bind(this);
       
      }
      
    //   DeleteRecommending(e)
    //   {
    //     var recommendingList = document.getElementById("recommendingList");        
    //     var recommendingDetails = document.getElementById(e.target.parentNode.id);
    //     console.log(recommendingDetails);       
    //     recommendingList.remove("beforeend", recommendingDetails);
    //   }
     

      render() {
        
        var id_personRecommending="id_personRecommending";    
        var id_company="id_company";  
        var id_emailCompany="id_emailCompany";  
        var id_phoneCompany="id_phoneCompany";        
        var count=0;
    
        let { arrayToDisplay} = this.props;
    console.dir(this.props);
           
        if(arrayToDisplay.length != 0)
        {
            return (
                <div>              
                    {                     
                        arrayToDisplay.map((item) => {
                            console.log(item);
                            count++;                        
                            if (item.phoneCompany != null) {
                                return (
                                    //откорректировать разметку div
                                    <div>                                   
                                        <details id="recommendationDetails" open>
                                        <summary>Рекомендации</summary>
    
                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_personRecommending">ФИО рекомендующего:</label>
                                                <input type="text" className="form-control" id={id_personRecommending+count} defaultValue={item.personRecommending} ref={this.input} name="id_personRecommending" placeholder="ФИО рекомендующего" />
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_company">Компания, должность:</label>
                                                <input type="text" className="form-control" id={id_company+count} defaultValue={item.company} name="id_company" placeholder="Компания, должность"ref={this.input} />
                                            </div>
                                        </div>
    
                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_emailCompany">Электронная почта:</label>
                                                <input type="email" className="form-control" id={id_emailCompany+count} defaultValue={item.emailCompany} name="id_emailCompany" placeholder="address@site.com" ref={this.input}/>
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_phoneCompany">Телефон:</label>
                                                <input type="text" className="form-control" id={id_phoneCompany+count} defaultValue={item.phoneCompany} name="id_phoneCompany" placeholder="+380661234567"ref={this.input} />
                                            </div>
                                        </div>
                                    </details>                                 
                                    </div>
                                ) 
                            }
                        })
                    }
                    <div hidden>
                <details id="recommendationDetailsClear" open>
                    <summary>Рекомендации</summary>

                    <div className="row">
                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <label for="id_personRecommending">ФИО рекомендующего:</label>
                            <input type="text" className="form-control" id="id_personRecommending"  name="id_personRecommending" placeholder="ФИО рекомендующего"defaultValue ="" ref={this.input} />
                        </div>
                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <label for="id_company">Компания, должность:</label>
                            <input type="text" className="form-control" id="id_company"  name="id_company" placeholder="Компания, должность"defaultValue ="" ref={this.input} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <label for="id_emailCompany">Электронная почта:</label>
                            <input type="email" className="form-control" id="id_emailCompany"  name="id_emailCompany" placeholder="address@site.com"defaultValue ="" ref={this.input} />
                        </div>
                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <label for="id_phoneCompany">Телефон:</label>
                            <input type="text" className="form-control" id="id_phoneCompany"  name="id_phoneCompany" placeholder="+380661234567"defaultValue ="" ref={this.input} />
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
                     <details id="recommendationDetailsClear" open>
                    <summary>Рекомендации</summary>

                    <div className="row">
                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <label for="id_personRecommending">ФИО рекомендующего:</label>
                            <input type="text" className="form-control" id="id_personRecommending"  name="id_personRecommending" placeholder="ФИО рекомендующего"defaultValue ="" ref={this.input} />
                        </div>
                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <label for="id_company">Компания, должность:</label>
                            <input type="text" className="form-control" id="id_company"  name="id_company" placeholder="Компания, должность" defaultValue ="" ref={this.input}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <label for="id_emailCompany">Электронная почта:</label>
                            <input type="email" className="form-control" id="id_emailCompany"  name="id_emailCompany" placeholder="address@site.com"defaultValue ="" ref={this.input} />
                        </div>
                        <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <label for="id_phoneCompany">Телефон:</label>
                            <input type="text" className="form-control" id="id_phoneCompany"  name="id_phoneCompany" placeholder="+380661234567"defaultValue ="" ref={this.input} />
                        </div>
                    </div>
                </details>
                </div>
            )
        }  
    
    }
}
    
    export default ShowRecommending;