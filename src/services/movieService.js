import Movie from '../models/Movie.js'

export default {
    getAll(filter = {}){
        let query = Movie.find({});
        // TODO: fix partial case insensitive search
        if(filter.search){
            query = query.where({title: filter.search})
        };
        //TODO: add case insensitive search
        if(filter.genre) {
            query = query.where({genre: filter.genre})
        }

        if(filter.year) {
            query = query.where({year: Number(filter.year)})
        }
        return query;
    },
    getOne(movieId) {
        const result = Movie.findById(movieId);

        return result;
    },
    create(movieData){
        const result = Movie.create(movieData)({
            ...movieData,
            rating: Number(movieData.rating),
            year: Number(movieData.year)
        }
        );
        return result;
    }
}