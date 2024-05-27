export function getPostData(markdown) {
  const charactersBetweenGroupedHyphens = /^---([\s\S]*?)---/;
  const body = markdown.replace(charactersBetweenGroupedHyphens, '').trim();
  const metadataMatched = markdown.match(charactersBetweenGroupedHyphens);
  const metadata = metadataMatched[1];

  if (!metadata) {
    return {};
  }

  const metadataLines = metadata.split("\n");
  const head = metadataLines.reduce((accumulator, line) => {
    const [key, ...value] = line.split(":").map((part) => part.trim());

    if (key)
      accumulator[key] = value[1] ? value.join(":") : value.join("");
    return accumulator;
  }, {});


  return {head, body};
};