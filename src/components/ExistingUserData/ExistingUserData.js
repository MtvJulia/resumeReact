import React from 'react';
import axios from 'axios';
import '../ExistingUserData/ExistingUserData.css';
import ShowExperience from '../../Server/ShowExperience';
import ShowEducation from '../../Server/ShowEducation';
import ShowLanguage from '../../Server/ShowLanguage';
import ShowCourses from '../../Server/ShowCourses';
import AddLanguage from '../../Server/AddLanguage';
import ShowRecommending from '../../Server/ShowRecommending';
import { Switch } from 'react-router';
import UploadPhoto from '../../images/uploadPhoto.jpg';
//import photo from '../../Server/uploads/b7d665163bafa75592e3ee515be4a021';


class ExistingUserData extends React.Component {
    constructor(props) {
        super(props);
        //Начальное состояние состояния (state)
        this.state = {
            items: null
        }
        this.API_ADDRESS = "http://localhost:55555/existinguserdata";
        this.API_ADDRESS_FILE = "http://localhost:55555/file";
        this.changeData = this.changeData.bind(this);
        this.expArray = [];
        this.educArray = [];
        this.langArray = [];
        this.coursArray = [];
        this.recomendationArray = [];
        
        this.currencyName = "";
        this.imageBase64="";    


        //------------------------------------------
        this.id_langName="id_langName";    
        this.id_level="id_level";   
        this.count=0; 
        this.countLang=100; 
        this.imageFromDB="";              
         //--------------------------------------------------------

        this.fillExpArr = this.fillExpArr.bind(this);
        this.fillEducArr = this.fillEducArr.bind(this);
        this.fillLangArr = this.fillLangArr.bind(this);
        this.fillCoursArr = this.fillCoursArr.bind(this);
        this.fillRecomendArr = this.fillRecomendArr.bind(this);
        this.fillDriveLicenseObj = this.fillDriveLicenseObj.bind(this);
        this.getCurrency = this.getCurrency.bind(this);
        this.AddLang = this.AddLang.bind(this);
        this.AddScheduler = this.AddScheduler.bind(this);
        this.AddCourse = this.AddCourse.bind(this);
        this.AddExperience = this.AddExperience.bind(this);
        this.AddRecommendation = this.AddRecommendation.bind(this);
        this.setFirstName = this.setFirstName.bind(this);
        this.setPositions = this.setPositions.bind(this);
        this.setLastName = this.setLastName.bind(this);
        this.setMiddleName = this.setMiddleName.bind(this);
        this.setBirthOfDate = this.setBirthOfDate.bind(this);
        this.setCityOfResidence = this.setCityOfResidence.bind(this);
        this.setPhone = this.setPhone.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setNationality = this.setNationality.bind(this);
        this.setDesiredSalary = this.setDesiredSalary.bind(this);
        this.setCurrencyName = this.setCurrencyName.bind(this);
        this.setEmployment = this.setEmployment.bind(this);
        this.setSchedule = this.setSchedule.bind(this);
        this.setBusinessTrip = this.setBusinessTrip.bind(this);
        this.setRelocate = this.setRelocate.bind(this);
        this.setMaritalStatus = this.setMaritalStatus.bind(this);
        this.setChildren = this.setChildren.bind(this);
        this.setEducation = this.setEducation.bind(this);
        this.setPrivateСar = this.setPrivateСar.bind(this);
        this.setArmy = this.setArmy.bind(this);
        this.setHobby = this.setHobby.bind(this);
        this.setPersonalQualities = this.setPersonalQualities.bind(this);
        this.setProfessionalSkills = this.setProfessionalSkills.bind(this);        
        this.onFileSelected = this.onFileSelected.bind(this);    
        this.setDriveLicenseA1 = this.setDriveLicenseA1.bind(this);
        this.setDriveLicenseA = this.setDriveLicenseA.bind(this);
        this.setDriveLicenseB1 = this.setDriveLicenseB1.bind(this);
        this.setDriveLicenseB = this.setDriveLicenseB.bind(this);
        this.setDriveLicenseC1 = this.setDriveLicenseC1.bind(this);
        this.setDriveLicenseC = this.setDriveLicenseC.bind(this);
        this.setDriveLicenseD1 = this.setDriveLicenseD1.bind(this);
        this.setDriveLicenseD = this.setDriveLicenseD.bind(this);
        this.setDriveLicenseT = this.setDriveLicenseT.bind(this);     
    }
    
       
    getCurrency(data, currency) {

        switch (data.currency) {
            case "Гривна":
                {
                    currency = "₴ - гривна";
                    break;
                }
            case "Доллар США":
                {
                    currency = "$ - доллар";
                    break;
                }
            case "Евро":
                {
                    currency = "€ - евро";
                    break;
                }
            case "Рубли":
                {
                    currency = "₽ - рубль";
                    break;
                }
            case "Фунт стерлингов":
                {
                    currency = "£ - фунты";
                    break;
                }
            case "Юань":
                {
                    currency = "¥ - юань";
                    break;
                }
            case "Другая":
                {
                    currency = "другая валюта";
                    break;
                }
        }
        return currency;
    }

