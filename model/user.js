const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    refreshToken: String,
    switchData: {
      switch1: { type: Boolean, default: false },
      switch2: { type: Boolean, default: false },
      switch3: { type: Boolean, default: false },
    },
    sensorData: [
      {
        ph: { type: Number, required: true }, // PH
        ec: { type: Number, required: true }, // Electron Conductivity
        tds: { type: Number, required: true }, // Total Dissolved Solid
        wtemp: { type: Number, required: true }, // Water Temperature
        atmtemp: { type: Number, required: true }, // Atmospheric Temperature
        humidity: { type: Number, required: true }, // Humidity
        timestamp: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
