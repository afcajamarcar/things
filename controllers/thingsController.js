import { storeAction, queryAction } from '../services/things';

export const handleStoreAction = async (req, res) => {
    let thingToStore = req.body;

    if (thingToStore) {
        let response = await storeAction(thingToStore);
        
        if (response.isError) {
            switch (response.message) {
                case 'malformed-data':
                    return res.status(400).json({ message: response.message });
                case 'duplicated-id':
                    return res.status(409).json({ message: response.message });
                case 'error-when-storing':
                    return res.status(500).json({ message: response.message });
                default:
                    return res.status(500).json({ message: response.message });;
            }
        } else {
            return res.status(200).json({ message: 'Success' })
        }
    } else {
        return res.status(400).json({ message: 'Bad request' });
    }
}


export const handleQueryAction = async (req, res) => {
    console.log(req.params.id);
    return res.status(200).json({ status: 200, message: 'Success' })
}