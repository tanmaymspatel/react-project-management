import axios from "axios";
import { useState } from "react";
import Loader from "../../shared/components/UI/Loader";

function AuthInterceptor({ children }: any) {

  const [loading, setLoading] = useState<boolean>(false)

  axios.interceptors.request.use((req: any) => {
    setLoading(true);
    axios.defaults.headers.common['author'] = "Tanmay Patel";
    return req;
  })

  axios.interceptors.response.use((res: any): any => {
    setLoading(false);
    return res;
  });

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
