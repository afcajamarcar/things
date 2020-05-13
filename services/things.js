import { Thing, Things } from '../models/Thing';

export const storeAction = async (thingToStore) => {
    let { id, name } = thingToStore;

    if (!id || !name || typeof id != 'number') {
        return { isError: true, message: 'malformed-data' };
    } else {
        let newThing = new Thing({ _id: id, name: name });
        try {
            let response = await newThing.save();
            return response;
        } catch (error) {
            if (error['code'] == 11000) {
                return { isError: true, message: 'duplicated-id' };
            } else {
                return { isError: true, message: 'error-when-storing' };
            }
        }
    }
}

export const queryAction = async (thingId) => {
    let id = parseInt(thingId);
        
    if (isNaN(id)) {
        return { isError: true, message: 'malformed-input' };
    } else {
        try {
            let queryResult = await Things.find({ _id: id });
            if (!queryResult.length) {
                return { isError: true, message: 'not-found' };
            } else {
                return queryResult.pop();
            }
        } catch (error) {
            return { isError: true, message: 'error-when-reading' };
        }
    }
}