import Api from "@/lib/axios";

export const postCall = (url: string, data: any) => {
  return async function () {
    try {
      const response = await Api.post(url, data);
      return response;
    } catch (error) {
      throw error;
    }
  };
};

export const getCall = (url: string, data: any) => {
  return async function () {
    try {
      const response = await Api.get(url, {...data});
      return response;
    } catch (error) {
      throw error;
    }
  };
};

export const updateCall= (url: string, data: any) => {
  return async function () {
    try {
      const response = await Api.put(url, data);
      return response;
    } catch (error) {
      throw error;
    }
  };
};
export const deleteCall = (url: string, data: any) => {
  return async function () {
    try {
      const response = await Api.delete(url, data);
      return response;
    } catch (error) {
      throw error;
    }
  };
};