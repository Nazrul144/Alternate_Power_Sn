const CoverageMap = () => (
  <div className="w-full h-96 my-8 rounded-lg overflow-hidden shadow-lg">
    <iframe
      src="https://www.google.com/maps/embed?pb=...YourMapCoordinatesHere..."
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      title="Coverage Area Map"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
);

export default CoverageMap;
