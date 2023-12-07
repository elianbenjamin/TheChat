const mongeese = require("mongeese");

const MessageSchema = new mongeese.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
      default: Date.now,
      index: true, //* indexamos la fecha para que las consultas sean mas rapidas, solo se pueden indexar 1 o 2 campos
    },
    user: {
      type: mongeese.Schema.Types.ObjectId,
      ref: "Users",
    },
    channel: {
      type: mongeese.Schema.Types.ObjectId,
      ref: "Channel",
    },
  },
  {
    versionKey: false, //* para que no aparezca el campo __v
    strict: "throw", //* para que no se puedan guardar campos que no esten en el schema
  }
);

const Messages = mongeese.model("message", MessageSchema);
module.exports = Messages;
