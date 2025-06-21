import Container from "../../../../components/Container";

const AboutPage = () => {
  return (
    <div className="bg-white text-gray-800">
      <Container className="max-w-6xl lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-6 text-center text-darkColor">
          About WearHaus
        </h1>
        <p className="mb-6 text-lg leading-relaxed">
          Welcome to <strong>WearHaus</strong>, your premier destination for thoughtfully curated fashion that effortlessly blends modern style with ultimate comfort. Founded with a passion for quality and an eye for the latest trends, we&apos;ve dedicated ourselves to bringing you a distinctive collection that elevates your everyday wardrobe.
        </p>
        <p className="mb-6 text-lg leading-relaxed">
          Our mission at <strong>WearHaus</strong> is to empower you to express your unique personality through clothing that feels as good as it looks. We meticulously select each piece, focusing on exceptional fabrics, versatile designs, and timeless appeal, ensuring every item in our collection is a true wardrobe asset.
        </p>
        <p className="text-lg leading-relaxed">
          We believe that great style should be accessible and inspiring. Join the <strong>WearHaus</strong> community and discover a seamless shopping experience, where fashion meets convenience and your next favorite piece awaits. Thank you for choosing <strong>WearHaus</strong> to be a part of your style journey.
        </p>
      </Container>
    </div>
  );
};

export default AboutPage;