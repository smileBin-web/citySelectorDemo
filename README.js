// citySelectorDemo 使用案例

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
            <SelectorForAddress //跟据行政划分查询省和市(省中不包含全国)
                type = '00'
                onChange = {(obj) => {this.onChange(obj, 'instance1', this)}}
            />
            <br/>
            <SelectorForAddress //跟据行政划分查询省和市(省中包含全国)
                type = '01'
                onChange = {(obj) => {this.onChange(obj, 'instance2', this)}}
            />
             <br/>
            <SelectorForAddress //跟据行政划分查询省和市和区(省中包含全国)
                type = '010'
                onChange = {(obj) => {this.onChange(obj, 'instance3', this)}}
                selected = {{provinceId: 140000, cityId: 140300, regionId: 140311}}
            />
             <br/>
            <SelectorForAddress //跟据行政划分查询省和市和区(省中不包含全国)
                type = '000'
                onChange = {(obj) => {this.onChange(obj, 'instance4', this)}}
            />
             <br/>
            <SelectorForAddress //跟据开通区域查询省和市（市中不包含二级市）
                type = '10'
                onChange = {(obj) => {this.onChange(obj, 'instance5', this)}}
    //查询权限码 按开通区域查询省市区时使用 10-商品模块、20-订单模块、30-用户模块、40-配送站 默认为 '10'
                moduleType = '40' 
            />
             <br/>
            <SelectorForAddress //跟据开通区域查询省和市（市中包含二级市）
                type = '11'
                onChange = {(obj) => {this.onChange(obj, 'instance6', this)}}
    //查询权限码 按开通区域查询省市区时使用 10-商品模块、20-订单模块、30-用户模块、40-配送站 默认为 '10'
                moduleType = '40'  
            />
             <br/>
            <SelectorForAddress //根据开通区域查询省和市和区（区中不包含二级市）
                type = '110'
                onChange = {(obj) => {this.onChange(obj, 'instance7', this)}}
    //查询权限码 按开通区域查询省市区时使用 10-商品模块、20-订单模块、30-用户模块、40-配送站 默认为 '10'
                moduleType = '40' 
            />
             <br/>
            <SelectorForAddress //根据开通区域查询省和市和区（区中只有二级市）
                type = '101'
                onChange = {(obj) => {this.onChange(obj, 'instance8', this)}}
    //查询权限码 按开通区域查询省市区时使用 10-商品模块、20-订单模块、30-用户模块、40-配送站 默认为 '10'
                moduleType = '40' 
            />
             <br/>
            <SelectorForAddress //根据开通区域查询省和市和区（区中包含二级市）
                type= '102'
                onChange = {(obj) => {this.onChange(obj, 'instance9', this)}}
    //查询权限码 按开通区域查询省市区时使用 10-商品模块、20-订单模块、30-用户模块、40-配送站 默认为 '10'
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
