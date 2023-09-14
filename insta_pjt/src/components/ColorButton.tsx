type Props = {
  text: string;
  onClick: () => void;
  size?: 'small'| 'big';
}

export default function ColorButton({text, onClick, size = 'small'}: Props) {
  return (
    <div className="rounded-md bg-gradient-to-bt from-fuchsia-600 via-rose-500 to-amber-300 p-{0.15rem}">
      <button onClick={onClick} className="bg-white rounded-sm text-base p-{0.3rem} hover:opacity-90 transition-opacity">
        {text}
      </button>
    </div>
  )
}