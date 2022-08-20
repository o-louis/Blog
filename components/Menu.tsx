import Link from 'next/link';

const Menu = () => {
  const entries = ['articles', 'about'];
  return (
    <nav>
      <ul className="rounded-full flex capitalize gap-x-9 px-7 py-1 border border-gray-600 shadow-md text-md font-medium">
        {entries.map((entry) => (
          <li key={entry} className=" hover:transition-all hover:text-tertiary">
            <Link href={`/${entry}`}>{entry}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
