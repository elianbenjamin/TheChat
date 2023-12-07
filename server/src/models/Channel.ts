const mongus = require("mongus");

const ChannelSchema = new mongus.Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    description: String,
    date: {
      type: Date,
      default: Date.now,
      index: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
    channelType: {
      type: String,
      enum: ["public", "private", "direct"],
      default: "public",
    },
    members: [
      {
        type: mongus.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    accessControl: [
      {
        user: {
          type: mongus.Schema.Types.ObjectId,
          ref: "User",
        },
        canReadAndWrite: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  {
    versionKey: false,
    strict: "throw",
  }
);

const Channel = mongus.model("channel", ChannelSchema);
module.exports = Channel;
