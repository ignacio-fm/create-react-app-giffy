const apiKey = 'KiBgXEipL0QPXVFhXFKsvLOgqjdHqOlb'

function getGifs ({keyword = 'panda'} = {}) {
    
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=es`

    return fetch(apiUrl)
    .then(res => res.json())
    .then(response => {
        const { data } = response
        if (Array.isArray(data)){
            const gifs = data.map(gif => {
                const { id, title, images } = gif
                const { url } = images.original

                return { id, title, url }
            })
            return gifs
        }
    })
}

export default getGifs