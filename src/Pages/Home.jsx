import { Fragment } from "react";
import Slider from "@/Components/Slider/Slider";
import { useQuery } from "../hooks/useQuery";

export default function Home() {
  const { data } = useQuery("plants");
  return (
    <Fragment>
      <div>
        <Slider props={data} />
      </div>
    </Fragment>
  );
}
