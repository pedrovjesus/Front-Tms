import Toolbar from "../../shared/components/toolbar/Toolbar";
import BaseLayout from "../../shared/layouts/BaseLayout";

export const Dashboard = () => {
  return (
    <BaseLayout title="Home" toolBar={<Toolbar showSearchInput />}>
      testando
    </BaseLayout>
  );
};
