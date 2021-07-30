const axios = require('axios');

async function getStates() {
    let STATES = await axios({
        method: 'get',
        url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states',
        headers: {
            'accept': 'application/json',
            'Accept-Language': 'en_US',
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
        }
    })
    // console.log(STATES.data.states)
    return STATES.data.states;
}

async function getDistricts(stateId) {
    let DISTRICTS = await axios({
        method: 'get',
        url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${stateId}`,
        headers: {
            'accept': 'application/json',
            'Accept-Language': 'en_US',
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
        }
    })
    // console.log(DISTRICTS.data.districts)
    return DISTRICTS.data.districts;

}
async function getByAppointmentListByPin(pin, date) {
    let AppByPin = await axios({
        method: 'get',
        url: 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=' + pin + '&date=' + date,
        headers: {
            'accept': 'application/json',
            'Accept-Language': 'en_US',
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
        }
    })
    // console.log(AppByPin.data)
    if (AppByPin.data.sessions.length) {
        return AppByPin.data.sessions;
    } else {
        return {
            message: "No Record Found"
        }
    }
}

module.exports = {
    getStates,
    getDistricts,
    getByAppointmentListByPin
}
