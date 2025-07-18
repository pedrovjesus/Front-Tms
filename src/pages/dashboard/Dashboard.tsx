import ListTools from "../../shared/components/ListTools/ListTools";
import BaseLayout from "../../shared/layouts/BaseLayout";

export const Dashboard = () => {
  return (
    <BaseLayout title="Home" toolBar={<ListTools showSearchInput />}>
      testando
    </BaseLayout>
  );
};
