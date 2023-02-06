import { useQuery } from "@/hooks/useQuery";
import HeroBanner from "@/Components/ui/HeroBanner";

export default function Shop() {
  const { data } = useQuery("shop_hero_banner");
  return (
    <div>
      <HeroBanner props={data[0]} />
    </div>
  );
}
