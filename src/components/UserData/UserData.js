import React from 'react';

import '../UserData/UserData.css';
import ShowExperience from '../../ShowModules/ShowExperience';
import ShowEducation from '../../ShowModules/ShowEducation';
import ShowLanguage from '../../ShowModules/ShowLanguage';
import ShowCourses from '../../ShowModules/ShowCourses';
import ShowRecommending from '../../ShowModules/ShowRecommending';
import UploadPhoto from '../../images/uploadPhoto.jpg';
import {API_ADDRESS_USER_DATA}from"../../ConstantModule";

class UserData extends React.Component {
    constructor(props) {
        super(props);       
        this.state = {
            items: null
        }      
        this.expArray = [];
        this.educArray = [];
        this.langArray = [];
        this.coursArray = [];
        this.recomendationArray = [];
        this.currencyName = "";
        this.imageBase64 = "";
        //------------------------------------------
        this.id_langName = "id_langName";
        this.id_level = "id_level";
        this.count = 0;
        this.countLang = 100;
        this.imageFromDB = "";
        //-------------------------------------------

        // this.changeData = this.changeData.bind(this);
        this.fillExpArr = this.fillExpArr.bind(this);
        this.fillEducArr = this.fillEducArr.bind(this);
        this.fillLangArr = this.fillLangArr.bind(this);
        this.fillCoursArr = this.fillCoursArr.bind(this);
        this.fillRecomendArr = this.fillRecomendArr.bind(this);
        this.AddLang = this.AddLang.bind(this);
        this.AddEducation = this.AddEducation.bind(this);
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
      //  this.setStillWorking = this.setStillWorking.bind(this);
     
    }

    fillCoursArr(data, coursArr) {

        for (let i = 0; i < data.courseName.length; i++) {
            if (data.courseName[i] != null && data.organization[i] != null) {
                let objCourses = {};

                objCourses.courseName = data.courseName[i];
                objCourses.organization = data.organization[i];
                objCourses.endingCourse = data.endingCourse[i];

                coursArr.push(objCourses);
            }
        }
    }
    fillRecomendArr(data, recomendArr) {

        for (let i = 0; i < data.phoneCompany.length; i++) {
            if (data.phoneCompany[i] != null) {
                let objRecomendation = {};
                objRecomendation.personRecommending = data.personRecommending[i];
                objRecomendation.company = data.company[i]; 
                if (data.emailCompany == null || data.emailCompany == 'null') {objRecomendation.emailCompany = "";}                 
                else {objRecomendation.emailCompany = data.emailCompany[i];}             
                objRecomendation.phoneCompany = data.phoneCompany[i];
                recomendArr.push(objRecomendation);              
            }
        }
    }

    fillLangArr(data, langArr) {
        for (let i = 0; i < data.langName.length; i++) {

            if (data.langName[i] != null && data.level[i] != null) {
                let objLanguage = {};

                objLanguage.langName = data.langName[i];
                objLanguage.level = data.level[i];

                langArr.push(objLanguage);
            }
        }
    }

