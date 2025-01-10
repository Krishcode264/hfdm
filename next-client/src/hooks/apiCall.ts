import { AxiosError, type AxiosResponse } from "axios";
import { useState } from "react";

interface UseApiCallProps {
  apiCall: ()=> Promise<any>;
}

export const useApiCall = ({ apiCall }: UseApiCallProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [responseData, setResponseData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess,setIsSuccess]=useState(false)

  const callApi = async () => {
    setLoading(true); 
    setError(null); 

    try {
      const result = await apiCall();

      setResponseData(result);
      setIsSuccess(true)
    } catch (err) {
      if (err instanceof AxiosError) setError(err.response?.data.error);
      else setError("there issue with the data ")
    } finally {
      setLoading(false);
    }
  };

  return { loading, responseData, error, callApi, isSuccess };
};
