import { storeAction, queryAction } from '../services/things';

export const handleStoreAction = async (req, res) => {
    let thingToStore = req.body;

    if (thingToStore) {
        let response = await storeAction(thingToStore);
        if (response.isError) {
            let err = handleError(response.message);
            res.status(err.status).json({ message: err.message });
        } else {
            return res.status(200).json({ message: 'Success' });
        }
    } else {
        return res.status(400).json({ message: 'Missing body' });
    }
}


export const handleQueryAction = async (req, res) => {
    let id = req.params.id;
    if (id) {
        let response = await queryAction(id);
        if (response.isError) {
            let err = handleError(response.message);
            res.status(err.status).json({ message: err.message });
        } else {
            return res.status(200).json({ id: response._id, name: response.name });
        }
    } else {
        return res.status(400).json({ message: 'Missing id' });
    }
}


export const handleError = (message) => {
    switch (message) {
        case 'malformed-data':
            return { status: 400, message: message };
        case 'malformed-input':
            return { status: 400, message: message };
        case 'not-found':
            return { status: 404, message: message };
        case 'duplicated-id':
            return { status: 409, message: message };
        case 'error-when-storing':
            return { status: 500, message: message };
        case 'error-when-reading':
            return { status: 500, message: message };
        default:
            return { status: 500, message: message };
    }
}