const rusToLat = function (str) {
  let ru = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
    'е': 'e', 'ё': 'e', 'ж': 'j', 'з': 'z', 'и': 'i',
    'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o',
    'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
    'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch', 'ш': 'sh',
    'щ': 'shch', 'ы': 'y', 'э': 'e', 'ю': 'u', 'я': 'ya',
    'ъ': 'ie', 'ь': '', 'й': 'i', '"': '', '"': ''
  };

  return [...str].map(l => {
    let latL = ru[l.toLocaleLowerCase()];

    if (l !== l.toLocaleLowerCase()) {
      latL = latL.charAt(0).toLocaleUpperCase() + latL.slice(1);
    } else if (latL === undefined) {
      latL = l;
    }

    return latL;
  }).join('');
}

export const strToPath = str => rusToLat(str).split(' ').join('-').toLocaleLowerCase()

export const path = ({ category = null, title, clothTitle = null }) => {
  return `/catalog${category && '/' + strToPath(category)}${clothTitle && '/' + strToPath(clothTitle)}/${strToPath(title)}`
}

// export async function fetchData(params) {
//   const URL = 'http://localhost:3000'

//   const param = params ? `?q=${params}` : ''
//   const res = await fetch(`${URL}/api${param}`)
//   const [catalog] = await res.json()
//   return catalog
// }

export async function getMetadata(params) {
  try {
    const URL = 'http://localhost:3000'
    const param = params ? `?q=${params}` : ''
    const res = await fetch(`${URL}/api${param}`)
    const [catalog] = await res.json()
    return {
      title: catalog?.title
    }
  } catch (error) {
    console.error(error.message);
  }
}