import {getData} from "@/api/data"

const state = {
	data: {}
}

const mutations = {
	setData(state, data) {
		state.data = data
	}
}
const actions = {
	updateData({
		commit
	}) {
		getData().then(res => {
			const fhList = res.data.fhList
			const countList = res.data.countList
			const data = {}
			fhList.forEach(fh => {
				const countData = countList.filter(item => {
					return item.fhId == fh.deptId
				})
				data[fh.deptName] = {
					id: fh.deptId,
					orderNum: fh.orderNum,
					name: fh.deptName,
					communtCount: countData[0].communtCount,
					userCount: countData[0].userCount,
					dhUserCount: countData[0].dhUserCount,
					walletCount: countData[0].walletCount,
					sjyhCpunt: countData[0].sjyhCpunt,
					transactionCount: countData[0].transactionCount,
					transactionSum: countData[0].transactionSum
				}
			});
			commit('setData', data)
		})
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}
