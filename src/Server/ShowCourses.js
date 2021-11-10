import React from 'react';

class ShowCourses extends React.Component {

    constructor(props) {
        super(props)
        this.input = React.createRef()

       // this.DeleteCourse = this.DeleteCourse.bind(this);
       
      }
      
    //   DeleteCourse(e)
    //   {
    //     var courseList = document.getElementById("courseList");        
    //     var courseDetails = document.getElementById(e.target.parentNode.id);
    //     console.log(courseDetails);       
    //     courseList.remove("beforeend", courseDetails);
    //   }
     

      render() {
        
        var id_courseName="id_courseName";    
        var id_organization="id_organization";  
        var id_endingCourse="id_endingCourse";   
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
                            if (item.courseName != null) {
                                return (
                                    //откорректировать разметку div
                                    <div>                                   
                                        <details id="courseDetails" open>
                                        
                                            <summary>Курс</summary>
                                            
                                            <div className="row">
                                                <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                    <label for="id_courseName">Курс:</label>                                                  
                                                    <input type="text" className="form-control"
                                                        id ={id_courseName+count}                                                                                                                                                                                          
                                                        name="id_courseName" placeholder="Название курса" 
                                                        defaultValue={item.courseName}                                                   
                                                        ref={this.input}                                                                                                                                               
                                                        />
                                                </div>
                                                <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                 <label for="id_organization">Проводившая организация:</label>
                                                <input type="text" className="form-control" id={id_organization+count} name="id_organization" defaultValue={item.organization}
                                                   ref={this.input}   placeholder="Проводившая организация" />
                                                </div>                                                                 
                                            </div>
                                            <div className="row">
                                             <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                 <label for="id_endingCourse">Год окончания:</label>
                                                 <input type="date" className="form-control" id={id_endingCourse+count} name="id_endingCourse" defaultValue={item.endingCourse}  ref={this.input}/>
                                             </div>
                                         </div>
                                        </details>                                    
                                    </div>
                                ) 
                            }
                        })
                    }
                     <div hidden>                 
                    <details id="courseDetailsClear" open>                   
                        <summary>Курс</summary>
                        <div className="row">
                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <label for="id_courseName">Название курса:</label>                               
                                    <input type="text" className="form-control" id="id_courseName" name="id_courseName" 
                                    placeholder="Название курса"  defaultValue ="" ref={this.input} />
                            </div>
                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                 <label for="id_organization">Проводившая организация:</label>
                                 <input type="text" className="form-control" id="id_organization" name="id_organization"
                                    placeholder="Проводившая организация"defaultValue ="" ref={this.input} />
                             </div>
                         </div>
                         <div className="row">
                             <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                 <label for="id_endingCourse">Год окончания:</label>
                                 <input type="date" className="form-control" id="id_endingCourse" name="id_endingCourse" defaultValue ="" ref={this.input}  />
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
                    <details id="courseDetails" open>
                        <summary>Курс</summary>
                <div className="row">
                <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                     <label for="id_courseName">Название курса:</label>
                    <input type="text" className="form-control" id="id_courseName" name="id_courseName" 
                         placeholder="Название курса" defaultValue ="" ref={this.input} />
                 </div>
                 <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                     <label for="id_organization">Проводившая организация:</label>
                     <input type="text" className="form-control" id="id_organization" name="id_organization" 
                         placeholder="Проводившая организация"defaultValue ="" ref={this.input}  />
                 </div>
             </div>
             <div className="row">
                 <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                     <label for="id_endingCourse">Год окончания:</label>
                     <input type="date" className="form-control" id="id_endingCourse" name="id_endingCourse" defaultValue ="" ref={this.input}  />
                 </div>
             </div>

                    </details>
                </div>
            )
        }  
    
    }
}

    
export default ShowCourses;
    
    
   
