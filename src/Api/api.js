import axios from "axios"

const instanceAx = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{'API-KEY': 'b9327212-b8d3-4fc5-a951-7732f4aa6fdd'},
    withCredentials:true
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 20) {
        return instanceAx.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

    userFollow(userId){
        return instanceAx.post(`follow/${userId}`)
            .then(response => response.data)
    },
    userUnfollow(userId){
        return instanceAx.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    getUserProfile(userId){
        return instanceAx.get(`profile/${userId}`)
            .then(response => response.data)
    }

}
export const statusAPI = {
    getUserStatus(userId){
        return instanceAx.get(`profile/status/${userId}`).then(response=> response.data);
    }
}

export const authAPI = {
    authMe(){
        return instanceAx.get(`auth/me`).then(response => response.data);
    }
}

