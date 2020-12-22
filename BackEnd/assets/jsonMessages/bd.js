module.exports = {
  db: {
    //falta de data
    noRecords: {
      msg: "No Records Found",
      message: {
        eng: "No Records Found",
      },
      status: 404,
      success: false,
    },

    //erro de BD
    dbError: {
      msg: "Error on the BD",
      message: {
        eng: "Invalid Data",
      },
      success: false,
      status: 400,
    },

    //sucesso de update
    successUpdate: {
      msg: "success",
      message: {
        eng: "Records updated with success",
      },
      success: true,
      status: 200,
    },

    //sucesso de insercao
    successInsert: {
      msg: "success",
      message: {
        eng: "Records inserted with success",
      },
      success: true,
      status: 201,
    },

    //sucesso de delete
    successDelete: {
      msg: "success",
      message: {
        eng: "Records deleted with success",
      },
      success: true,
      status: 200,
    },

    //sucesso de deleteU
    successDeleteU: {
      msg: "success",
      message: {
        eng: "Records updated with success",
      },
      success: true,
      status: 200,
    },

    //emails duplicados
    duplicateEmail: {
      msg: "emailDuplicated",
      message: {
        eng: "Email already resgistered",
      },
      success: false,
      err_code: 1,
      err_message: "email ja existente",
      status: 409,
    },

    //falta de preenchimento
    requiredData: {
      msg: "dataMissing",
      message: {
        eng: "Required fields are missing",
      },
      success: false,
      status: 400,
    },
  },
};
