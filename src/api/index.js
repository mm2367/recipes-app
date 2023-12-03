import axios, {options} from "axios";

export const getRecipesList=async (tags, size)=>{
    console.log('logging information', tags)
    const options = {
        headers: {
            'X-RapidAPI-Key': 'ca47f53d3dmshf5d26770c165affp11542djsne6144611184f',
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        },
        method: 'GET',
        params: {
            from: '0',
            size: size || 5,
            tags: tags
        },
        url: 'https://tasty.p.rapidapi.com/recipes/list',
    };
    return await axios.request(options);

}