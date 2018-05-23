## citySelectorDemo 使用案例

### 引入依赖 跟据当前组件的位置引入 SelectorForAddress 选择器组件
```
import React, {PureComponent} from 'react';
import SelectorForAddress from '../components/SelectorForAddress';
```

### 实例化组件方法
#### 只有需要一个选择器组件实例的用法
```
<SelectorForAddress
    type = '11'
    onChange = {(obj) => {this.onChange(obj, this)}}
    moduleType = '40'  
/>
```
#### 需要用到多个实例（两个以上）
```
<div>
    <SelectorForAddress
        type = '10'
        onChange = {(obj) => {this.onChange(obj, 'instance1', this)}}
        moduleType = '40'  
    />
    <SelectorForAddress
        type = '11'
        onChange = {(obj) => {this.onChange(obj, 'instance1', this)}}
        moduleType = '40'  
    />
</div>
```
### 完整的使用案例
```
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
    onChange(obj, instance, that){
        that[instance] = obj;
        console.log(that);
    }
}
```
### 参数说明
 > 根据不同的业务需求会有多种使用形式

 > 形式一: 跟据行政划分查询省和市(省中包含全国 type = '01' 省中不包含全国 type = '00') 

 > 形式二：跟据行政划分查询省和市和区(省中包含全国 type = '010' 省中不包含全国 type = '000')

 > 形式三：跟据开通区域查询省和市（市中不包含二级市 type = '10'）

 > 形式四：跟据开通区域查询省和市（市中包含二级市 type = '11'）

 > 形式五：根据开通区域查询省和市和区（区中不包含二级市 type= '110'）

 > 形式六：根据开通区域查询省和市和区（区中只有二级市 type = '101'）

 > 形式七：根据开通区域查询省和市和区（区中包含二级市 type = '102'）

> @prop {String} type 参考上述使用形式传递 必传

> @prop {Function} onChange 该方法用来同步跟踪组件内部状态的变化 onChange(object) object={provinceId, provinceName, cityId, cityName, regionId, regionName} 

> @prop {Object} selected 设置组件默认值 selected = {provinceId, cityId, regionId}

> @prop {String} moduleType 查询权限码 按开通区域查询省市区时使用 10-商品模块、20-订单模块、30-用户模块、40-配送站 默认为 '10'
 
