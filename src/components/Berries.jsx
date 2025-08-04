import LogoBerries from '../assets/Logoberries.png';

export const Berries = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-white bg-no-repeat bg-[center_30%] bg-[length:270px_440px] px-7" style={{ backgroundImage: `url(${LogoBerries})` }}>
      <div className="max-w-sm p-2 bg-opacity-80 rounded-lg relative text-center">
        <h2 className="text-xl tracking-[0.3em] font-bold mb-8 text-white">IT BERRIES</h2>

        <p className="text-sm leading-relaxed text-white text-justify">
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est. Morbi commodo, eros in dignissim tempus, lacus odio rutrum augue, in semper sem magna quis tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit. Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet varius turpis vel pharetra. Ut ante justo, consequat vitae elementum tempor, accumsan nec eros.
        </p>

        <div className="mt-6 pt-6 flex items-center justify-center gap-6">
          <span className="block h-6 border-l-2 border-white"></span>
          <span className="text-sm font-semibold text-white">MORE</span>
          <span className="block h-6 border-r-2 border-white"></span>
        </div>

      </div>
    </section>
  )
}
