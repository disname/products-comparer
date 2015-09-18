/**
 * Created by s_vinnik on 17.09.2015.
 */

function validateURl(url) {
    if (/^(http:\/\/www\.|https:\/\/www\.)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(url)) {
        return true;
    }
    return false;
}
var React = require('react'),
    UrlInput = React.createClass({

        getInitialState: function () {
            return {
                data: ''
            };
        },
        _entryChanged: function (e) {
            var val = e.target.value,validated=val;
            var isValid = validateURl(val)?val:'';

            this.setState({data: validated});
            if (this.props.onChange) {
                this.props.onChange(validated);
            }

        },

        render: function () {
            return (
                <input type="text"
                       id={this.props.id}
                       className={this.props.className} onChange={this._entryChanged}
                       value={this.state.data}/>
            )
        }
    });
module.exports = UrlInput;