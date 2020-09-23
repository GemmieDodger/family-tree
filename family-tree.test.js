const familyTree = require ('./family-tree')

describe('Family Tree', function(){
    test('I exist in the tree', function(){
        const me = familyTree[0]
        expect(me.name).toEqual('Gemma')
    })
    test('Sister exists in the tree', function(){
        const sister = familyTree[1]
        expect(sister.name).toEqual('Dom')
    })
    test('Mother exists in tree', function(){
        const mother = familyTree[2]
        expect(mother.name).toEqual('Julie')
    })
    test('Father exists in tree', function(){
        const father = familyTree[3]
        expect(father.name).toEqual('Kevin')
    })
    test('Grandfather exists in tree', function(){
        const grandfather = familyTree[4]
        expect(grandfather.name).toEqual('John')
    })

})