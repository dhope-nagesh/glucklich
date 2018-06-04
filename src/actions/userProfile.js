import { FETCH_USER_PROFILE } from "../constants/actions";

export function getUserProfileSuccess(data) {
    return {
      type: FETCH_USER_PROFILE,
      data: data
    }
}
   