    fillDriveLicenseObj(data) {
        for (let i = 0; i < data.driverLicense.length; i++) {
            switch (data.driverLicense[i]) {
                case "A1":
                    {
                        data.driverLicense.A1 = 1;
                        document.getElementById('id_driverLicenseA1').checked=data.driverLicense.A1;
                        break;
                    }
                case "A":
                    {
                        data.driverLicense.A = 1;
                        document.getElementById('id_driverLicenseA').checked=data.driverLicense.A;
                        break;
                    }
                case "B1":
                    {
                        data.driverLicense.B1 = 1;
                        document.getElementById('id_driverLicenseB1').checked=data.driverLicense.B1;
                        break;
                    }
                case "B":
                    {                      
                        data.driverLicense.B = 1; 
                        document.getElementById('id_driverLicenseB').checked=data.driverLicense.B;                       
                        break;
                    }
                case "C1":
                    {
                        data.driverLicense.C1 = 1;
                        document.getElementById('id_driverLicenseC1').checked=data.driverLicense.C1;
                        break;
                    }
                case "C":
                    {
                        data.driverLicense.C = 1;
                        document.getElementById('id_driverLicenseC').checked=data.driverLicense.C;
                        break;
                    }
                case "D1":
                    {
                        data.driverLicense.D1 = 1;
                        document.getElementById('id_driverLicenseD1').checked=data.driverLicense.D1;
                        break;
                    }
                case "D":
                    {
                        data.driverLicense.D = 1;
                        document.getElementById('id_driverLicenseD').checked=data.driverLicense.D;
                        break;
                    }
                case "T":
                    {
                        data.driverLicense.T = 1;
                        document.getElementById('id_driverLicenseT').checked=data.driverLicense.T;
                        break;
                    }
            }
        }
    }


    fillCoursArr(data, coursArr) {

        for (let i = 0; i < data.courseName.length; i++) {
            if (data.courseName[i] != "NULL"&&data.organization[i]!="NULL") 
            {
                var objCourses = {};

                objCourses.courseName = data.courseName[i];
                objCourses.organization = data.organization[i];
                objCourses.endingCourse = data.endingCourse[i];

                coursArr.push(objCourses);
            }
        }      
    }
    fillRecomendArr(data, recomendArr) {

        for (let i = 0; i < data.phoneCompany.length; i++) {
            if (data.phoneCompany[i]!="NULL") // data.company[i]!="NULL" && 
            {
                var objRecomendation = {};

                objRecomendation.personRecommending = data.personRecommending[i];
                if(data.company!=null) {objRecomendation.company = data.company[i];}                
                if(data.emailCompany!=null)  objRecomendation.emailCompany = data.emailCompany[i];
                objRecomendation.phoneCompany = data.phoneCompany[i];
    
                recomendArr.push(objRecomendation);
            }           
        }
    }

