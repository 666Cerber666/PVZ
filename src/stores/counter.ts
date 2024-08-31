
import { defineStore } from 'pinia';

export const useVznStore = defineStore('vznStore', {
  state: () => ({
    vzns: [
      { vzNumber: "132313", sender: "Цех 01 / участок Цеха 01", receiver: "Цех 02 / участок Цеха 02", issueDate: "15.06.2024" },
      { vzNumber: "7063041", sender: "Цех 01", receiver: "Цех 02", issueDate: "15.06.2024" },
      { vzNumber: "7063041", sender: "Цех 01", receiver: "Цех 02", issueDate: "15.06.2024" },
      { vzNumber: "7063041", sender: "Цех 01", receiver: "Цех 02", issueDate: "15.06.2024" },
      { vzNumber: "7063041", sender: "Цех 01", receiver: "Цех 02", issueDate: "15.06.2024" },
      { vzNumber: "7063041", sender: "Цех 01", receiver: "Цех 02", issueDate: "15.06.2024" },
    ]
  })
});
