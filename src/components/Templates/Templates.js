import React from 'react';

import './css/main.css';

import avatar from '../../images/avatar.png';
import location from '../../images/location.png';
import phone from '../../images/phone.png';
import email from '../../images/email.png';

import {getDriverLicense,getRecomendingArr,getExperience,getEducation,calculateAge,getCourses,getLanguages,getArmyData,getEmployment,getDesiredSalary,getMaritalStatus} from "../TemplateLoadingMethods";

class Templates extends React.Component {

    constructor(props) {

        super(props);

        //Начальное состояние состояния (state)
        this.state = {
            userData: null,
            languagesArr: null,
            coursesArr: null,
            educationArr: null,
            experienceArr: null,
            recomendingArr: null
        }

        this.nameUserData = "";
        this.driverLicenseStr = "";
        this.maritalStatusStr = "";
        this.employmentStr = "";
        this.army = "";
        this.languagesArr = [];
        this.courseArr = [];
        this.educatArr = [];
        this.experArr = [];
        this.recomendArr = [];
        this.age = 0;

        
        this.API_ADDRESS = "http://localhost:55555/tmps";

        }

    createAndDownloadPdf = () => {

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: this.state,
            url: 'http://localhost:55555/create-pdf'
        };

        axios(options)
            .then(() => axios.get('http://localhost:55555/fetch-pdf', { responseType: 'blob' }))
            .then((res) => {
                const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

                saveAs(pdfBlob, 'newPdf.pdf');
            })
    }

    componentDidMount() {

        //Встроенный метод для GET (и только) запросов
        fetch(this.API_ADDRESS)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.middleName == null) {
                    data.middleName = "";
                }
                if (data.file) {
                    let fileFromDB = new Buffer.from(data.file).toString("base64");
                    this.imageFromDB = "data:image/png;base64," + fileFromDB;
                }
                else {
                    this.imageFromDB = avatar;
                }
                this.languagesArr = getLanguages(data);
                this.driverLicenseStr = getDriverLicense(data);
                this.maritalStatusStr =getMaritalStatus(data);
                this.salaryStr = getDesiredSalary(data);
                this.employmentStr = getEmployment(data);
                this.army =getArmyData(data);
                this.age = calculateAge(data.birthOfDate);
                this.courseArr = getCourses(data);
                this.educatArr = getEducation(data);
                this.experArr = getExperience(data);
                this.recomendArr = getRecomendingArr(data);


                this.setState({
                    userData: data,
                    languagesArr: this.languagesArr,
                    coursesArr: this.courseArr,
                    educationArr: this.educatArr,
                    experienceArr: this.experArr,
                    recomendingArr: this.recomendArr
                });


                console.dir(this.state.userData);


            });
    }

    render() {

        if (this.state.userData == null) {
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
                <div className="container">

                    {/* template 1 */}
                    <div className="container-sm" id="main-container-t1" >
                        <div className="row container-t">
                            {/* left-container */}
                            <div className="col col-4" id="left-container-t1">
                                <img id="avatar" src={avatar} className="rounded mx-auto d-block" alt="avatar" />
                                <div className="row justify-content-start" id='full-name'>
                                    <div className="mr-3 text-capitalize text-break name-text">иванова</div>
                                    <div className="mr-3 text-capitalize name-text">ольга</div>
                                    <div className="mr-3 text-capitalize name-text">Викторовна</div>
                                </div>

                                <hr className="hr2" />

                                <div className="col header-text">Должность
                                    <div className="col main-text">Бухгалтер</div>
                                </div>
                                <div className="col header-text">Возраст
                                    <div className="col main-text">47</div>
                                </div>
                                <div className="col header-text">Контакты</div>

                                <div className="col text-capitalize "><img className="icon-item " src={location} alt="location" />
                                    Запорожье</div>
                                <div className="col "><img className="icon-item" src={phone} alt="phone" />
                                    +380661212123</div>
                                <div className="col long-text "><img className="icon-item" src={email} alt="email" />
                                    ivanova_olga@gmail.com</div>

                                <div className="col text-nowrap header-text" >Водительские права
                                    <div className="col main-text">B, C, есть личный авто</div>
                                </div>

                                <div className="col header-text">Гражданство
                                    <div className="col main-text">украинка</div>
                                </div>
                                <div className="col text-nowrap header-text">Семейное положение
                                    <div className="col main-text">замужем, есть дети</div>
                                </div>
                                <div className="col text-nowrap header-text">Желаемая зарплата
                                    <div className="col main-text">500$</div>
                                </div>
                                <div className="col header-text">Занятость
                                    <div className="col main-text">полная, полный день, командировки, готовность на переезд</div>
                                </div>
                                <div className="col header-text">Языки
                                    <div className="col main-text">английский, В1</div>
                                    <div className="col main-text">украинский, С1</div>
                                </div>
                                <div className="col header-text">Армия
                                </div>



                            </div>

                            {/* right-container */}
                            <div className="col" id="right-container">
                                <div className="col header-text border box-t1">Опыт работы </div>
                                <div className="list-group ">
                                    <div className="list-group-item ">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">государственная служба</h5>
                                            <h5 className="mb-1 years">2000-2007</h5>
                                        </div>
                                        <p className="mb-1" >менеджер</p>
                                        <small>ведение клиентов, продажи</small>
                                    </div>
                                    <div className="list-group-item ">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">государственная служба</h5>
                                            <h5 className="mb-1 years">2007-2022</h5>
                                        </div>
                                        <p className="mb-1" >бухгалтер</p>
                                        <small>бухгалтерия предприятия</small>
                                    </div>
                                </div>

                                <div className="col header-text border box-t1">Образование</div>
                                <div className="list-group ">
                                    <div className="list-group-item ">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Университет</h5>
                                            <h5 className="mb-1 years">2000</h5>
                                        </div>
                                        <p className="mb-1" >менеджмент и ВЭД</p>
                                        <small>менеджер среднего звена, бакалавр</small>
                                    </div>
                                </div>

                                <div className="col header-text border box-t1">Курсы</div>
                                <div className="list-group ">
                                    <div className="list-group-item ">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Университет</h5>
                                            <h5 className="mb-1 years">2001</h5>
                                        </div>
                                        <p className="mb-1" >менеджмент и ВЭД</p>
                                    </div>
                                </div>

                                <div className="col header-text border box-t1">Рекомендации</div>
                                <div className="list-group ">
                                    <div className="list-group-item ">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Университет</h5>
                                        </div>
                                        <p className="mb-1 text-capitalize" >иванов Иван Иванович</p>
                                        <div >+380661234512</div>
                                        <div >ivanov@gmail.com</div>
                                    </div>
                                </div>

                                <div className="col header-text border box-t1">Профессиональные навыки</div>
                                <div className="list-group ">
                                    <div className="list-group-item ">
                                        <div className="mb-1 long-text" >
                                            Составление договоров.
                                            Расширение клиентской базы.
                                            Проведение презентаций.
                                            консультирование по телефону.
                                            Привел в компанию 7 ключевых клиентов (совокупно до 50% заказов).
                                            Создал отдел продаж с нуля. Впоследствии отдел (5 человек) под моим руководством регулярно выполнял план по привлечению новых клиентов и продажам.
                                            Разработал и внедрил в компании технологию продаж технически сложного оборудования.
                                        </div>
                                    </div>
                                </div>

                                <div className="col header-text border box-t1">Личные качества</div>
                                <div className="list-group ">
                                    <div className="list-group-item ">
                                        <p className="mb-1" >
                                            Здравствуйте. Основные сведения обо мне вы уже знаете из резюме.
                                            Могу немного рассказать о себе. Мне … лет,
                                            по специальности я работаю уже … года. Получать высшее образование
                                            по этой специальности решил осознанно, так как мне нравится
                                            профессия и то, что она может дать. Я стараюсь развиваться
                                            всесторонне, люблю получать новые знания. Поэтому работа в вашей
                                            компании окажется для меня очень полезной. А я, в свою очередь,
                                            все свои имеющиеся знания приложу для того, чтобы компания
                                            становилась еще перспективнее, а ее доходы росли. Там, где
                                            я работал раньше, мне удалось добиться существенных результатов.
                                            Прежнее место работы мне очень нравилось,
                                            но я хочу продвигаться вперед. Думаю, именно ваша компания мне
                                            такую возможность даст
                                        </p>
                                    </div>
                                </div>

                                <div className="col header-text border box-t1">Хобби</div>
                                <div className="list-group ">
                                    <div className="list-group-item ">
                                        <p className="mb-1" >
                                            вязание крючком и вышивание крестиком
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* template 2 */}
                    <div className="container-sm" id="main-container-t2" hidden>
                        <div className="row container-t">
                            {/* left-container */}
                            <div className="col col-4" id="left-container-t2">
                                <img id="avatar" src={avatar} className="rounded mx-auto d-block" alt="avatar" />
                                <div className="row justify-content-start" id='full-name'>
                                    <div className="mr-3 text-capitalize text-break name-text txt-white">иванова</div>
                                    <div className="mr-3 text-capitalize name-text txt-white">ольга</div>
                                    <div className="mr-3 text-capitalize name-text txt-white">Викторовна</div>
                                </div>

                                <hr className="hr2 invert" />

                                <div className="col header-text txt-white">Должность
                                    <div className="col main-text">Бухгалтер</div>
                                </div>
                                <div className="col header-text txt-white">Возраст
                                    <div className="col main-text">47</div>
                                </div>
                                <div className="col header-text txt-white">Контакты</div>

                                <div className="col text-capitalize txt-white"><img className="icon-item-t2" src={location} alt="location" />
                                    Запорожье</div>
                                <div className="col txt-white"><img className="icon-item-t2" src={phone} alt="phone" />
                                    +380661212123</div>
                                <div className="col long-text txt-white"><img className="icon-item-t2" src={email} alt="email" />
                                    ivanova_olga@gmail.com</div>

                                <div className="col text-nowrap header-text txt-white" >Водительские права
                                    <div className="col main-text">B, C, есть личный авто</div>
                                </div>

                                <div className="col header-text txt-white">Гражданство
                                    <div className="col main-text">украинка</div>
                                </div>
                                <div className="col text-nowrap header-text txt-white">Семейное положение
                                    <div className="col main-text">замужем, есть дети</div>
                                </div>
                                <div className="col text-nowrap header-text txt-white">Желаемая зарплата
                                    <div className="col main-text">500$</div>
                                </div>
                                <div className="col header-text txt-white">Занятость
                                    <div className="col main-text">полная, полный день, командировки, готовность на переезд</div>
                                </div>
                                <div className="col header-text txt-white">Языки
                                    <div className="col main-text">английский, В1</div>
                                    <div className="col main-text">украинский, С1</div>
                                </div>
                                <div className="col header-text txt-white">Армия
                                </div>



                            </div>

                            {/* right-container */}
                            <div className="col" id="right-container">
                                <div className="col header-text border box-t2">Опыт работы </div>
                                <div className="list-group ">
                                    <div className="list-group-item ">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">государственная служба</h5>
                                            <h5 className="mb-1 years">2000-2007</h5>
                                        </div>
                                        <p className="mb-1" >менеджер</p>
                                        <small>ведение клиентов, продажи</small>
                                    </div>
                                    <div className="list-group-item ">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">государственная служба</h5>
                                            <h5 className="mb-1 years">2007-2022</h5>
                                        </div>
                                        <p className="mb-1" >бухгалтер</p>
                                        <small>бухгалтерия предприятия</small>
                                    </div>
                                </div>

                                <div className="col header-text border box-t2">Образование</div>
                                <div className="list-group ">
                                    <div className="list-group-item ">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Университет</h5>
                                            <h5 className="mb-1 years">2000</h5>
                                        </div>
                                        <p className="mb-1" >менеджмент и ВЭД</p>
                                        <small>менеджер среднего звена, бакалавр</small>
                                    </div>
                                </div>

                                <div className="col header-text border box-t2">Курсы</div>
                                <div className="list-group ">
                                    <div className="list-group-item ">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Университет</h5>
                                            <h5 className="mb-1 years">2001</h5>
                                        </div>
                                        <p className="mb-1" >менеджмент и ВЭД</p>
                                    </div>
                                </div>

                                <div className="col header-text border box-t2">Рекомендации</div>
                                <div className="list-group ">
                                    <div className="list-group-item ">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Университет</h5>
                                        </div>
                                        <p className="mb-1 text-capitalize" >иванов Иван Иванович</p>
                                        <div >+380661234512</div>
                                        <div >ivanov@gmail.com</div>
                                    </div>
                                </div>

                                <div className="col header-text border box-t2">Профессиональные навыки</div>
                                <div className="list-group ">
                                    <div className="list-group-item ">
                                        <div className="mb-1 long-text" >
                                            Составление договоров.
                                            Расширение клиентской базы.
                                            Проведение презентаций.
                                            консультирование по телефону.
                                            Привел в компанию 7 ключевых клиентов (совокупно до 50% заказов).
                                            Создал отдел продаж с нуля. Впоследствии отдел (5 человек) под моим руководством регулярно выполнял план по привлечению новых клиентов и продажам.
                                            Разработал и внедрил в компании технологию продаж технически сложного оборудования.
                                        </div>
                                    </div>
                                </div>

                                <div className="col header-text border box-t2">Личные качества</div>
                                <div className="list-group ">
                                    <div className="list-group-item ">
                                        <p className="mb-1" >
                                            Здравствуйте. Основные сведения обо мне вы уже знаете из резюме.
                                            Могу немного рассказать о себе. Мне … лет,
                                            по специальности я работаю уже … года. Получать высшее образование
                                            по этой специальности решил осознанно, так как мне нравится
                                            профессия и то, что она может дать. Я стараюсь развиваться
                                            всесторонне, люблю получать новые знания. Поэтому работа в вашей
                                            компании окажется для меня очень полезной. А я, в свою очередь,
                                            все свои имеющиеся знания приложу для того, чтобы компания
                                            становилась еще перспективнее, а ее доходы росли. Там, где
                                            я работал раньше, мне удалось добиться существенных результатов.
                                            Прежнее место работы мне очень нравилось,
                                            но я хочу продвигаться вперед. Думаю, именно ваша компания мне
                                            такую возможность даст
                                        </p>
                                    </div>
                                </div>

                                <div className="col header-text border box-t2">Хобби</div>
                                <div className="list-group ">
                                    <div className="list-group-item ">
                                        <p className="mb-1" >
                                            вязание крючком и вышивание крестиком
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* template 3 */}
                    <div className="container-sm border " id="main-container-t3" hidden>
                        <div className="media align-items-center">
                            <div className="media-body ">
                                <div className='row justify-content-center m-0'>
                                    <div className='mr-3 text-capitalize text-break name-text-t3'>иванова</div>
                                    <div className='mr-3 text-capitalize text-break name-text-t3'>Ольга</div>
                                    <div className='mr-3 text-capitalize text-break name-text-t3'>викторовна</div>
                                </div>
                                <div className='row justify-content-center m-0 header-text'><h2>менеджер, 27 лет</h2></div>
                                <div className='row justify-content-center m-0 header-text'>ожидаемая заработная плата: 20000 грн</div>
                            </div>
                            <div className="media-right">
                                <img className="media-object" id="avatar" src={avatar} alt="avatar" />
                            </div>
                        </div>

                        <hr className='hr2'></hr>

                        <div className='header-text m-0'>Контакты</div>

                        <div className='row justify-content-around'>
                            <div className="d-flex text-capitalize"><img className="icon-item-t3" src={location} alt="location" />
                                Запорожье</div>
                            <div className="d-flex "><img className="icon-item-t3" src={phone} alt="phone" />
                                +380661212123</div>
                            <div className="d-flex long-text "><img className="icon-item-t3" src={email} alt="email" />
                                ivanova_olga@gmail.com</div>
                        </div>

                        <hr className='hr2'></hr>

                        <div className='row user-info-t3'>
                            <div className="col text-nowrap header-text" >Водительские права
                                <div className="col main-text">B, C, есть личный авто</div>
                            </div>
                            <div className="col header-text">Гражданство
                                <div className="col main-text">украинка</div>
                            </div>
                        </div>
                        <div className='row user-info-t3'>
                            <div className="col header-text">Занятость
                                <div className="col main-text">полная, полный день, командировки, готовность на переезд</div>
                            </div>
                            <div className="col text-nowrap header-text">Семейное положение
                                <div className="col main-text">замужем, есть дети</div>
                            </div>
                        </div>
                        <div className='row user-info-t3'>
                            <div className="col header-text">Языки
                                <div className="col main-text">английский, В1</div>
                                <div className="col main-text">украинский, С1</div>
                            </div>
                            <div className="col header-text">Армия
                            </div>
                        </div>

                        <hr className='hr2'></hr>

                        <div className='row justify-content-start header-text m-0'>Опыт работы</div>
                        <div className="list-group ">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1 pl-4">государственная служба</h5>
                                <h5 className="mb-1 pr-4 years">2007-2022</h5>
                            </div>
                            <p className="mb-1 pl-4" >бухгалтер</p>
                            <small className='pl-4 mb-2'>бухгалтерия предприятия</small>
                        </div>

                        <hr className='hr2'></hr>
                        <div className='row justify-content-start header-text m-0'>Образование</div>
                        <div className="list-group ">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1 pl-4">Университет</h5>
                                <h5 className="mb-1 pr-4 years">2000</h5>
                            </div>
                            <p className="mb-1 pl-4" >менеджмент и ВЭД</p>
                            <small className='pl-4 mb-2'>менеджер среднего звена, бакалавр</small>
                        </div>

                        <hr className='hr2'></hr>
                        <div className='row justify-content-start header-text m-0'>Курсы</div>
                        <div className="list-group ">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1 pl-4">Университет</h5>
                                <h5 className="mb-1 pr-4 years">2001</h5>
                            </div>
                            <p className="mb-2 pl-4" >менеджмент и ВЭД</p>
                        </div>

                        <hr className='hr2'></hr>
                        <div className='row justify-content-start header-text m-0'>Рекомендации</div>
                        <div className="list-group">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1 pl-4">Университет</h5>
                                <h5 className="mb-1 pr-4 years">2001</h5>
                            </div>
                            <div className='row ml-4 justify-content-start'>
                                <div className="mb-1 text-capitalize">
                                    иванов Иван Иванович</div>
                                <div className="d-flex "><img className="icon-item-t3" src={phone} alt="phone" />
                                    +380661234512</div>
                                <div className="d-flex long-text mb-2"><img className="icon-item-t3" src={email} alt="email" />
                                    ivanov@gmail.com</div>
                            </div>
                        </div>

                        <hr className='hr2'></hr>
                        <div className='row justify-content-start header-text m-0'>Профессиональные навыки</div>
                        <div className="list-group ">
                            <div className="mb-1 pl-4 long-text" >
                                Составление договоров.
                                Расширение клиентской базы.
                                Проведение презентаций.
                                консультирование по телефону.
                                Привел в компанию 7 ключевых клиентов (совокупно до 50% заказов).
                                Создал отдел продаж с нуля. Впоследствии отдел (5 человек) под моим руководством регулярно выполнял план по привлечению новых клиентов и продажам.
                                Разработал и внедрил в компании технологию продаж технически сложного оборудования.
                            </div>
                        </div>
                        <hr className='hr2'></hr>
                        <div className='row justify-content-start header-text m-0'>Личные качества</div>
                        <div className="list-group ">
                            <div className="mb-1 pl-4 long-text" >
                                Здравствуйте. Основные сведения обо мне вы уже знаете из резюме.
                                Могу немного рассказать о себе. Мне … лет,
                                по специальности я работаю уже … года. Получать высшее образование
                                по этой специальности решил осознанно, так как мне нравится
                                профессия и то, что она может дать. Я стараюсь развиваться
                                всесторонне, люблю получать новые знания. Поэтому работа в вашей
                                компании окажется для меня очень полезной. А я, в свою очередь,
                                все свои имеющиеся знания приложу для того, чтобы компания
                                становилась еще перспективнее, а ее доходы росли. Там, где
                                я работал раньше, мне удалось добиться существенных результатов.
                                Прежнее место работы мне очень нравилось,
                                но я хочу продвигаться вперед. Думаю, именно ваша компания мне
                                такую возможность даст
                            </div>
                        </div>
                        <hr className='hr2'></hr>
                        <div className='row justify-content-start header-text m-0'>Хобби</div>
                        <div className="list-group ">
                            <div className="mb-1 pl-4 long-text" >
                                вязание крючком и вышивание крестиком
                            </div>
                        </div>

                    </div>

                    {/* template 4 */}
                    <div className="container-sm" id="main-container-t4" >
                        <div className="row container-t">
                            {/* left-container */}
                            <div className="col col-4" id="left-container-t4">

                                <div className="col header-text">Контакты</div>
                                <div className="col text-capitalize "><img className="icon-item " src={location} alt="location" />
                                    Запорожье</div>
                                <div className="col "><img className="icon-item" src={phone} alt="phone" />
                                    +380661212123</div>
                                <div className="col long-text "><img className="icon-item" src={email} alt="email" />
                                    ivanova_olga@gmail.com</div>

                                <div className="col text-nowrap header-text" >Водительские права
                                    <div className="col main-text">B, C, есть личный авто</div>
                                </div>

                                <div className="col header-text">Гражданство
                                    <div className="col main-text">украинка</div>
                                </div>
                                <div className="col text-nowrap header-text">Семейное положение
                                    <div className="col main-text">замужем, есть дети</div>
                                </div>
                                <div className="col text-nowrap header-text">Желаемая зарплата
                                    <div className="col main-text">500$</div>
                                </div>
                                <div className="col header-text">Занятость
                                    <div className="col main-text">полная, полный день, командировки, готовность на переезд</div>
                                </div>
                                <div className="col header-text">Языки
                                    <div className="col main-text">английский, В1</div>
                                    <div className="col main-text">украинский, С1</div>
                                </div>
                                <div className="col header-text">Армия
                                </div>
                                <div className="col header-text">Хобби
                                    <div className="col main-text">вязание крючком и вышивание крестиком</div>
                                </div>


                            </div>

                            {/* right-container */}
                            <div className="col" id="right-container">
                                <div className="media align-items-center border">
                                    <div className="media-body ">
                                        <div className='row justify-content-center m-0 mark-t4'>
                                            <div className='mr-3 text-capitalize text-break name-text'>иванова</div>
                                            <div className='mr-3 text-capitalize text-break name-text'>Ольга</div>
                                            <div className='mr-3 text-capitalize text-break name-text'>викторовна</div>
                                        </div>
                                        <div className='row justify-content-center m-0 header-text'>менеджер, 27 лет</div>
                                        <div className='row justify-content-center m-0 main-text'>желаемая заработная плата: 20000 грн</div>
                                    </div>
                                    <div className="media-right">
                                        <img className="media-object" id="avatar" src={avatar} alt="avatar" />
                                    </div>
                                </div>
                                <div className="col header-text border box-t4">Опыт работы </div>
                                <div className="list-group ">
                                    <div className="list-group-item ">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">государственная служба</h5>
                                            <h5 className="mb-1 years">2000-2007</h5>
                                        </div>
                                        <p className="mb-1" >менеджер</p>
                                        <small>ведение клиентов, продажи</small>
                                    </div>
                                    <div className="list-group-item ">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">государственная служба</h5>
                                            <h5 className="mb-1 years">2007-2022</h5>
                                        </div>
                                        <p className="mb-1" >бухгалтер</p>
                                        <small>бухгалтерия предприятия</small>
                                    </div>
                                </div>

                                <div className="col header-text border box-t4">Образование</div>
                                <div className="list-group ">
                                    <div className="list-group-item ">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Университет</h5>
                                            <h5 className="mb-1 years">2000</h5>
                                        </div>
                                        <p className="mb-1" >менеджмент и ВЭД</p>
                                        <small>менеджер среднего звена, бакалавр</small>
                                    </div>
                                </div>

                                <div className="col header-text border box-t4">Курсы</div>
                                <div className="list-group ">
                                    <div className="list-group-item ">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Университет</h5>
                                            <h5 className="mb-1 years">2001</h5>
                                        </div>
                                        <p className="mb-1" >менеджмент и ВЭД</p>
                                    </div>
                                </div>

                                <div className="col header-text border box-t4">Рекомендации</div>
                                <div className="list-group ">
                                    <div className="list-group-item ">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Университет</h5>
                                        </div>
                                        <p className="mb-1 text-capitalize" >иванов Иван Иванович</p>
                                        <div >+380661234512</div>
                                        <div >ivanov@gmail.com</div>
                                    </div>
                                </div>

                                <div className="col header-text border box-t4">Профессиональные навыки</div>
                                <div className="list-group ">
                                    <div className="list-group-item ">
                                        <div className="mb-1 long-text" >
                                            Составление договоров.
                                            Расширение клиентской базы.
                                            Проведение презентаций.
                                            консультирование по телефону.
                                            Привел в компанию 7 ключевых клиентов (совокупно до 50% заказов).
                                            Создал отдел продаж с нуля. Впоследствии отдел (5 человек) под моим руководством регулярно выполнял план по привлечению новых клиентов и продажам.
                                            Разработал и внедрил в компании технологию продаж технически сложного оборудования.
                                        </div>
                                    </div>
                                </div>

                                <div className="col header-text border box-t4">Личные качества</div>
                                <div className="list-group ">
                                    <div className="list-group-item ">
                                        <p className="mb-1" >
                                            Здравствуйте. Основные сведения обо мне вы уже знаете из резюме.
                                            Могу немного рассказать о себе. Мне … лет,
                                            по специальности я работаю уже … года. Получать высшее образование
                                            по этой специальности решил осознанно, так как мне нравится
                                            профессия и то, что она может дать. Я стараюсь развиваться
                                            всесторонне, люблю получать новые знания. Поэтому работа в вашей
                                            компании окажется для меня очень полезной. А я, в свою очередь,
                                            все свои имеющиеся знания приложу для того, чтобы компания
                                            становилась еще перспективнее, а ее доходы росли. Там, где
                                            я работал раньше, мне удалось добиться существенных результатов.
                                            Прежнее место работы мне очень нравилось,
                                            но я хочу продвигаться вперед. Думаю, именно ваша компания мне
                                            такую возможность даст
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div >
            );
        }
    };
}
export default Templates;