    fillLangArr(data, langArr) {
        for (let i = 0; i < data.langName.length; i++) {

            if (data.langName[i] != "NULL" && data.level[i]!="NULL") 
            {
                var objLanguage = {};

                objLanguage.langName = data.langName[i];
                switch (data.level[i]) {
                    case "1":
                        {
                            objLanguage.level = "A1 - начальный";
                            break;
                        }
                    case "2":
                        {
                            objLanguage.level = "A2 - базовый";
                            break;
                        }
                    case "3":
                        {
                            objLanguage.level = "B1 - средний";
                            break;
                        }
                    case "4":
                        {
                            objLanguage.level = "B2 - выше среднего";
                            break;
                        }
                    case "5":
                        {
                            objLanguage.level = "C1 - продвинутый";
                            break;
                        }
                    case "6":
                        {
                            objLanguage.level = "C2 - профессиональный";
                            break;
                        }
                    case "7":
                        {
                            objLanguage.level = "A1 - начальный";
                            break;
                        }
    
                }
                langArr.push(objLanguage);
            }           
        }
    }

    fillEducArr(data, educArr) {
        if (data.institutName != null) {
            for (let i = 0; i < data.institutName.length; i++) {
                if (data.institutName[i] != "NULL" && data.specialty[i]!="NULL"){
                    var objEducation = {};

                objEducation.institutName = data.institutName[i];
                objEducation.levelEducation = data.levelEducation[i];
                objEducation.faculty = data.faculty[i];
                objEducation.specialty = data.specialty[i];
                objEducation.ending = data.ending[i];

                educArr.push(objEducation);

                }                
            }
        }
    }

    fillExpArr(data, expArr) {
        if (data.companyName != null) {
            for (let i = 0; i < data.companyName.length; i++) {
                if (data.companyName[i] != "NULL" && data.positionWork[i]!="NULL")
                {
                    var objExperience = {};

                    objExperience.startWork = data.startWork[i];
                    objExperience.endWork = data.endWork[i];
                    objExperience.stillWorking = data.stillWorking;
                    objExperience.positionWork = data.positionWork[i];
                    objExperience.companyName = data.companyName[i];
                    objExperience.jobDuties = data.jobDuties[i];
    
                    expArr.push(objExperience);

                }               
            }
        }
    }
    changeData(data) {

        if (data[0].endingCourse == null) {
            data[0].endingCourse = "";
        }
        data[0].positionWork = data[0].positionWork.split("~");

    }
    AddLang() {
        var langList = document.getElementById("langList");                 
                 
        console.log(langList);          
      //  console.log(langDetails);   
             
      
        document.getElementById('langAddDetails').childNodes.id = "idDelete" + this.countLang; 
        console.log( document.getElementById('langAddDetails').childNodes.id);
        var langDetails = document.getElementById('langAddDetails').outerHTML; 
        langList.insertAdjacentHTML("beforeend", langDetails);  
       
        this.countLang++;
       
        console.log( this.countLang); 

    }
    AddScheduler() {
        var educationList = document.getElementById("educationList");
        var educationDatails = document.getElementById('educationDatailsClear').outerHTML;
        educationList.insertAdjacentHTML("beforeend", educationDatails);
    }
    AddCourse() {
        var courseList = document.getElementById("courseList");
        var courseDetailsClear = document.getElementById('courseDetailsClear').outerHTML;               
        courseList.insertAdjacentHTML("beforeend", courseDetailsClear);
    }
    AddExperience() {
        var experienceList = document.getElementById("experienceList");
        var experienceDetails = document.getElementById('experienceDetailsClear').outerHTML;
        experienceList.insertAdjacentHTML("beforeend", experienceDetails);
    }
    AddRecommendation() {
        var recommendationList = document.getElementById("recommendationList");
        var recommendationDetails = document.getElementById('recommendationDetailsClear').outerHTML;
        recommendationList.insertAdjacentHTML("beforeend", recommendationDetails);
    }
   

    onFileSelected(event) {       
        ////загрузка картинки на форму
        var selectedFile = event.target.files[0];

        var reader = new FileReader();

        var imgtag = document.getElementById("myimage");
        imgtag.title = selectedFile.name;

        reader.onload = function (event) {
            imgtag.src = event.target.result;
        };
        if (imgtag) {
            reader.readAsDataURL(selectedFile);
        }

        this.setState(Object.assign(this.state.items, { image: event.target.files[0], loaded: 0 }));

        console.log(selectedFile);

      }

