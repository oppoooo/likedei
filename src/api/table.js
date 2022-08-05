import request from "@/utils/request";

export function getTicketList(params) {
  return request({
    url: "/task-service/task/search",
    method: "get",
    params,
  });
}
