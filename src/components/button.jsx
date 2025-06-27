export default function Button({
  text,
  onClick,
  onClickArgs = [],
  buttonColor = "bg-gray-800",
  hoverButtonColor = "hover:bg-gray-700",
}) {
  return (
    <button
      className={`px-6 py-3 rounded-lg shadow-lg font-medium text-white transition-colors duration-200 hover:cursor-pointer ${buttonColor} ${hoverButtonColor}`}
      onClick={() => onClick(...onClickArgs)}
    >
      {text}
    </button>
  );
}
