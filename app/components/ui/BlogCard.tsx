export default function BlogCard() {
  return (
    <div className="rounded-3xl shadow-md overflow-hidden">
      <div className="relative h-80 w-full">
        <img
          src="https://picsum.photos/500/300"
          alt="contacts"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white/70 to-transparent"></div>
      </div>

      <div className="px-6 pb-6 pt-3 bg-white">
        <p className="text-TextSecondary text-p-mobile">June 12, 2021</p>
        <p className=" text-p-desktop">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          vehicula, libero nec ultricies ultricies
        </p>
      </div>
    </div>
  );
}
