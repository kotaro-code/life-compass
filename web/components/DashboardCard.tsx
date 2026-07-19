type DashboardCardProps = {
  title: string;
  value: string;
};

export default function DashboardCard({
  title,
  value,
}: DashboardCardProps) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="text-gray-500">
        {title}
      </h2>

      <p className="mt-3 text-3xl font-bold">
        {value}
      </p>
    </div>
  );
}