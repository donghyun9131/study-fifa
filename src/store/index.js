import { createStore } from 'vuex'

export default createStore({
  state: {
    positions: 'GK,SW,RWB,RB,RCB,CB,LCB,LB,LWB,RDM,CDM,LDM,RM,RCM,CM,LCM,LM,RAM,CAM,LAM,RF,CF,LF,RW,RS,ST,LS,LW',
    playerRows: [
      [
        { key: 'empty1', value: '' },
        { key: 'empty2', value: '' },
        { key: '7', value: '' },
        { key: '8', value: '' },
        { key: '16', value: '' },
        { key: 'empty3', value: '' },
        { key: '27', value: '' },
        { key: 'empty4', value: '' },
      ],

      [
        { key: 'empty1', value: '' },
        { key: 'empty2', value: '' },
        { key: '6', value: '' },
        { key: '11', value: '' },
        { key: '15', value: '' },
        { key: '19', value: '' },
        { key: '22', value: '' },
        { key: '26', value: '' },
      ],

      [
        { key: '0', value: '' },
        { key: 'empty1', value: '' },
        { key: '5', value: '' },
        { key: '10', value: '' },
        { key: '14', value: '' },
        { key: '18', value: '' },
        { key: '21', value: '' },
        { key: '25', value: '' },
      ],

      [
        { key: 'empty1', value: '' },
        { key: 'empty2', value: '' },
        { key: '4', value: '' },
        { key: '9', value: '' },
        { key: '13', value: '' },
        { key: '17', value: '' },
        { key: '20', value: '' },
        { key: '24', value: '' },
      ],

      [
        { key: 'empty1', value: '' },
        { key: 'empty2', value: '' },
        { key: '3', value: '' },
        { key: '2', value: '' },
        { key: '12', value: '' },
        { key: 'empty3', value: '' },
        { key: '23', value: '' },
        { key: 'empty4', value: '' },
      ],
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
