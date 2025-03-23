export default function AlertPage() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">Alert</h1>
        <p>
          An alert component that can be used for anything alert-specific case
        </p>
      </div>
      <div className="p-4 rounded-xl bg-background border border-primary/10 grid grid-cols-2 gap-4">
        <KAlert
          title="Informational alert"
          description="This is an informational alert"
        />
        <KAlert
          title="Primary alert"
          description="This is an primary alert"
          variant="primary"
        />
        <KAlert
          title="Secondary alert"
          description="This is an secondary alert"
          variant="secondary"
        />
        <KAlert
          title="Success alert"
          description="This is an success alert"
          variant="success"
        />
        <KAlert
          title="Destructive alert"
          description="This is a destructive alert"
          variant="destructive"
        />
      </div>
    </div>
  );
}
