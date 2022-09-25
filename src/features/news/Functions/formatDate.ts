const formatDate = (n: any) => {
    const hora = new Date();
    const minutosDecorrido = Math.floor(
        (hora.getTime() - n.date.getTime()) / 60000
    );
    return minutosDecorrido;
}

export default formatDate;