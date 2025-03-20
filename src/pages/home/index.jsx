export default function Home() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState([]);

  const FRAMEWORKS = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
    {
      value: "wordpress",
      label: "WordPress",
    },
    {
      value: "express.js",
      label: "Express.js",
    },
    {
      value: "nest.js",
      label: "Nest.js",
    },
  ];

  const headers = [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "location",
      header: "Location",
    },
    {
      accessorKey: "status",
      header: "Status",
    },
    {
      accessorKey: "balance",
      header: "Balance",
    },
  ];

  const items = [
    {
      id: "1",
      name: "Alex Thompson",
      email: "alex.t@company.com",
      location: "San Francisco, US",
      status: "Active",
      balance: "$1,250.00",
    },
    {
      id: "2",
      name: "Sarah Chen",
      email: "sarah.c@company.com",
      location: "Singapore",
      status: "Active",
      balance: "$600.00",
    },
    {
      id: "3",
      name: "James Wilson",
      email: "j.wilson@company.com",
      location: "London, UK",
      status: "Inactive",
      balance: "$650.00",
    },
    {
      id: "4",
      name: "Maria Garcia",
      email: "m.garcia@company.com",
      location: "Madrid, Spain",
      status: "Active",
      balance: "$0.00",
    },
    {
      id: "5",
      name: "David Kim",
      email: "d.kim@company.com",
      location: "Seoul, KR",
      status: "Active",
      balance: "-$1,000.00",
    },
  ];

  return (
    <div className="rounded-xl">
      <h1>Hello, Vite!</h1>
      <KButton onClick={() => setCount((count) => count + 1)}>
        count is: {count}
      </KButton>
      <KAutocomplete
        label="Test"
        options={FRAMEWORKS}
        placeholder="Find something"
        onValueChange={setValue}
        value={value}
        clearable
      />
      <KInput label="Test" />
      <KTextArea label="Test" />
      <div className="mt-4">
        <KDataTable data={items} columns={headers} />
      </div>
    </div>
  );
}
