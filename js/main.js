const Person =  Backbone.Model.extend({
    defaults:{
        name:'Евгеша',
        age:44,
        job:'Front-end developer'
    },
    validate: function(attr, options){
        if(attr.age<0){
            return 'Err age must be greate or equale zero'
        }
    },
    walk : function(){
        return this.get('name') + ' is walking...'
    }
})

const p = new Person
const PersonView = Backbone.View.extend({
    model: p,
    tagName: 'p',
    className:'PersoN',
    id: 1,
    initialize:function(){
       // console.log(this.model)
    },
    render: function(){
        this.$el.html(this.model.get('name') + '('+this.model.get('age')+': '+this.model.get('job')+')')
    }
})
let pv = new PersonView()

const lesson1= ()=> {
    let p = new Person
    p.on('invalid', (m, e) => {
        console.log(e)
    })
    console.log(p)
    p = new Person({
        'name': 'Ванёк',
        'sex': 'male'
    })
    console.log(p)
    console.log(p.get('name'))
    p.set('age', -42, {validate: true})
    console.log(p.get('name'))
    console.log(p.walk())
    console.log(p.toJSON())
}
