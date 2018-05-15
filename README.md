# citySelectorDemo 使用案例

import React, {PureComponent} from 'react';



import SelectorForAddress from '../components/SelectorForAddress';




export default class TestSelector extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            selected:{

            }
        };
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                selected:{provinceId: 440000, cityId: 441200, regionId: 441203}
            })
        }, 1000);
    }
   
    render(){
        return <div>
            <SelectorForAddress 
                type = '00'
                onChange = {(obj) => {this.onChange(obj, 'instance1', this)}}
            />
            <br/>
            <SelectorForAddress 
                type = '01'
                onChange = {(obj) => {this.onChange(obj, 'instance2', this)}}
            />
             <br/>
            <SelectorForAddress 
                type = '010'
                onChange = {(obj) => {this.onChange(obj, 'instance3', this)}}
                selected = {{provinceId: 140000, cityId: 140300, regionId: 140311}}
            />
             <br/>
            <SelectorForAddress 
                type = '000'
                onChange = {(obj) => {this.onChange(obj, 'instance4', this)}}
            />
             <br/>
            <SelectorForAddress 
                type = '10'
                onChange = {(obj) => {this.onChange(obj, 'instance5', this)}}
                moduleType = '40'
            />
             <br/>
            <SelectorForAddress 
                type = '11'
                onChange = {(obj) => {this.onChange(obj, 'instance6', this)}}
                moduleType = '40'
            />
             <br/>
            <SelectorForAddress 
                type = '110'
                onChange = {(obj) => {this.onChange(obj, 'instance7', this)}}
                moduleType = '40'
            />
             <br/>
            <SelectorForAddress 
                type = '101'
                onChange = {(obj) => {this.onChange(obj, 'instance8', this)}}
                moduleType = '40'
            />
             <br/>
            <SelectorForAddress 
                type= '102'
                onChange = {(obj) => {this.onChange(obj, 'instance9', this)}}
                moduleType = '40'
                selected={this.state.selected}
            />
            
        </div>
    }
    onChange(obj, instance, that){ //可在此同步跟踪组件内部的状态
        that[instance] = obj;
        console.log(that);
    }
}
