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

  return (
    <div className="p-4 rounded-xl m-8">
      <h1>Hello, Vite!</h1>
      <KButton onClick={() => setCount((count) => count + 1)}>
        count is: {count}
      </KButton>
      <KAutocomplete
        label="Test"
        options={FRAMEWORKS}
        placeholder="Find something"
        isLoading={false}
        onValueChange={setValue}
        value={value}
        disabled={false}
      />
      <KInput type="text" label="Test" />
    </div>
  );
}
