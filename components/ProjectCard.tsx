import DeviceMockup from "./DeviceMockup";
import Link from "next/link";
import Button from "./Button";

type Props = {
  title: string;
  description: string;
  image: string;
  link?: string;
};

export default function ProjectCard({
  title,
  description,
  image,
  link,
}: Props) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-gray-900 p-6 shadow-sm hover:shadow-md transition">
      <DeviceMockup image={image} />

      <div className="mt-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-zinc-600">{description}</p>

        {link && (
          <Link
            href={link}
            target="_blank"
            className="inline-block mt-4 text-sm font-medium hover:underline"
          >
            <Button variant="outline">View project</Button>
          </Link>
        )}
      </div>
    </div>
  );
}
