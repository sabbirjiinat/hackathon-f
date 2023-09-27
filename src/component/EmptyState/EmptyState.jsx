const EmptyState = ({ title, emoji }) => {
  return (
    <div
      className={`w-full h-[200px] flex justify-center items-center ${
        emoji ? "flex-row gap-4" : "flex-col "
      }`}
    >
      <h1 className="text-4xl font-semibold text-white">{title}</h1>
      {emoji && <h1>{emoji}</h1>}
    </div>
  );
};

export default EmptyState;
