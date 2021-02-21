export const handleKeywordSearch = (jobs, value) => {
    const cache = {};

    if (value in cache) {
        return cache[value];
    } else {
        const results = jobs.filter(job => job.title.toLowerCase().includes(value.toLowerCase()));
        if (results) {
            cache[value] = results;
            return results;
        } else {
            return null;
        }
    }
}

export const handleCitySearch = (jobs, value) => {
    const cache = {};

    if (value in cache) {
        return cache[value];
    } else {
        const results = jobs.filter(job => job.location.toLowerCase().includes(value.toLowerCase()));
        if (results) {
            cache[value] = results;
            return results;
        } else {
            return null;
        }
    }
}

