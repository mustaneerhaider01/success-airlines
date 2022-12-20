function Article({ title, body }) {
  return (
    <article>
      <h3 className="font-iowan font-bold text-2xl lg:text-3xl mb-2">{title}</h3>
      <p className="text-[#646464] text-justify  lg:text-lg">{body}</p>
    </article>
  );
}

export default Article;
