const { Model } = require('objection');

class Raider extends Model {
    static get tableName() {
        return 'raiders';
    }
}

export default Raider;