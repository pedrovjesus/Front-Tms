import DetailsTools from "../../shared/components/detail-tools/DetailTools";
import BaseLayout from "../../shared/layouts/BaseLayout";

export const Dashboard = () => {
  return (
    <BaseLayout title="Home" toolBar={<DetailsTools showSaveAndBackButton />}>
      testando
    </BaseLayout>
  );
};
