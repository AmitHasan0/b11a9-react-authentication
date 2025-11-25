import { useLoaderData, useParams } from "react-router";
import DetailCard from "../components/DetailCard";
import { useEffect, useState } from "react";

const AppDetails = () => {
  const apps = useLoaderData();
  const [allApp, setAllApp] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const appDetails = apps.find((app) => app.id == id);
    setAllApp(appDetails);
  }, [apps, id]);
  return (
    <div>
      <DetailCard allApp={allApp}></DetailCard>
    </div>
  );
};

export default AppDetails;
