//remove as receitas iniciais do sawdust do mekanism
onEvent('recipes', event =>{
    event.remove({output: 'mekanism:sawdust'})
});

//remove as receitas do sawdust do immersive
onEvent('recipes', event =>{
    event.remove({output: 'immersiveengineering:dust_wood'})
});

//remove as receitas do sawdust do thermal
onEvent('recipes', event =>{
    event.remove({output: 'thermal:sawdust'})
});


onEvent('recipes', event =>{
    event.remove({output: 'tconstruct:pattern'})
});


onEvent('recipes', event =>{
    event.shapeless('1x tconstruct:pattern', ['mekanism:sawdust', 'mekanism:sawdust', 'mekanism:sawdust', 'mekanism:sawdust'])
});


var mortar = '#artisantools:type/mortar'
onEvent('recipes', event =>{
    event.shapeless('1x mekanism:sawdust', ['#minecraft:planks', Ingredient.of(mortar)]).damageIngredient(Ingredient.of(mortar))
});



   
   