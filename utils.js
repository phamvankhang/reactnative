/**
 * Created by khangpv on 11/26/16.
 */
import _ from 'underscore'
module.exports = {
    convert: function (data) {
        var a = data.match(/\d{2}/g)
        var text = ''
        _.each(a, function (val) {
            text += String.fromCharCode(parseInt(val, 16))
        })
        return text
    }
}