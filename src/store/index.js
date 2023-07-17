import { createStore } from 'vuex'

export default createStore({
  state: {
    positions: 'GK,SW,RWB,RB,RCB,CB,LCB,LB,LWB,RDM,CDM,LDM,RM,RCM,CM,LCM,LM,RAM,CAM,LAM,RF,CF,LF,RW,RS,ST,LS,LW',
    playerRows: [
      [
        { position: 'empty1', spId: '' },
        { position: 'empty2', spId: '' },
        { position: '7', spId: '' },
        { position: '8', spId: '' },
        { position: '16', spId: '' },
        { position: 'empty3', spId: '' },
        { position: '27', spId: '' },
        { position: 'empty4', spId: '' },
      ],

      [
        { position: 'empty1', spId: '' },
        { position: 'empty2', spId: '' },
        { position: '6', spId: '' },
        { position: '11', spId: '' },
        { position: '15', spId: '' },
        { position: '19', spId: '' },
        { position: '22', spId: '' },
        { position: '26', spId: '' },
      ],

      [
        { position: '0', spId: '' },
        { position: '1', spId: '' },
        { position: '5', spId: '' },
        { position: '10', spId: '' },
        { position: '14', spId: '' },
        { position: '18', spId: '' },
        { position: '21', spId: '' },
        { position: '25', spId: '' },
      ],

      [
        { position: 'empty1', spId: '' },
        { position: 'empty2', spId: '' },
        { position: '4', spId: '' },
        { position: '9', spId: '' },
        { position: '13', spId: '' },
        { position: '17', spId: '' },
        { position: '20', spId: '' },
        { position: '24', spId: '' },
      ],

      [
        { position: 'empty1', spId: '' },
        { position: 'empty2', spId: '' },
        { position: '3', spId: '' },
        { position: '2', spId: '' },
        { position: '12', spId: '' },
        { position: 'empty3', spId: '' },
        { position: '23', spId: '' },
        { position: 'empty4', spId: '' },
      ],
    ],
  },
  getters: {
  },
  mutations: {
    resetData(state) {
      state.playerRows = [
        [
          { position: 'empty1', spId: '' },
          { position: 'empty2', spId: '' },
          { position: '7', spId: '' },
          { position: '8', spId: '' },
          { position: '16', spId: '' },
          { position: 'empty3', spId: '' },
          { position: '27', spId: '' },
          { position: 'empty4', spId: '' },
        ],

        [
          { position: 'empty1', spId: '' },
          { position: 'empty2', spId: '' },
          { position: '6', spId: '' },
          { position: '11', spId: '' },
          { position: '15', spId: '' },
          { position: '19', spId: '' },
          { position: '22', spId: '' },
          { position: '26', spId: '' },
        ],

        [
          { position: '0', spId: '' },
          { position: '1', spId: '' },
          { position: '5', spId: '' },
          { position: '10', spId: '' },
          { position: '14', spId: '' },
          { position: '18', spId: '' },
          { position: '21', spId: '' },
          { position: '25', spId: '' },
        ],

        [
          { position: 'empty1', spId: '' },
          { position: 'empty2', spId: '' },
          { position: '4', spId: '' },
          { position: '9', spId: '' },
          { position: '13', spId: '' },
          { position: '17', spId: '' },
          { position: '20', spId: '' },
          { position: '24', spId: '' },
        ],

        [
          { position: 'empty1', spId: '' },
          { position: 'empty2', spId: '' },
          { position: '3', spId: '' },
          { position: '2', spId: '' },
          { position: '12', spId: '' },
          { position: 'empty3', spId: '' },
          { position: '23', spId: '' },
          { position: 'empty4', spId: '' },
        ],
      ]
    }
  },
  actions: {
  },
  modules: {
  }
})
