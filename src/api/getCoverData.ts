import axios from "axios";
import { getElementById } from "../utils/getElementById";

export const getCoverData = async () => {
  const apiHtmlElement = getElementById("coverDataApi") as HTMLElement;
  if (!apiHtmlElement) return;

  const api_host_link = apiHtmlElement?.getAttribute("apiHostLink");

  if (!api_host_link) {
    console.error("no element founded with data attribute with host link");
    return;
  }

  return axios.get(api_host_link);
};
