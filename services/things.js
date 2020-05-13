import { Thing } from '../models/Thing';

export const storeAction = async (thingToStore) => {

    let { id, name } = thingToStore;
    if (!id || !name || typeof id != 'number') {
        return {isError: true, message: 'malformed-data'};
    } else {        
        let newThing = new Thing({ _id: id, name: name });
        try {
            let response = await newThing.save();
            return response;
        } catch (error) {
            if (error['code'] == 11000) {
                return {isError: true, message: 'duplicated-id'};
            } else {
                return {isError: true, message: 'error-when-storing'};
            }
        }
    }
}


export const queryAction = (thingId) => {

}