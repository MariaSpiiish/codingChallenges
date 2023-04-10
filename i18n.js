function getI18nText({ stringTokens, variables, translations, locale }) {  
    let result = [];
    
    stringTokens.forEach(i => {
        if (Array.isArray(i) && i[0] === '@plural') {
            i.forEach(i => {
               
                if(i.indexOf('#') !== -1) {
                    const key = i.slice(1);
                    result.push[key];
                }
                console.log(key)
                if(i.indexOf('$') !== -1) {
                  
                    const plural = new Intl.PluralRules("ar-EG").select(variables[i.slice(1)]);
                    console.log(translations[locale])
                    // result.push(translations[locale][key][plural])
                }
                
            })
        }
    })
   
    // const plural = new Intl.PluralRules(locale).select()
    // const number = new Intl.NumberFormat(locale).format(number)
    
    // for (let i = 0; i < stringTokens.length; i++) {
        
    //     if ( stringTokens[i].indexOf('#') !== -1) {
           
    //         result.push(translations[locale][stringTokens[i].slice(1)])
    //     }

    //     if ( stringTokens[i].indexOf('@') !== -1) {
           
           
    //     }
        
    // }

    
    return result; // строка  
}

 const stringTokens = [  
    "#price",                          // ключ перевода price  
    " ",                               // неизменяемый текст  
    ["@plural", "#day", "$tripDays"],  // функция плюрализации, в которую передаётся ключ перевода и переменная в качестве числового значения  
    " - ",                             // неизменяемый текст  
    ["@number", "$tripPrice", "USD"]   // функция интернационализации, в которую  передаётся число в качестве переменной и валюта  
];

const variables = {  
    tripDays: 10,  
    tripPrice: 56789.01,  
  }

  const translations = {  
    "ru-RU" : {             // локаль  
      price: "Цена",        // обычный перевод  
      day: {                // c учетом плюральных форм  
          zero: " дней",  
          one: " день",  
          few: " дня",  
          many: " дней",  
          other: " дней",  
      }  
    },  
    "en-US": {  
        price: "Price",  
        day: {  
            one: " day",  
            other: " days",  
            //...  
          }  
    },  
    //...  
  }

  console.log(getI18nText({ stringTokens, variables, translations, locale: "ru-RU" }))