import givingTreeImage from '../assets/tree.jpg';
export default function Tree() {
  return (<>
    <section className="relative min-h-[140vh] flex items-center justify-center overflow-hidden">
        <img
          src= {givingTreeImage}
          alt="The Digital Giving Tree"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />

        {/* Title Overlay */}
        <div className="relative z-10 text-center px-4 pb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 drop-shadow-lg">
            The Digital Giving Tree
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 max-w-2xl mx-auto drop-shadow">
            Connect with local charities and make wishes come true
          </p>
        </div>
      </section>
  </>
  )
}