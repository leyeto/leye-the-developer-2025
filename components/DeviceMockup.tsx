import Image from "next/image";

type ScreenInsets = {
  top: string;
  right: string;
  bottom: string;
  left: string;
};

type Props = {
  image: string;
  screenInsets?: ScreenInsets;
};

export default function DeviceMockup({
  image,
  screenInsets = { top: "11%", right: "10%", bottom: "10%", left: "10%" },
}: Props) {
  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* MacBook frame */}
      <Image
        src="/images/mockups/macbook.svg"
        alt="MacBook mockup"
        width={800}
        height={500}
        className="w-full"
      />

      {/* Website screenshot */}
      <div
        className="absolute overflow-hidden rounded-md"
        style={{
          top: screenInsets.top,
          right: screenInsets.right,
          bottom: screenInsets.bottom,
          left: screenInsets.left,
        }}
      >
        <Image
          src={image}
          alt="Website screenshot"
          fill
          className="object-fill"
        />
      </div>
    </div>
  );
}
