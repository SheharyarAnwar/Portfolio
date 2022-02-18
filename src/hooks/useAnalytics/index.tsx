import { useRouter } from "next/router";
import { useEffect } from "react";
const Index = () => {
  const router = useRouter();
  const handleRouteChanges = (url: string) => {
    //@ts-ignore
    window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
      page_path: url,
    });
  };
  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChanges);
    return () => router.events.off("routeChangeComplete", handleRouteChanges);
  }, []);
  return <></>;
};
export default Index;
