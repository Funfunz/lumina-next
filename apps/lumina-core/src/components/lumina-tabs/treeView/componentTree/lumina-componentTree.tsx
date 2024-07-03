import { IComponentData } from "@/data/data";
import { LuminaTreeBranch } from "../treeBranch/lumina-treeBranch";


export const LuminaComponentTree = ({ data }: { data: IComponentData[] }) => {
  if (!data) return null;
  return (
    <>
      {data.sort(
        (a, b) => {
          if (a.order < b.order) {
            return -1;
          } else if (a.order > b.order) {
            return 1;
          }
          return 0;
        }
      ).map((dataItem, index) => (
        <LuminaTreeBranch key={dataItem.id} data={dataItem} noUp={index === 0} noDown={index === data.length - 1} />
      ))}
    </>
  );
};
