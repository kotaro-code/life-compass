type PrimaryButtonProps = {
  text: string;
};

export default function PrimaryButton({
  text,
}: PrimaryButtonProps) {
  return (
    <button
      className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
    >
      {text}
    </button>
  );
}