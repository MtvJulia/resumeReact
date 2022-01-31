import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';


import './Template1.css';

import avatar from '../../../images/avatar.png';
import location from '../../../images/location.png';
import phone from '../../../images/phone.png';
import email from '../../../images/email.png';


class Template1 extends React.Component {

    constructor(props) {

        super(props);

        //Начальное состояние состояния (state)
        this.state = {
            userData: null
        }

        this.nameUserData = "";
        // this.educArray = [];
        this.API_ADDRESS = "http://localhost:55555/existinguserdata";
    }

    createAndDownloadPdf = () => {
        console.log(this.state);
        var uData = this.state;

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: uData,
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
                this.setState({
                    userData: data
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
                    <div className="container-sm" id="main-container-t1" >
                        <div className="row container-t1">

                            {/* left-container */}
                            <div className="col col-4" id="left-container">
                                <img id="avatar" src={this.imageFromDB} className="rounded mx-auto d-block" alt="avatar" />
                                <div className="row justify-content-start" id='full-name'>
                                    <div className="mr-3 text-capitalize text-break name-text">{this.state.userData.firstName}</div>
                                    <div className="mr-3 text-capitalize name-text">{this.state.userData.middleName}</div>
                                    <div className="mr-3 text-capitalize name-text">{this.state.userData.lastName}</div>
                                </div>

                                <hr className="style1" />

                                <div className="col header-text">Должность
                                    <div className="col main-text">{this.state.userData.position}</div>
                                </div>
                                <div className="col header-text">Возраст
                                    <div className="col main-text">{this.state.userData.birthOfDate.substr(0, 10)}</div>
                                </div>
                                <div className="col header-text">Контакты</div>

                                <div className="col text-capitalize "><img className="icon-item" src={location} alt="location" />
                                    {this.state.userData.сityOfResidence}</div>
                                <div className="col "><img className="icon-item" src={phone} alt="phone" />
                                    {this.state.userData.phone}</div>
                                <div className="col long-text "><img className="icon-item" src={email} alt="email" />
                                    {this.state.userData.email}</div>

                                <div className="col text-nowrap header-text" >Водительские права
                                    <div className="col main-text">B, C, есть личный авто</div>
                                </div>

                                <div className="col header-text">Гражданство
                                    <div className="col main-text">{this.state.userData.nationality}</div>
                                </div>
                                <div className="col text-nowrap header-text">Семейное положение
                                    <div className="col main-text">замужем, есть дети</div>
                                </div>
                                <div className="col text-nowrap header-text">Желаемая зарплата
                                    <div className="col main-text">{this.state.userData.desiredSalary + " " + this.state.userData.currency}</div>
                                </div>
                                <div className="col header-text">Занятость
                                    <div className="col main-text">{this.state.userData.employment + "," + this.state.userData.schedule + "," + this.state.userData.businessTrip + "," + this.state.userData.relocate}</div>
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
                                <div className="col header-text border box">Опыт работы </div>
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

                                <div className="col header-text border box">Образование</div>
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

                                <div className="col header-text border box">Курсы</div>
                                <div className="list-group ">
                                    <div className="list-group-item ">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Университет</h5>
                                            <h5 className="mb-1 years">2001</h5>
                                        </div>
                                        <p className="mb-1" >менеджмент и ВЭД</p>
                                    </div>
                                </div>

                                <div className="col header-text border box">Рекомендации</div>
                                <div className="list-group ">
                                    <div className="list-group-item ">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">{this.state.userData.company}</h5>
                                        </div>
                                        <p className="mb-1 text-capitalize" >{this.state.userData.personRecommending}</p>
                                        <div >{this.state.userData.phoneCompany}</div>
                                        <div >{this.state.userData.emailCompany}</div>
                                    </div>
                                </div>

                                <div className="col header-text border box">Профессиональные навыки</div>
                                <div className="list-group ">
                                    <div className="list-group-item ">
                                        <div className="mb-1 long-text" >
                                            {this.state.userData.professionalSkills}
                                        </div>
                                    </div>
                                </div>

                                <div className="col header-text border box">Личные качества</div>
                                <div className="list-group ">
                                    <div className="list-group-item ">
                                        <p className="mb-1" >
                                            {this.state.userData.personalQualities}
                                        </p>
                                    </div>
                                </div>

                                <div className="col header-text border box">Хобби</div>
                                <div className="list-group ">
                                    <div className="list-group-item ">
                                        <p className="mb-1" >
                                            {this.state.userData.hobby}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <button onClick={this.createAndDownloadPdf}>Download PDF</button>
                    </div>
                </div>
            );
        }
    };
}
export default Template1;