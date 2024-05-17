import Link from 'next/link';

export const Navigation: React.FC = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about-us">About us</Link>
        </li>
        <li>
          <Link href="/grab-and-go">Grad & go</Link>
        </li>
        <li>
          <Link href="/delivery">Delivery</Link>
        </li>
        <li>
          <Link href="/catering-and-events">Catering & events</Link>
        </li>
        <li>
          <Link href="/contact-us">Contact us</Link>
        </li>
      </ul>
    </div>
  );
};
