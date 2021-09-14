import { SORT, FETCH } from "../../constants";
import axios from "axios";

export const sortBy = key => {
  return {
    type: SORT,
    key
  };
};

export const fetchAction = data => {
  return {
    type: FETCH,
    data
  };
};

// Uploaded provided JSON file (Webdev_data.json) to myjson.com to test API call.
//D:/Project/stackline_github/src/data/stackline_frontend_assessment_data_2021.json
export function fetchData() {
  return dispatch => {
    return axios
      .get("https://myjson.dit.upm.es/api/bins/scs")
      .then(res => {
        // console.log("JSON array logged for test purposes:", JSON.parse(res.request.response));
        const data = JSON.parse(res.request.response)[0];
        return dispatch(fetchAction(data));
      })
      .catch(err => {
        console.log(err);
        return dispatch(fetchAction({}));
      });
  };
}
