function SocialLink({ source, title, link }) {
  return (
    <a href={link || "#"} className="flex items-center space-x-2">
      <img src={`/img/${source}`} alt="" />
      <h3 className="text-white">{title}</h3>
    </a>
  );
}

export default SocialLink;
