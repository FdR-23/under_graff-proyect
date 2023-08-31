import jsonCategories from '../db/categories.json'

export const GetAllProducts = async () => {
    return new Promise(async (resolve, reject) => {
        setTimeout(async () => {
            try {
                const response = await fetch('/src/db/products.json');
                if (!response.ok) {
                    throw new Error('Error en la solicitud: ' + response.status + ' ' + response.statusText);
                }
                const data = await response.json();
                resolve(data.productos);
            } catch (error) {
                console.error('Error al obtener los datos:', error);
                reject(error);

            }
        }, 500);
    });
}


export const GetAllCategories = async () => {
    return new Promise(async (resolve, reject) => {
        setTimeout(async () => {
            try {
                const response = await fetch('../src/db/categories.json');

                if (!response.ok) {
                    throw new Error('Error en la solicitud: ' + response.status + ' ' + response.statusText);
                }
                const data = response.json();
                resolve(data)
            } catch (error) {
                console.error('Error al obtener los datos:', error);
                reject(error)
            }
        }, 500);
    });
}

export const FilterCategories = async (category) => {
    return new Promise(async (resolve, reject) => {
        setTimeout(async () => {
            try {
                // const response = await fetch('/src/db/categories.json');

                // if (!response.ok) {
                //     throw new Error('Error en la solicitud: ' + response.status + ' ' + response.statusText);
                // }
                //  const { data } = await response.json();
                const data = jsonCategories.data;
                let findCategoryId = data[0]?.values.find((element) => element.nombre === category);
                resolve(findCategoryId)
            } catch (error) {
                console.error('Error al obtener los datos:', error);
                reject(error)
            }
        }, 200);
    });


}