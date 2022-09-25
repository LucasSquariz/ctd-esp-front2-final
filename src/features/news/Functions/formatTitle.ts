const formatTitle = (n: any) => {
    const titulo = n.titulo
        .split(" ")
        .map((str: any) => {
            return str.charAt(0).toUpperCase() + str.slice(1);
        })
        .join(" ");
    return titulo;
}

export default formatTitle;