    fillEducArr(data, educArr) {
        if (data.institutName != null) {
            for (let i = 0; i < data.institutName.length; i++) {
                if (data.institutName[i] != null && data.specialty[i] != null) {
                    let objEducation = {};

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
                if (data.companyName[i] != null && data.positionWork[i] != null) {
                    let objExperience = {};

                    objExperience.startWork = data.startWork[i];
                    objExperience.endWork = data.endWork[i];
                    objExperience.stillWorking = data.stillWorking[i];
                    objExperience.positionWork = data.positionWork[i];
                    objExperience.companyName = data.companyName[i];
                    objExperience.jobDuties = data.jobDuties[i];

                    expArr.push(objExperience);
                }
            }
        }
    }

    AddLang() {

        this.langArray.push({ langName: "", level: "" });
        this.setState(Object.assign(this.state.items, { langName: this.langArray.langName }));
        this.setState(Object.assign(this.state.items, { level: this.langArray.level }));        
    }
    AddEducation() {
        this.educArray.push({ institutName: "", levelEducation: "", faculty: "", specialty: "", ending: "" });
        this.setState(Object.assign(this.state.items, { institutName: this.educArray.institutName }));
        this.setState(Object.assign(this.state.items, { levelEducation: this.educArray.levelEducation }));
        this.setState(Object.assign(this.state.items, { faculty: this.educArray.faculty }));
        this.setState(Object.assign(this.state.items, { specialty: this.educArray.specialty }));
        this.setState(Object.assign(this.state.items, { ending: this.educArray.ending }));
    }
    AddCourse() {
        this.coursArray.push({ courseName: "", organization: "", endingCourse: "" });
        this.setState(Object.assign(this.state.items, { courseName: this.coursArray.courseName }));
        this.setState(Object.assign(this.state.items, { organization: this.coursArray.organization }));
        this.setState(Object.assign(this.state.items, { endingCourse: this.coursArray.endingCourse }));
    }
    AddExperience() {
        this.expArray.push({ startWork: "", endWork: "", stillWorking: "", positionWork: "", companyName: "", jobDuties: "" });
        this.setState(Object.assign(this.state.items, { startWork: this.expArray.startWork }));
        this.setState(Object.assign(this.state.items, { endWork: this.expArray.endWork }));
        this.setState(Object.assign(this.state.items, { stillWorking: this.expArray.stillWorking }));
        this.setState(Object.assign(this.state.items, { positionWork: this.expArray.positionWork }));
        this.setState(Object.assign(this.state.items, { companyName: this.expArray.companyName }));
        this.setState(Object.assign(this.state.items, { jobDuties: this.expArray.jobDuties }));
    }
    AddRecommendation() {
        this.recomendationArray.push({ personRecommending: "", company: "", emailCompany: "", phoneCompany: "" });
        this.setState(Object.assign(this.state.items, { personRecommending: this.recomendationArray.personRecommending }));
        this.setState(Object.assign(this.state.items, { company: this.recomendationArray.company }));
        this.setState(Object.assign(this.state.items, { emailCompany: this.recomendationArray.emailCompany }));
        this.setState(Object.assign(this.state.items, { phoneCompany: this.recomendationArray.phoneCompany }));
    }

    
    onFileSelected(event) {
        ////загрузка картинки на форму
        let selectedFile = event.target.files[0];

        let reader = new FileReader();

        let imgtag = document.getElementById("myimage");
        imgtag.title = selectedFile.name;

        reader.onload = function (event) {
            imgtag.src = event.target.result;
            localStorage.setItem('image',event.target.result) ;
        };
        if (imgtag) {
            reader.readAsDataURL(selectedFile);
        }

        this.setState(Object.assign(this.state.items, { image: event.target.files[0], loaded: 0 }));
        

        console.log(selectedFile);
       
    }
    setFirstName(event) {
         this.setState(Object.assign(this.state.items, { firstName: event.target.value }));                                     
         localStorage.setItem('firstName',this.state.items.firstName ) ;              
         }
    setPositions(event) {
         this.setState(Object.assign(this.state.items, { position: event.target.value })); 
         localStorage.setItem('position',this.state.items.position ) ;       
        }
    setLastName(event) {
         this.setState(Object.assign(this.state.items, { lastName: event.target.value }));
         localStorage.setItem('lastName',this.state.items.lastName ) ;
        }
    setMiddleName(event) {
         this.setState(Object.assign(this.state.items, { middleName: event.target.value }));
         localStorage.setItem('middleName',this.state.items.middleName ) ;
        }
    setBirthOfDate(event) {
         this.setState(Object.assign(this.state.items, { birthOfDate: event.target.value }));
         localStorage.setItem('birthOfDate',this.state.items.birthOfDate!==null?this.state.items.birthOfDate:"" ) ;
        }
    setCityOfResidence(event) { 
        this.setState(Object.assign(this.state.items, { сityOfResidence: event.target.value })); 
        localStorage.setItem('сityOfResidence',this.state.items.сityOfResidence ) ;
    }
    setPhone(event) {
         this.setState(Object.assign(this.state.items, { phone: event.target.value })); 
         localStorage.setItem('phone',this.state.items.phone) ;
        }
    setEmail(event) {
         this.setState(Object.assign(this.state.items, { email: event.target.value }));
         localStorage.setItem('email',this.state.items.email) ;
        }
    setNationality(event) { 
        this.setState(Object.assign(this.state.items, { nationality: event.target.value }));
        localStorage.setItem('nationality',this.state.items.nationality) ;
    }
    setDesiredSalary(event) { 
        this.setState(Object.assign(this.state.items, { desiredSalary: event.target.value })); 
        localStorage.setItem('desiredSalary',this.state.items.desiredSalary) ;    
    }
    setCurrencyName(event) {
         this.setState(Object.assign(this.state.items, { currency: event.target.value }));
         localStorage.setItem('currency',this.state.items.currency) ; 
         }
    setEmployment(event) { 
        this.setState(Object.assign(this.state.items, { employment: event.target.value }));
        localStorage.setItem('employment',this.state.items.employment) ;
     }
    setSchedule(event) {
         this.setState(Object.assign(this.state.items, { schedule: event.target.value }));
         localStorage.setItem('schedule',this.state.items.schedule) ;
        }
    setBusinessTrip(event) {
         this.setState(Object.assign(this.state.items, { businessTrip: event.target.checked }));
         localStorage.setItem('businessTrip',this.state.items.businessTrip) ;
        }
    setRelocate(event) {
         this.setState(Object.assign(this.state.items, { relocate: event.target.checked })); 
         localStorage.setItem('relocate',this.state.items.relocate) ;
        }
    setMaritalStatus(event) {
         this.setState(Object.assign(this.state.items, { maritalStatus: event.target.value }));
         localStorage.setItem('maritalStatus',this.state.items.maritalStatus) ;
        }
    setChildren(event) {
         this.setState(Object.assign(this.state.items, { children: event.target.checked }));
         localStorage.setItem('children',this.state.items.children) ;
        }
    setEducation(event) {
         this.setState(Object.assign(this.state.items, { education: event.target.value }));
         localStorage.setItem('education',this.state.items.education) ;
        }
    setPrivateСar(event) {
         this.setState(Object.assign(this.state.items, { privateСar: event.target.checked })); 
         localStorage.setItem('privateСar',this.state.items.privateСar) ;
        }
    setArmy(event) {
         this.setState(Object.assign(this.state.items, { army: event.target.checked }));
         localStorage.setItem('army',this.state.items.army) ;
        }
    setHobby(event) { 
        this.setState(Object.assign(this.state.items, { hobby: event.target.value }));
        localStorage.setItem('hobby',this.state.items.hobby) ;
    }
    setPersonalQualities(event) {
         this.setState(Object.assign(this.state.items, { personalQualities: event.target.value }));
         localStorage.setItem('personalQualities',this.state.items.personalQualities) ;        
        }
    setProfessionalSkills(event) {
         this.setState(Object.assign(this.state.items, { professionalSkills: event.target.value })); 
         localStorage.setItem('professionalSkills',this.state.items.professionalSkills) ;
        }    
    setDriveLicenseA1(event) { if (this.state.items.drivLicense != undefined) { 
        this.setState(Object.assign(this.state.items.drivLicense, { driverLicenseA1: event.target.checked }));
        localStorage.setItem('driverLicenseA1',this.state.items.drivLicense.driverLicenseA1) ;
    } }
    setDriveLicenseA(event) { if (this.state.items.drivLicense != undefined) {
         this.setState(Object.assign(this.state.items.drivLicense, { driverLicenseA: event.target.checked })); 
         localStorage.setItem('driverLicenseA',this.state.items.drivLicense.driverLicenseA) ;
        } }
    setDriveLicenseB1(event) { if (this.state.items.drivLicense != undefined) { 
        this.setState(Object.assign(this.state.items.drivLicense, { driverLicenseB1: event.target.checked }));
        localStorage.setItem('driverLicenseB1',this.state.items.drivLicense.driverLicenseB1) ;
} }
    setDriveLicenseB(event) { if (this.state.items.drivLicense != undefined) {
         this.setState(Object.assign(this.state.items.drivLicense, { driverLicenseB: event.target.checked })); 
         localStorage.setItem('driverLicenseB',this.state.items.drivLicense.driverLicenseB) ;
        } }
    setDriveLicenseC1(event) { if (this.state.items.drivLicense != undefined) { 
        this.setState(Object.assign(this.state.items.drivLicense, { driverLicenseC1: event.target.checked })); 
        localStorage.setItem('driverLicenseC1',this.state.items.drivLicense.driverLicenseC1) ;    
    } }
    setDriveLicenseC(event) { if (this.state.items.drivLicense != undefined) {
         this.setState(Object.assign(this.state.items.drivLicense, { driverLicenseC: event.target.checked }));
    localStorage.setItem('driverLicenseC',this.state.items.drivLicense.driverLicenseC) ;
 } }
    setDriveLicenseD1(event) { if (this.state.items.drivLicense != undefined) {
         this.setState(Object.assign(this.state.items.drivLicense, { driverLicensD1: event.target.checked }));
         localStorage.setItem('driverLicensD1',this.state.items.drivLicense.driverLicensD1) ;
        } }
    setDriveLicenseD(event) { if (this.state.items.drivLicense != undefined) { 
        this.setState(Object.assign(this.state.items.drivLicense, { driverLicenseD: event.target.checked }));
        localStorage.setItem('driverLicenseD',this.state.items.drivLicense.driverLicenseD) ;    
    } }
    setDriveLicenseT(event) { if (this.state.items.drivLicense != undefined) {
         this.setState(Object.assign(this.state.items.drivLicense, { driverLicenseT: event.target.checked })); 
         localStorage.setItem('driverLicenseT',this.state.items.drivLicense.driverLicenseT) ;
        } }


    componentDidMount() {
        fetch(API_ADDRESS_USER_DATA)
            .then((response) => response.json())
            .then((data) => {      
                document.getElementById("guestStatus").hidden = true;
                document.getElementById("userStatus").hidden = false;
                
                let expArr = [];
                let educArr = [];
                let langArr = [];
                let coursArr = [];
                let recomendArr = [];

                if (data.file) {
                    let fileFromDB = new Buffer.from(data.file).toString("base64");
                    this.imageFromDB = "data:image/png;base64," + fileFromDB;
                    document.getElementById("userAvatar").src = this.imageFromDB  ;
                }
                else {
                    this.imageFromDB = UploadPhoto;
                }
                console.dir(data.file);

                if (data.companyName != null) this.fillExpArr(data, expArr);
                if (data.institutName != null) this.fillEducArr(data, educArr);
                if (data.langName != null) this.fillLangArr(data, langArr);
                if (data.courseName != null) this.fillCoursArr(data, coursArr);
                if (data.phoneCompany != null) this.fillRecomendArr(data, recomendArr);

                this.expArray = expArr;
                this.educArray = educArr;
                this.langArray = langArr;
                this.coursArray = coursArr;
                this.recomendationArray = recomendArr;

                if (data.birthOfDate == undefined) { data.birthOfDate = ''; }
                
                    this.setState({
                        items: data
                    });
                       
                if(data.firstName=="" )
                {                              
               this.setState(Object.assign(this.state.items, {firstName: localStorage.getItem('firstName') }));
               this.setState(Object.assign(this.state.items, {lastName: localStorage.getItem('lastName') }));
               this.setState(Object.assign(this.state.items, {middleName: localStorage.getItem('middleName') }));
               this.setState(Object.assign(this.state.items, {position: localStorage.getItem('position') }));
               this.setState(Object.assign(this.state.items, {birthOfDate:localStorage.getItem('birthOfDate')!==null?localStorage.getItem('birthOfDate'):"" }));
               this.setState(Object.assign(this.state.items, {сityOfResidence: localStorage.getItem('сityOfResidence') }));
               this.setState(Object.assign(this.state.items, {phone: localStorage.getItem('phone') }));
               this.setState(Object.assign(this.state.items, {email: localStorage.getItem('email') }));
               this.setState(Object.assign(this.state.items, {nationality: localStorage.getItem('nationality') }));
               this.setState(Object.assign(this.state.items, {desiredSalary: localStorage.getItem('desiredSalary') }));
               this.setState(Object.assign(this.state.items, {currency: localStorage.getItem('currency') }));
               this.setState(Object.assign(this.state.items, {employment: localStorage.getItem('employment') }));
               this.setState(Object.assign(this.state.items, {schedule: localStorage.getItem('schedule') }));
               this.setState(Object.assign(this.state.items, {businessTrip: localStorage.getItem('businessTrip') }));
               this.setState(Object.assign(this.state.items, {relocate: localStorage.getItem('relocate') }));
               this.setState(Object.assign(this.state.items, {maritalStatus: localStorage.getItem('maritalStatus') }));
               this.setState(Object.assign(this.state.items, {children: localStorage.getItem('children') }));
               this.setState(Object.assign(this.state.items, {education: localStorage.getItem('education') }));
               this.setState(Object.assign(this.state.items, {privateСar: localStorage.getItem('privateСar') }));
               this.setState(Object.assign(this.state.items, {army: localStorage.getItem('army') }));
               this.setState(Object.assign(this.state.items, {hobby: localStorage.getItem('hobby') }));
               this.setState(Object.assign(this.state.items, {personalQualities: localStorage.getItem('personalQualities') }));
               this.setState(Object.assign(this.state.items, {professionalSkills: localStorage.getItem('professionalSkills') }));
               this.setState(Object.assign(this.state.items.drivLicense, {driverLicenseA1: localStorage.getItem('driverLicenseA1') }));
               this.setState(Object.assign(this.state.items.drivLicense, {driverLicenseA: localStorage.getItem('driverLicenseA') }));
               this.setState(Object.assign(this.state.items.drivLicense, {driverLicenseB: localStorage.getItem('driverLicenseB') }));
               this.setState(Object.assign(this.state.items.drivLicense, {driverLicenseB1: localStorage.getItem('driverLicenseB1') }));
               this.setState(Object.assign(this.state.items.drivLicense, {driverLicenseC: localStorage.getItem('driverLicenseC') }));
               this.setState(Object.assign(this.state.items.drivLicense, {driverLicenseC1: localStorage.getItem('driverLicenseC1') }));
               this.setState(Object.assign(this.state.items.drivLicense, {driverLicenseD: localStorage.getItem('driverLicenseD') }));
               this.setState(Object.assign(this.state.items.drivLicense, {driverLicenseD1: localStorage.getItem('driverLicenseD1') }));
               this.setState(Object.assign(this.state.items.drivLicense, {driverLicenseT: localStorage.getItem('driverLicenseT') }));               
               this.setState(Object.assign(this.state.items, {image: localStorage.getItem('image') }));             
              
              if(this.state.items.image!= null)
               {
                let img = document.getElementById('myimage');
                img.src = localStorage.getItem('image');
                }    
            }      
                console.dir(this.state.items);
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
                    <div className="container">
                        {/* <!-- First container --> */}
                        {/* <button type="button" className="btn btn-primary btn-lg mb-5" id="btnExit" onClick={this.clearLocalStorage}>Выйти и очистить local storage</button> */}
                        <div className="divData col-md-12 mt-5">
                            <div>
                                <form action={API_ADDRESS_USER_DATA} method="POST" encType="multipart/form-data">

                                    {/* <!-- -------ОСНОВНАЯ ИНФО----------- --> */}
                                    <fieldset className="form-group p-3">
                                        <legend className="w-auto px-2">
                                            <h3>Основная информация</h3>
                                        </legend>
                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_userPosition">Желаемая должность:</label>
                                                <input id="id_userPosition" type="text"required className="form-control" value={this.state.items.position} onChange={this.setPositions} name="id_userPosition"
                                                    placeholder="Введите должность" />
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_lastName">Фамилия:</label>
                                                <input id="id_lastName" type="text"required className="form-control" name="id_lastName" value={this.state.items.lastName} onChange={this.setLastName} placeholder="Введите фамилию" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="userPhoto">
                                                    <label>
                                                        <img className="avatar" src={this.imageFromDB} alt="Нажмите для выбора файла" id="myimage" />
                                                        <input
                                                            accept="image/*"
                                                            type="file"
                                                            name="fupload"
                                                            onChange={this.onFileSelected} />
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_firstName">Имя:</label>
                                                <input type="text" className="form-control" id="id_firstName"required onChange={this.setFirstName} name="id_firstName" value={this.state.items.firstName} placeholder="Введите имя" />
                                                <label for="id_middleName">Отчество:</label>
                                                <input type="text" className="form-control" id="id_middleName" name="id_middleName" value={this.state.items.middleName} onChange={this.setMiddleName}
                                                    placeholder="Введите отчество" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_birthOfDate">Дата рождения:</label>
                                                <input type="date" className="form-control" id="id_birthOfDate"required value={this.state.items.birthOfDate.substr(0, 10)} onChange={this.setBirthOfDate} name="id_birthOfDate" />
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_cityOfResidence">Город проживания:</label>
                                                <input type="text" className="form-control" id="id_cityOfResidence"required name="id_cityOfResidence" value={this.state.items.сityOfResidence} onChange={this.setCityOfResidence}
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
                                                <input type="text" className="form-control" id="id_phone" name="id_phone"required value={this.state.items.phone} onChange={this.setPhone} placeholder="+380661234567" />
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_email">Электронная почта:</label>
                                                <input type="email" className="form-control" id="id_email" name="id_email"required value={this.state.items.email} onChange={this.setEmail}
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
                                                <label for="id_nationality">Гражданство:</label>
                                                <input type="text" className="form-control" id="id_nationality"required name="id_nationality" value={this.state.items.nationality} onChange={this.setNationality}
                                                    placeholder="Введите национальность" />
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_desiredSalary">Желаемая зарплата:</label>

                                                <div className="input-group mb-2">
                                                    <input type="number" className="form-control" id="id_desiredSalary"required name="id_desiredSalary" value={this.state.items.desiredSalary} onChange={this.setDesiredSalary} placeholder="0"
                                                        step="1" min="0" />
                                                    <div className="input-group-append">
                                                        <select className="form-control" id="id_currency" name="id_currency" onChange={this.setCurrencyName} value={this.state.items.currency}>
                                                            <option value="1">₴ - гривна</option>
                                                            <option value="2">$ - доллар</option>
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
                                                <select className="form-control" id="id_employment" name="id_employment" placeholder="выбрать" value={this.state.items.employment} onChange={this.setEmployment}>
                                                    <option value="1">Полная занятость</option>
                                                    <option value="2">Частичная занятость</option>
                                                    <option value="3">Проектная работа</option>
                                                    <option value="4">Волонтерство</option>
                                                    <option value="5">Стажировка</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_schedule">График работы:</label>
                                                <select className="form-control" id="id_schedule" name="id_schedule" value={this.state.items.schedule} onChange={this.setSchedule}>
                                                    <option value="1">Полный день</option>
                                                    <option value="2">Сменный график</option>
                                                    <option value="3">Гибкий график</option>
                                                    <option value="4">Удаленная работа</option>
                                                    <option value="5">Вахтовый метод</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_businessTrip" className="custom-control-input" name="id_businessTrip" checked={this.state.items.businessTrip} onChange={this.setBusinessTrip} />
                                                    <label className="custom-control-label" for="id_businessTrip">Командировки</label>
                                                </div>
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_relocate" className="custom-control-input" name="id_relocate" checked={this.state.items.relocate} onChange={this.setRelocate} />
                                                    <label className="custom-control-label" for="id_relocate">Готовность на переезд</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_maritalStatus">Семейное положение:</label>
                                                <select className="form-control" id="id_maritalStatus" name="id_maritalStatus" value={this.state.items.maritalStatus} onChange={this.setMaritalStatus} >
                                                    <option value="1">Замужем</option>
                                                    <option value="2">Не замужем</option>
                                                    <option value="3">Женат</option>
                                                    <option value="4">Не женат</option>
                                                </select>
                                                <div
                                                    className="custom-control custom-checkbox custom-control-inline ccb-right childrenCheckBox">
                                                    <input type="checkbox" id="id_children" className="custom-control-input" name="id_children" checked={this.state.items.children} onChange={this.setChildren} />
                                                    <label className="custom-control-label" for="id_children">Дети</label>
                                                </div>
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_education">Основное образование:</label>
                                                <select className="form-control" id="id_education" name="id_education" value={this.state.items.education} onChange={this.setEducation}>
                                                    <option value="1">Общее среднее образование</option>
                                                    <option value="2">Профессионально-техническое образование</option>
                                                    <option value="3">Высшее образования</option>
                                                    <option value="4">Аспирантура</option>
                                                    <option value="5">Докторантура</option>
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
                                        <a href="javascript:AddLang()" AddLanguage onClick={this.AddLang}>Добавить</a>
                                    </fieldset>
                                    {/* <!-- -------ОБРАЗОВАНИЕ----------- --> */}
                                    <fieldset className="scheduler-border">
                                        <legend className="scheduler-border">
                                            <h3>Образование</h3>
                                        </legend>
                                        <ShowEducation arrayToDisplay={this.educArray} />
                                        <a href="javascript:this.AddEducation()" onClick={this.AddEducation}>Добавить</a>
                                    </fieldset>

                                    {/* <!-- -------КУРСЫ ПОВЫШЕНИЯ КВАЛИФИКАЦИИ----------- --> */}
                                    <fieldset className="scheduler-border">
                                        <legend className="scheduler-border">
                                            <h3>Курсы повышения квалификации</h3>
                                        </legend>
                                        <ShowCourses arrayToDisplay={this.coursArray} />
                                        <a href="javascript:AddCourse()" ShowCourses onClick={this.AddCourse}>Добавить</a>
                                    </fieldset>

                                    {/* <!-- -------ОПЫТ РАБОТЫ----------- --> */}
                                    <fieldset className="scheduler-border">
                                        <legend className="scheduler-border">
                                            <h3>Опыт работы</h3>
                                        </legend>
                                        < ShowExperience arrayToDisplay={this.expArray} />
                                        <a href="javascript:AddExperience()" onClick={this.AddExperience}>Добавить</a>
                                    </fieldset>

                                    {/* <!-- -------РЕКОМЕНДАЦИИ----------- --> */}
                                    <fieldset className="scheduler-border">
                                        <legend className="scheduler-border">
                                            <h3>Рекомендации</h3>
                                        </legend>
                                        <ShowRecommending arrayToDisplay={this.recomendationArray} />
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
                                                    <input type="checkbox" id="id_driverLicenseA1" className="custom-control-input" name="id_driverLicenseA1" checked={this.state.items.drivLicense.driverLicenseA1} value="1" onChange={this.setDriveLicenseA1} />
                                                    <label className="custom-control-label" for="id_driverLicenseA1">A1</label>
                                                </div>
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_driverLicenseA" className="custom-control-input" name="id_driverLicenseA" value="2" checked={this.state.items.drivLicense.driverLicenseA} onChange={this.setDriveLicenseA} />
                                                    <label className="custom-control-label" for="id_driverLicenseA">A</label>
                                                </div>
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_driverLicenseB1" className="custom-control-input" name="id_driverLicenseB1" value="3" checked={this.state.items.drivLicense.driverLicenseB1} onChange={this.setDriveLicenseB1} />
                                                    <label className="custom-control-label" for="id_driverLicenseB1">B1</label>
                                                </div>
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_driverLicenseB" className="custom-control-input" name="id_driverLicenseB" value="4" checked={this.state.items.drivLicense.driverLicenseB} onChange={this.setDriveLicenseB} />
                                                    <label className="custom-control-label" for="id_driverLicenseB">B</label>
                                                </div>
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_driverLicenseC1" className="custom-control-input" name="id_driverLicenseC1" value="5" checked={this.state.items.drivLicense.driverLicenseC1} onChange={this.setDriveLicenseC1} />
                                                    <label className="custom-control-label" for="id_driverLicenseC1">C1</label>
                                                </div>
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_driverLicenseC" className="custom-control-input" name="id_driverLicenseC" value="6" checked={this.state.items.drivLicense.driverLicenseC} onChange={this.setDriveLicenseC} />
                                                    <label className="custom-control-label" for="id_driverLicenseC">C</label>
                                                </div>
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_driverLicenseD1" className="custom-control-input" name="id_driverLicenseD1" value="7" checked={this.state.items.drivLicense.driverLicenseD1} onChange={this.setDriveLicenseD1} />
                                                    <label className="custom-control-label" for="id_driverLicenseD1">D1</label>
                                                </div>
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_driverLicenseD" className="custom-control-input" name="id_driverLicenseD" value="8" checked={this.state.items.drivLicense.driverLicenseD} onChange={this.setDriveLicenseD} />
                                                    <label className="custom-control-label" for="id_driverLicenseD">D</label>
                                                </div>
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_driverLicenseT" className="custom-control-input" name="id_driverLicenseT" value="9" checked={this.state.items.drivLicense.driverLicenseT} onChange={this.setDriveLicenseT} />
                                                    <label className="custom-control-label" for="id_driverLicenseT">T</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_privatCar" className="custom-control-input" name="id_privatCar" checked={this.state.items.privateСar} onChange={this.setPrivateСar} />
                                                    <label className="custom-control-label" for="id_privatCar">Есть личный
                                                        автомобиль</label>
                                                </div>
                                            </div>
                                            <div className="form-group col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_army" className="custom-control-input" name="id_army" checked={this.state.items.army} onChange={this.setArmy} />
                                                    <label className="custom-control-label" for="id_army">Служба в армии</label>
                                                </div>
                                            </div>
                                            <div className="form-group col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <label for="id_hobby">Хобби:</label>
                                                <textarea className="form-control" id="id_hobby" name="id_hobby" value={this.state.items.hobby} onChange={this.setHobby}></textarea>
                                            </div>
                                            <div className="form-group col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <label for="id_personalQualities">Личные качества:</label>
                                                <textarea className="form-control" id="id_personalQualities" name="id_personalQualities" value={this.state.items.personalQualities} onChange={this.setPersonalQualities}></textarea>
                                            </div>
                                            <div className="form-group col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <label for="id_professionalSkills">Профессиональные навыки:</label>
                                                <textarea className="form-control" id="id_professionalSkills" name="id_professionalSkills" value={this.state.items.professionalSkills} onChange={this.setProfessionalSkills}></textarea>
                                            </div>
                                        </div>
                                    </fieldset>  
                                    <div class="d-flex justify-content-center mt-3">
                                        <button type="submit" className="btn btn-primary btn-lg mb-5" id="sbmResume">Сохранить и перейти к шаблонам</button>

                                    </div>                                 
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
export default UserData;
