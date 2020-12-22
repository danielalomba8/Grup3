module.export = {
    //erro no envio do email para BD
    mail:{
        mailError:{
            msg : 'Error',
            message:{
                eng:'Email not sent'
            },
            status:204,
            success:false
        },

        //sucesso de envio
        mailSent:{
            msg : 'Success',
            message:{
                eng:'Email sent'
            },
            success:true,
            status:501,
         },

         //erro de servidor
         serverError:{
            msg : 'Server Error',
            message:{
                eng:'Unexpected Error'
            },
            success:true,
            status:503,
         },

         //required data
         requiredData:{
            msg : 'dataMissing',
            message:{
                eng:'Required fields are missing'
            },
            success:false,
            status:400,
         },
         //colocar erros de email abaixo  - continuar
         //....
    },   
};