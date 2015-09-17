/**
 * Created by s_vinnik on 17.09.2015.
 */
var React = require('react'),
    UrlInput = React.createClass({
        getInitialState: function() {
            return {
                data: ''
            };
        },
        _entryChanged:function(e){
            var val = e.target.value;
            var validated = val;

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