import { PageTemplate } from "@/components/PageTemplate";

export default function SettingsPage() {
  return (
    <PageTemplate 
      title="Settings" 
      activeMenuItem="Settings"
      showSearch={false}
    >
      <div className="flex flex-col gap-6">
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Settings</h2>
          <p className="text-gray-600">Settings content coming soon...</p>
        </div>
      </div>
    </PageTemplate>
  );
}