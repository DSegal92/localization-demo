export const xmlToKeyValue = (xml) => {
  try {
    let kv = {}
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(xml,"text/xml");

    let x = xmlDoc.documentElement;
    let strings = Object.values(x.childNodes)
                        .filter(y => y.nodeName === 'string')
                        .map(y => [y.getAttribute('name'),
                                   y.childNodes[0].nodeValue])

    for(let i = 0; i < strings.length; i++) {
      kv[strings[i][0]] = strings[i][1]
    }

    return kv
  }
  catch {
    return undefined
  }
}
