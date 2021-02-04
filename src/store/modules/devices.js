import { discoverDevices } from '@/services/magic'

const state = {
	devices: []
}

const mutations = {
	setDevices(state, devices) {
		state.devices = devices
	},
}

const actions = {
	async discoverDevices({ commit }) {
    let devices = await discoverDevices()

    commit('setDevices', devices)
    
    console.log(devices)
	}
}

export default {
  state,
  mutations,
  actions
}
