import { PageTemplate } from "@/components/PageTemplate";

export default function DashboardPage() {
  return (
    <PageTemplate 
      title="Dashboard" 
      activeMenuItem="Dashboard"
      showSearch={true}
      searchPlaceholder="Search patients by name or number"
    >
      {/* Dashboard content goes here */}
      <div className="flex flex-col gap-6">
      </div>
    </PageTemplate>
  );
}