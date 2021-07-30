### 🔗 Installation

```
npm install node-cowin-api
```

### Available methods:

- **getStates** - _Get all states in India_
- **getDistricts** - _Get get all the districts of state based on stateId_
- **getByAppointmentListByPin** - _Get planned vaccination sessions on a specific date in a given pin_

## ⚡️ Usage:

I have added all the [Co-WIN public API](https://apisetu.gov.in/public/marketplace/api/cowin/cowin-public-v2) methods except Authentication. Will be adding them ASAP, Maybe you can contribute too.

```
const { 
  getStates, 
  getDistricts, 
  getByAppointmentListByPin 
  } = require('node-cowin-api')
```

- Write asynchronous function

```
async function getData() {
    const allStates = await getStates()
    console.log(allStates)
    const districts = await getDistricts(11)
    console.log(districts)
    const appointments = await getByAppointmentListByPin(360001, '30-07-2021')
    console.log(appointments)
}

getData()
```