    setFirstName(event){ this.setState(Object.assign(this.state.items,{ firstName:event.target.value})); }
    setPositions(event){ this.setState(Object.assign(this.state.items,{ position:event.target.value})); }  
    setLastName(event){ this.setState(Object.assign(this.state.items,{ lastName:event.target.value})); } 
    setMiddleName(event){ this.setState(Object.assign(this.state.items,{ middleName:event.target.value})); }
    setBirthOfDate(event){ this.setState(Object.assign(this.state.items,{ birthOfDate:event.target.value})); }
    setCityOfResidence(event){ this.setState(Object.assign(this.state.items,{сityOfResidence:event.target.value})); }
    setPhone(event){ this.setState(Object.assign(this.state.items,{ phone:event.target.value})); }
    setEmail(event){ this.setState(Object.assign(this.state.items,{ email:event.target.value})); }
    setNationality(event){ this.setState(Object.assign(this.state.items,{ nationality:event.target.value})); }
    setDesiredSalary(event){ this.setState(Object.assign(this.state.items,{ desiredSalary:event.target.value})); }
    setCurrencyName(event){ this.setState(Object.assign(this.state.items,{ currency:event.target.value})); }
    setEmployment(event){ this.setState(Object.assign(this.state.items,{ employment:event.target.value})); }
    setSchedule(event){ this.setState(Object.assign(this.state.items,{ schedule:event.target.value})); }
    setBusinessTrip(event){ this.setState(Object.assign(this.state.items,{ businessTrip:event.target.checked})); }
    setRelocate(event){ this.setState(Object.assign(this.state.items,{ relocate:event.target.checked})); }
    setMaritalStatus(event){ this.setState(Object.assign(this.state.items,{ maritalStatus:event.target.value})); }
    setChildren(event){ this.setState(Object.assign(this.state.items,{ children:event.target.checked})); }
    setEducation(event){ this.setState(Object.assign(this.state.items,{ education:event.target.value})); }  
    setPrivateСar(event){ this.setState(Object.assign(this.state.items,{ privateСar: event.target.checked})); }
    setArmy(event){ this.setState(Object.assign(this.state.items,{ army:event.target.checked})); }
    setHobby(event){ this.setState(Object.assign(this.state.items,{ hobby:event.target.value})); }
    setPersonalQualities(event){ this.setState(Object.assign(this.state.items,{ personalQualities:event.target.value})); }
    setProfessionalSkills(event){ this.setState(Object.assign(this.state.items,{ professionalSkills:event.target.value})); }
    setDriveLicenseA1(event){if(this.state.items.driverLicense!=undefined){this.setState(Object.assign(this.state.items.driverLicense,{ A1:event.target.checked}));}}
    setDriveLicenseA(event){if(this.state.items.driverLicense!=undefined){this.setState(Object.assign(this.state.items.driverLicense,{ A:event.target.checked}));}}
    setDriveLicenseB1(event){if(this.state.items.driverLicense!=undefined){this.setState(Object.assign(this.state.items.driverLicense,{ B1:event.target.checked}));}}
    setDriveLicenseB(event){if(this.state.items.driverLicense!=undefined){this.setState(Object.assign(this.state.items.driverLicense,{ B:event.target.checked}));}}
    setDriveLicenseC1(event){if(this.state.items.driverLicense!=undefined){this.setState(Object.assign(this.state.items.driverLicense,{ C1:event.target.checked}));}}
    setDriveLicenseC(event){if(this.state.items.driverLicense!=undefined){this.setState(Object.assign(this.state.items.driverLicense,{ C:event.target.checked}));}}
    setDriveLicenseD1(event){if(this.state.items.driverLicense!=undefined){this.setState(Object.assign(this.state.items.driverLicense,{ D1:event.target.checked}));}}
    setDriveLicenseD(event){if(this.state.items.driverLicense!=undefined){this.setState(Object.assign(this.state.items.driverLicense,{ D:event.target.checked}));}}
    setDriveLicenseT(event){if(this.state.items.driverLicense!=undefined){this.setState(Object.assign(this.state.items.driverLicense,{ T:event.target.checked}));} }








