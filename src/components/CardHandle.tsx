"use client";
import { useEffect, useState } from "react";
import { gettingDetaileById } from "@/lib/FavouriteActions";
import { DataDetailType } from "@/lib/fetchData";
import Card from "./Card";

const CardHandle = ({ dataId }: { dataId: string }) => {
  const [dataToShow, setDataToShow] = useState<DataDetailType | null>(null);
  useEffect(() => {
    const favFunction = async () => {
      const data: DataDetailType = await gettingDetaileById(dataId);
      setDataToShow(data);

      console.log(data);
      console.log(dataToShow);
    };
    favFunction();
  });
  if (!dataToShow) return;
  return (
    <div>
      <Card key={dataToShow.id} {...dataToShow} />
    </div>
  );
};

export default CardHandle;
