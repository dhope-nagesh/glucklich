import { BASE_URL, API_END_POINTS } from "../constants/common";

export class ApiService {

    static post(url, data={}, headers={}) {
        return fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    }
    static get(url, headers={}) {
        return fetch(url, {
            method: 'GET',
            headers: headers
        })
    }
}

export class authService {
    static login(loginDetails) {
        console.log(loginDetails)
        const url = BASE_URL + API_END_POINTS['loginUri']
        return ApiService.post(url, data=loginDetails)
    }
}

export class AppService {
    static getUserProfile(token) {
        console.log(token)
        const url = BASE_URL + API_END_POINTS['userProfile']
        return ApiService.get(url, headers= {
            'Authorization': `Token ${token}`,
            'Content-Type': 'application/json',
        })
    }

    static getPointsDetails() {
        const url = BASE_URL + API_END_POINTS['pointDetails']
        return ApiService.get(url)
    }

    static getQuarterDetails() {
        const url = BASE_URL + API_END_POINTS['quarterDetails']
        return ApiService.get(url)
    }

    static getEventDetails() {
        const url = BASE_URL + API_END_POINTS['eventDetails']
        return ApiService.get(url)
    }
}