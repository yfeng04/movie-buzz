export const formatRating = (rating) => {
    if (rating.toString().length === 1){
        return rating.toString()+ ".0";
    } else {
        return rating;
    }
}

export const formatDate = (string) => {
    let options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(string).toLocaleDateString([],options);
}

export const convertTime = (time) => { 
    const hours = Math.floor(time / 60);  
    const minutes = time % 60;
    return `${hours}h ${minutes}m`;         
};

export const getStars = (number) => {
    return number = Math.round(number)/2;
}
