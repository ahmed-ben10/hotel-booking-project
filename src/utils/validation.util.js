export const textValidation = (params,val) =>{
    const min = params.min;
    const max = params.max;
    const newVal = val.trim();

    if(newVal == ''){
        return 'Dit tekst vak mag niet leeg blijven.';
    }

    if(newVal.length < min  || newVal.length > max ){
        return 'Uw invoer komt niet overeen met onze criteria. ';
    }

    return '';
}

export const mobielValidation = (params,val) =>{
    const max = params.max;
    const newVal = val.trim();
    const isNum = /^\d+$/.test(newVal);

    if(newVal == ''){
        return 'Dit tekst vak mag niet leeg blijven.';
    }

    if(!isNum  || newVal.length  !== max ){
        return 'Voer een geldige mobiele telefoonnummer in. ';
    }
    return '';
}

export const emailValidation = (val) =>{
    const newVal = val.trim();
    const emailRegex = /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/;

    if(newVal == ''){
        return 'Dit tekst vak mag niet leeg blijven.';
    }

    if(!emailRegex.test(newVal)){
        return 'Voer een geldige email in';
    }
    return ''; 
}