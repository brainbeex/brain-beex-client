function Footer() {

  return (

    <footer className="bg-gray-900 text-white mt-16">

      <div className="max-w-7xl mx-auto px-6 py-8 text-center">

        <h2 className="text-lg font-semibold mb-2">
          BrainBeex
        </h2>

        <p className="text-gray-400">
          Discover competitions and showcase your talent.
        </p>

        <p className="text-gray-500 mt-4 text-sm">
          © {new Date().getFullYear()} BrainBeex. All rights reserved.
        </p>

      </div>

    </footer>

  );

}

export default Footer;