    componentDidMount() {

        fetch(this.API_ADDRESS)
            .then((response) => response.json())
            .then((data) => {
                console.log("DATA ::::::::::::::::::::  "+data);
                console.log(data[0]);
               // data = data[0]; //переводим в объект                
               

                let expArr = [];
                let educArr = [];
                let langArr = [];
                let coursArr = [];
                let recomendArr = [];               
                let currency = "";
             
              if(data.file){               
                let fileFromDB = new Buffer.from(data.file).toString("base64");
                this.imageFromDB = "data:image/png;base64," + fileFromDB;
                 }
               else{
                this.imageFromDB = UploadPhoto;
               }
                   console.dir(data.file);
                //   console.dir( this.imageFromDB);
                                 
            if(data.companyName != null) this.fillExpArr(data, expArr);
            if(data.institutName != null) this.fillEducArr(data, educArr);
            if(data.langName != null)  this.fillLangArr(data, langArr);
            if (data.courseName != null)this.fillCoursArr(data, coursArr);               
            if (data.phoneCompany != null)this.fillRecomendArr(data, recomendArr);             
            if (data.driverLicense != null)this.fillDriveLicenseObj(data); 
                     

                this.expArray = expArr;
                this.educArray = educArr;
                this.langArray = langArr;
                console.log(this.langArray);
                this.coursArray = coursArr;
                console.log(this.coursArray);
                this.recomendationArray = recomendArr;              
                this.currencyName = this.getCurrency(data, currency);
               

               if(data.birthOfDate == undefined)
               {
                data.birthOfDate=''; 
               }

                this.setState({
                    items: data                    
                });
                console.dir(this.state.items);
                // if(this.state.items.driverLicense==undefined)
                // {
                //  this.setState(Object.assign(this.state.items.driverLicense,{A1: 0}));
                //  this.setState(Object.assign(this.state.items.driverLicense,{A: 0}));
                //  this.setState(Object.assign(this.state.items.driverLicense,{B1: 0}));
                //  this.setState(Object.assign(this.state.items.driverLicense,{B: 0}));
                //  this.setState(Object.assign(this.state.items.driverLicense,{C1: 0}));
                //  this.setState(Object.assign(this.state.items.driverLicense,{C: 0}));
                //  this.setState(Object.assign(this.state.items.driverLicense,{D1: 0}));
                //  this.setState(Object.assign(this.state.items.driverLicense,{D: 0}));
                //  this.setState(Object.assign(this.state.items.driverLicense,{T: 0}));
                // }
               
               this.setState(Object.assign(this.state.items,{ currency: this.currencyName}));
               console.dir(this.state.items.currency);
            });
    }

    
    render() {      
        if (this.state.items == null) {
            return (
                <div className="d-flex justify-content-center spin">
                    <div className="spinner-border  text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>                    
                </div>
            );
        }
        else {
          
            return (
                <div className="container-fluid mainUserData">

                    <div className="container-fluid ">
                        {/* <!-- First container --> */}
                        <div className="divData col-md-6 ">
                            <div>
                                <form action="http://localhost:55555/existinguserdata" method="POST" encType="multipart/form-data">

                                    {/* <!-- -------ОСНОВНАЯ ИНФО----------- --> */}
                                    <fieldset className="form-group p-3">
                                        <legend className="w-auto px-2">
                                            <h3>Основная информация</h3>
                                        </legend>

                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_userPosition">Желаемая должность:</label>
                                                <input id="id_userPosition" type="text" className="form-control" value={this.state.items.position} onChange={this.setPositions} name="id_userPosition"
                                                    placeholder="Введите должность" />
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_lastName">Фамилия:</label>
                                                <input id="id_lastName" type="text" className="form-control" name="id_lastName" value={this.state.items.lastName} onChange={this.setLastName} placeholder="Введите фамилию" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12"> 
                                                <div className="userPhoto">
                                                    <label>
                                                        <img className="avatar"  src={ this.imageFromDB} alt="Нажмите для выбора файла" id="myimage" />
                                                        <input 
                                                        accept="image/*"
                                                        type="file"                                                          
                                                        name="fupload" 
                                                        onChange={this.onFileSelected }  />
                                                    </label>                                                                                                                                                     
                                                </div>
                                            </div>

                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_firstName">Имя:</label>
                                                <input type="text" className="form-control" id="id_firstName" onChange = {this.setFirstName} name="id_firstName" value={this.state.items.firstName} placeholder="Введите имя" />
                                                <label for="id_middleName">Отчество:</label>
                                                <input type="text" className="form-control" id="id_middleName" name="id_middleName" value={this.state.items.middleName} onChange = {this.setMiddleName}
                                                    placeholder="Введите отчество" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_birthOfDate">Дата рождения:</label>
                                                <input type="date" className="form-control" id="id_birthOfDate" value={this.state.items.birthOfDate.substr(0, 10)} onChange = {this.setBirthOfDate} name="id_birthOfDate" />
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_cityOfResidence">Город проживания:</label>
                                                <input type="text" className="form-control" id="id_cityOfResidence" name="id_cityOfResidence" value={this.state.items.сityOfResidence} onChange = {this.setCityOfResidence}
                                                    placeholder="Введите город" />
                                            </div>
                                        </div>
                                    </fieldset>
                                    {/* <!-- -------КОНТАКТЫ----------- --> */}
                                    <fieldset className="scheduler-border">
                                        <legend className="scheduler-border">
                                            <h3>Контакты</h3>
                                        </legend>

                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_phone">Телефон:</label>
                                                <input type="text" className="form-control" id="id_phone" name="id_phone" value={this.state.items.phone}  onChange = {this.setPhone} placeholder="+380661234567" />
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_email">Электронная почта:</label>
                                                <input type="email" className="form-control" id="id_email" name="id_email" value={this.state.items.email}  onChange = {this.setEmail}
                                                    placeholder="address@site.com" />
                                            </div>
                                        </div>
                                    </fieldset>
                                    {/* <!-- -------ЛИЧНАЯ ИНФО----------- --> */}
                                    <fieldset className="scheduler-border">
                                        <legend className="scheduler-border">
                                            <h3>Личная информация</h3>
                                        </legend>
                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_nationality">Национальность:</label>
                                                <input type="text" className="form-control" id="id_nationality" name="id_nationality" value={this.state.items.nationality} onChange = {this.setNationality}
                                                    placeholder="Введите национальность" />
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_desiredSalary">Желаемая зарплата:</label>

                                                <div className="input-group mb-2">
                                                    <input type="number" className="form-control" id="id_desiredSalary" name="id_desiredSalary" value={this.state.items.desiredSalary} onChange = {this.setDesiredSalary} placeholder="0"
                                                        step="1" min="0" />
                                                    <div className="input-group-append">
                                                        <select className="form-control" id="id_currency" name="id_currency" onChange = {this.setCurrencyName} value={this.state.items.currency}>
                                                            <option  value="1">₴ - гривна</option>
                                                            <option  value="2">$ - доллар</option>
                                                            <option value="3">€ - евро</option>
                                                            <option value="4">₽ - рубль</option>
                                                            <option value="5">£ - фунты</option>
                                                            <option value="6">¥ - юань</option>
                                                            <option value="7">другая валюта</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_employment">Занятось:</label>
                                                <select className="form-control" id="id_employment" name="id_employment" placeholder="выбрать" value={this.state.items.employment} onChange = {this.setEmployment}>
                                                    <option value="1">Полная занятость</option>
                                                    <option  value="2">Частичная занятость</option>
                                                    <option  value="3">Проектная работа</option>
                                                    <option  value="4">Волонтерство</option>
                                                    <option  value="5">Стажировка</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_schedule">График работы:</label>
                                                <select className="form-control" id="id_schedule" name="id_schedule" value={this.state.items.schedule} onChange = {this.setSchedule}>
                                                    <option  value="1">Полный день</option>
                                                    <option  value="2">Сменный график</option>
                                                    <option  value="3">Гибкий график</option>
                                                    <option  value="4">Удаленная работа</option>
                                                    <option  value="5">Вахтовый метод</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_businessTrip" className="custom-control-input" name="id_businessTrip" checked={this.state.items.businessTrip} onChange = {this.setBusinessTrip}/>
                                                    <label className="custom-control-label" for="id_businessTrip">Командировки</label>
                                                </div>
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_relocate" className="custom-control-input" name="id_relocate" checked={this.state.items.relocate} onChange = {this.setRelocate} />
                                                    <label className="custom-control-label" for="id_relocate">Готовность на переезд</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_maritalStatus">Семейное положение:</label>
                                                <select className="form-control" id="id_maritalStatus" name="id_maritalStatus" value={this.state.items.maritalStatus} onChange = {this.setMaritalStatus} >
                                                    <option  value="1">Замужем</option>
                                                    <option  value="2">Не замужем</option>
                                                    <option  value="3">Женат</option>
                                                    <option  value="4">Не женат</option>
                                                </select>
                                                <div
                                                    className="custom-control custom-checkbox custom-control-inline ccb-right childrenCheckBox">
                                                    <input type="checkbox" id="id_children" className="custom-control-input" name="id_children" checked={this.state.items.children} onChange = {this.setChildren} />
                                                    <label className="custom-control-label" for="id_children">Дети</label>
                                                </div>
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_education">Основное образование:</label>
                                                <select className="form-control" id="id_education" name="id_education" value={this.state.items.education} onChange = {this.setEducation}>
                                                    <option  value="1">Общее среднее образование</option>
                                                    <option  value="2">Профессионально-техническое образование</option>
                                                    <option  value="3">Высшее образования</option>
                                                    <option  value="4">Аспирантура</option>
                                                    <option  value="5">Докторантура</option>
                                                </select>
                                            </div>
                                        </div>
                                    </fieldset>

                                    {/* <!-- -------ВЛАДЕНИЕ ЯЗЫКАМИ----------- --> */}
                                    <fieldset className="scheduler-border">
                                        <legend className="scheduler-border">
                                            <h3>Владение языками</h3>
                                        </legend>
                                        <ShowLanguage arrayToDisplay={this.langArray} />
                                        <AddLanguage />
                                        <div id="langList">                                                                                     
                                         </div>                                                   
                                        <a href="javascript:AddLang()" AddLanguage onClick={this.AddLang}>Добавить</a>
                                    </fieldset>

                                    {/* <!-- -------ОБРАЗОВАНИЕ----------- --> */}
                                    <fieldset className="scheduler-border">
                                        <legend className="scheduler-border">
                                            <h3>Образование</h3>
                                        </legend>
                                        <ShowEducation arrayToDisplay={this.educArray} />
                                        <div id="educationList">
                                        </div>
                                        <a href="javascript:this.AddScheduler()" onClick={this.AddScheduler}>Добавить</a>
                                    </fieldset>

                                    {/* <!-- -------КУРСЫ ПОВЫШЕНИЯ КВАЛИФИКАЦИИ----------- --> */}
                                    <fieldset className="scheduler-border">
                                        <legend className="scheduler-border">
                                            <h3>Курсы повышения квалификации</h3>
                                        </legend>
                                        <ShowCourses arrayToDisplay={this.coursArray} />                                       
                                        <div id="courseList">
                                        </div>
                                        <a href="javascript:AddCourse()" onClick={this.AddCourse}>Добавить</a>
                                    </fieldset>

                                    {/* <!-- -------ОПЫТ РАБОТЫ----------- --> */}
                                    <fieldset className="scheduler-border">
                                        <legend className="scheduler-border">
                                            <h3>Опыт работы</h3>
                                        </legend>
                                        < ShowExperience arrayToDisplay={this.expArray} />
                                        <div id="experienceList">
                                        </div>
                                        <a href="javascript:AddExperience()" onClick={this.AddExperience}>Добавить</a>
                                    </fieldset>

                                    {/* <!-- -------РЕКОМЕНДАЦИИ----------- --> */}
                                    <fieldset className="scheduler-border">
                                        <legend className="scheduler-border">
                                            <h3>Рекомендации</h3>
                                        </legend>
                                        <ShowRecommending arrayToDisplay={this.recomendationArray} />
                                        <div id="recommendationList">
                                        </div>
                                        <a href="javascript:AddRecommendation()" onClick={this.AddRecommendation}>Добавить</a>
                                    </fieldset>



                                    {/* <!-- -------ДОПОЛНИТЕЛЬНАЯ ИНФО----------- --> */}
                                    <fieldset className="scheduler-border">
                                        <legend className="scheduler-border">
                                            <h3>Дополнительная информация</h3>
                                        </legend>

                                        <div className="row">
                                            <div className="form-group col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <label for="id_driverLicense">Права категории:</label>
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_driverLicenseA1" className="custom-control-input" name="id_driverLicenseA1"  onChange = {this.setDriveLicenseA1} />
                                                    <label className="custom-control-label" for="id_driverLicenseA1">A1</label>
                                                </div>
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_driverLicenseA" className="custom-control-input" name="id_driverLicenseA"  onChange = {this.setDriveLicenseA} />
                                                    <label className="custom-control-label" for="id_driverLicenseA">A</label>
                                                </div>
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_driverLicenseB1" className="custom-control-input" name="id_driverLicenseB1"  onChange = {this.setDriveLicenseB1}/>
                                                    <label className="custom-control-label" for="id_driverLicenseB1">B1</label>
                                                </div>
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_driverLicenseB" className="custom-control-input" name="id_driverLicenseB"   onChange = {this.setDriveLicenseB}/>
                                                    <label className="custom-control-label" for="id_driverLicenseB">B</label>
                                                </div>
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_driverLicenseC1" className="custom-control-input" name="id_driverLicenseC1"   onChange = {this.setDriveLicenseC1}/>
                                                    <label className="custom-control-label" for="id_driverLicenseC1">C1</label>
                                                </div>
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_driverLicenseC" className="custom-control-input" name="id_driverLicenseC" onChange = {this.setDriveLicenseC}/>
                                                    <label className="custom-control-label" for="id_driverLicenseC">C</label>
                                                </div>
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_driverLicenseD1" className="custom-control-input" name="id_driverLicenseD1"   onChange = {this.setDriveLicenseD1}/>
                                                    <label className="custom-control-label" for="id_driverLicenseD1">D1</label>
                                                </div>
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_driverLicenseD" className="custom-control-input" name="id_driverLicenseD"  onChange = {this.setDriveLicenseD}/>
                                                    <label className="custom-control-label" for="id_driverLicenseD">D</label>
                                                </div>
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_driverLicenseT" className="custom-control-input" name="id_driverLicenseT"   onChange = {this.setDriveLicenseT}/>
                                                    <label className="custom-control-label" for="id_driverLicenseT">T</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_privatCar" className="custom-control-input" name="id_privatCar" checked={this.state.items.privateСar} onChange = {this.setPrivateСar} />
                                                    <label className="custom-control-label" for="id_privatCar">Есть личный
                                        автомобиль</label>
                                                </div>
                                            </div>
                                            <div className="form-group col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_army" className="custom-control-input" name="id_army" checked={this.state.items.army} onChange = {this.setArmy} />
                                                    <label className="custom-control-label" for="id_army">Служба в армии</label>
                                                </div>
                                            </div>
                                            <div className="form-group col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <label for="id_hobby">Хобби:</label>
                                                <textarea className="form-control" id="id_hobby" name="id_hobby" value={this.state.items.hobby} onChange = {this.setHobby}></textarea>
                                            </div>
                                            <div className="form-group col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <label for="id_personalQualities">Личные качества:</label>
                                                <textarea className="form-control" id="id_personalQualities" name="id_personalQualities" value={this.state.items.personalQualities} onChange = {this.setPersonalQualities}></textarea>
                                            </div>
                                            <div className="form-group col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <label for="id_professionalSkills">Профессиональные навыки:</label>
                                                <textarea className="form-control" id="id_professionalSkills" name="id_professionalSkills" value={this.state.items.professionalSkills} onChange = {this.setProfessionalSkills}></textarea>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <button type="submit" className="btn btn-primary" id="sbmResume" >Отправить</button>
                                </form>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            );
        }
    };
}
export default ExistingUserData;
