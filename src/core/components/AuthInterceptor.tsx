import axios from "axios";
import { useState } from "react";

import Loader from "../../shared/components/UI/Loader";
/**
 * @description Intercepter component for loading and add auther to the request headers
 */
function AuthInterceptor({ children }: any) {

  const [loading, setLoading] = useState<boolean>(false);
  /**
   * @description intercepting the request
   */
  axios.interceptors.request.use((req: any) => {
    setLoading(true);
    axios.defaults.headers.common['author'] = "Tanmay Patel";
    return req;
  })
  /**
   * @description intercepting the response
   */
  axios.interceptors.response.use((res: any): any => {
    setLoading(false);
    return res;
  });
  /**
   * @description loading condition
   */
  if (loading) {
    return <Loader />
  };

  return (
    <div>
      {children}
    </div>
  );
};

export default AuthInterceptor;
