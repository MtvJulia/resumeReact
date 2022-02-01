module.exports = (userData) => {
   console.log("++++++++++++++++++++++++++++++++++++");
  // console.log(userData);
   var obj = JSON.parse(userData);
   console.log(userData);
return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title> 
                  
       </head>
       <body>
       <div className="container">
       <div className="container" id="main-container-t1">
           <div className="row">

               {/* left-container */}
               <div className="col col-4" id="left-container">
                   <img id="avatar" src={avatar} className="rounded mx-auto d-block" alt="avatar" />
                   <div className="row justify-content-start" id='full-name'>
                       <div className="col  name-text">
                       <label for="id_firstName">${userData.firstName+""+userData.firstName}</label>
                       </div>                                   
                   </div>

                   <hr className="style1" />

                   <div className="col header-text">Должность
                       <div className="col main-text">${userData.position}</div>
                   </div>
                   <div className="col header-text">Возраст
                       <div className="col main-text">000</div>
                   </div>
                   <div className="col header-text">Контакты</div>

                   <div className="col"><img className="icon-item" src={location} alt="location" />0</div>
                   <div className="col"><img className="icon-item" src={phone} alt="phone" />0</div>
                   <div className="col"><img className="icon-item" src={email} alt="email" />0</div>

                   <div className="col header-text" >Водительские права
                       <div className="col main-text">B, C, есть личный авто</div>
                   </div>

                   <div className="col header-text">Гражданство</div>
                   <div className="col header-text">Семейное положение</div>
                   <div className="col header-text">Желаемая зарплата</div>
                   <div className="col header-text">Занятость</div>
                   <div className="col header-text">Языки</div>
                   <div className="col header-text">Навыки</div>
                   <div className="col header-text">Армия</div>



               </div>

               {/* right-container */}
               <div className="col" id="right-container">
                   <div className="col header-text border box">Опыт работы </div>
                   <div className="list-group ">
                       <div className="list-group-item ">
                           <div className="d-flex w-100 justify-content-between">
                               <h5 className="mb-1">Рога и копыта</h5>
                               <h5 className="mb-1">2000-2007</h5>
                           </div>
                           <p className="mb-1" >менеджер</p>
                           <small>ведение клиентов, продажи</small>
                       </div>                                    
                       <div className="list-group-item ">
                           <div className="d-flex w-100 justify-content-between">
                               <h5 className="mb-1">Рога и копыта</h5>
                               <h5 className="mb-1">2007-2022</h5>
                           </div>
                           <p className="mb-1" >бухгалтер</p>
                           <small>бухгалтерия предприятия</small>
                       </div>                                    
                   </div>

                   <div className="col header-text border">Образование</div>
                   <div className="col header-text border">Курсы</div>
                   <div className="col header-text border">Рекомендации</div>
                   <div className="col header-text border">Личные качества</div>
                   <div className="col header-text border">Хобби</div>

               </div>
               <button onClick={this.createAndDownloadPdf}>Download PDF</button>
           </div>
       </div>

   </div>
       </body>
    </html>
    `;
};