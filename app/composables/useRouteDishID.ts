export default function (link: string | string[] | undefined) {
  if (!link) return undefined;
  if (Array.isArray(link)) return undefined;

  return extractIdFromLink(link);
}
