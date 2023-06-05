//remove a planks
  onEvent('recipes', event =>{
    event.remove({output: 'minecraft:oak_planks'})
  });

onEvent('recipes', event =>{
      event.remove({output: 'minecraft:dark_oak_planks'})
    });

onEvent('recipes', event =>{
        event.remove({output: 'minecraft:spruce_planks'})
    });

onEvent('recipes', event =>{
        event.remove({output: 'minecraft:birch_planks'})
    });

onEvent('recipes', event =>{
        event.remove({output: 'minecraft:jungle_planks'})
    });

onEvent('recipes', event =>{
      event.remove({output: 'minecraft:acacia_planks'})
    });

onEvent('recipes', event =>{
      event.remove({output: 'minecraft:crimson_planks'})
    });

onEvent('recipes', event =>{
      event.remove({output: 'minecraft:warped_planks'})
    });

onEvent('recipes', event =>{
      event.remove({output: 'ars_nouveau:archwood_planks'})
    });

onEvent('recipes', event =>{
      event.remove({output: 'biomesoplenty:fir_planks'})
    });

onEvent('recipes', event =>{
      event.remove({output: 'biomesoplenty:redwood_planks'})
    });

onEvent('recipes', event =>{
      event.remove({output: 'biomesoplenty:cherry_planks'})
    });

onEvent('recipes', event =>{
      event.remove({output: 'biomesoplenty:mahogany_planks'})
    });

onEvent('recipes', event =>{
      event.remove({output: 'biomesoplenty:jacaranda_planks'})
    });

onEvent('recipes', event =>{
      event.remove({output: 'biomesoplenty:palm_planks'})
    });
    
onEvent('recipes', event =>{
      event.remove({output: 'biomesoplenty:willow_planks'})
    });

onEvent('recipes', event =>{
      event.remove({output: 'biomesoplenty:dead_planks'})
    });

onEvent('recipes', event =>{
      event.remove({output: 'biomesoplenty:magic_planks'})
    });

onEvent('recipes', event =>{
      event.remove({output: 'biomesoplenty:umbran_planks'})
    });

onEvent('recipes', event =>{
      event.remove({output: 'biomesoplenty:hellbark_planks'})
    });


//--------------------------------------------------------------------------------------------------

// log to planks

onEvent('recipes', event =>{
    event.shapeless('2x minecraft:oak_planks', ['#minecraft:oak_logs'])
   });

onEvent('recipes', event =>{
    event.shapeless('2x minecraft:dark_oak_planks', ['#minecraft:dark_oak_logs'])
   });

onEvent('recipes', event =>{
    event.shapeless('2x minecraft:spruce_planks', ['#minecraft:spruce_logs'])
   });

onEvent('recipes', event =>{
    event.shapeless('2x minecraft:birch_planks', ['#minecraft:birch_logs'])
   });

onEvent('recipes', event =>{
    event.shapeless('2x minecraft:jungle_planks', ['#minecraft:jungle_logs'])
   });

onEvent('recipes', event =>{
    event.shapeless('2x minecraft:acacia_planks', ['#minecraft:acacia_logs'])
   });

onEvent('recipes', event =>{
    event.shapeless('2x minecraft:crimson_planks', ['#minecraft:crimson_logs'])
   });

onEvent('recipes', event =>{
    event.shapeless('2x minecraft:warped_planks', ['#minecraft:warped_logs'])
   });

onEvent('recipes', event =>{
    event.shapeless('2x ars_nouveau:archwood_planks', ['#ars_nouveau:archwood_logs'])
   });

onEvent('recipes', event =>{
    event.shapeless('2x biomesoplenty:fir_planks', ['#biomesoplenty:fir_logs'])
   });

onEvent('recipes', event =>{
    event.shapeless('2x biomesoplenty:redwood_planks', ['#biomesoplenty:redwood_logs'])
   });

onEvent('recipes', event =>{
    event.shapeless('2x biomesoplenty:cherry_planks', ['#biomesoplenty:cherry_logs'])
   });

onEvent('recipes', event =>{
    event.shapeless('2x biomesoplenty:mahogany_planks', ['#biomesoplenty:mahogany_logs'])
   });

onEvent('recipes', event =>{
    event.shapeless('2x biomesoplenty:jacaranda_planks', ['#biomesoplenty:jacaranda_logs'])
   });

onEvent('recipes', event =>{
    event.shapeless('2x biomesoplenty:palm_planks', ['#biomesoplenty:palm_logs'])
   });

onEvent('recipes', event =>{
    event.shapeless('2x biomesoplenty:willow_planks', ['#biomesoplenty:willow_logs'])
   });

onEvent('recipes', event =>{
    event.shapeless('2x biomesoplenty:dead_planks', ['#biomesoplenty:dead_logs'])
   });

onEvent('recipes', event =>{
    event.shapeless('2x biomesoplenty:magic_planks', ['#biomesoplenty:magic_logs'])
   });

onEvent('recipes', event =>{
    event.shapeless('2x biomesoplenty:umbran_planks', ['#biomesoplenty:umbran_logs'])
   });

onEvent('recipes', event =>{
    event.shapeless('2x biomesoplenty:hellbark_planks', ['#biomesoplenty:hellbark_logs'])
   });



//-----------------------------------------------------------------------------------------------

// log to planks with saw

// log to planks


var saw = '#artisantools:type/handsaw';

onEvent('recipes', event =>{
    event.shapeless('4x minecraft:spruce_planks', 
    ['#minecraft:spruce_logs', Ingredient.of(saw)]).damageIngredient(Ingredient.of(saw))
   });

onEvent('recipes', event =>{
    event.shapeless('4x minecraft:birch_planks',
    ['#minecraft:birch_logs', Ingredient.of(saw)]).damageIngredient(Ingredient.of(saw))
   });

onEvent('recipes', event =>{
    event.shapeless('4x minecraft:jungle_planks',
     ['#minecraft:jungle_logs', Ingredient.of(saw)]).damageIngredient(Ingredient.of(saw))
   });

onEvent('recipes', event =>{
    event.shapeless('4x minecraft:acacia_planks', 
    ['#minecraft:acacia_logs', Ingredient.of(saw)]).damageIngredient(Ingredient.of(saw))
   });

onEvent('recipes', event =>{
    event.shapeless('4x minecraft:crimson_planks', 
    ['#minecraft:crimson_logs', Ingredient.of(saw)]).damageIngredient(Ingredient.of(saw))
   });

onEvent('recipes', event =>{
    event.shapeless('4x minecraft:warped_planks', 
    ['#minecraft:warped_logs', Ingredient.of(saw)]).damageIngredient(Ingredient.of(saw))
   });

onEvent('recipes', event =>{
    event.shapeless('4x ars_nouveau:archwood_planks', 
    ['#ars_nouveau:archwood_logs', Ingredient.of(saw)]).damageIngredient(Ingredient.of(saw))
   });

onEvent('recipes', event =>{
    event.shapeless('4x biomesoplenty:fir_planks', 
    ['#biomesoplenty:fir_logs', Ingredient.of(saw)]).damageIngredient(Ingredient.of(saw))
   });

onEvent('recipes', event =>{
    event.shapeless('4x biomesoplenty:redwood_planks',
    ['#biomesoplenty:redwood_logs', Ingredient.of(saw)]).damageIngredient(Ingredient.of(saw))
   });

onEvent('recipes', event =>{
    event.shapeless('4x biomesoplenty:cherry_planks',
    ['#biomesoplenty:cherry_logs', Ingredient.of(saw)]).damageIngredient(Ingredient.of(saw))
   });

onEvent('recipes', event =>{
    event.shapeless('4x biomesoplenty:mahogany_planks', 
    ['#biomesoplenty:mahogany_logs', Ingredient.of(saw)]).damageIngredient(Ingredient.of(saw))
   });

onEvent('recipes', event =>{
    event.shapeless('4x biomesoplenty:jacaranda_planks', 
    ['#biomesoplenty:jacaranda_logs', Ingredient.of(saw)]).damageIngredient(Ingredient.of(saw))
   });

onEvent('recipes', event =>{
    event.shapeless('4x biomesoplenty:palm_planks',
    ['#biomesoplenty:palm_logs', Ingredient.of(saw)]).damageIngredient(Ingredient.of(saw))
   });

onEvent('recipes', event =>{
    event.shapeless('4x biomesoplenty:willow_planks',
    ['#biomesoplenty:willow_logs', Ingredient.of(saw)]).damageIngredient(Ingredient.of(saw))
   });

onEvent('recipes', event =>{
    event.shapeless('4x biomesoplenty:dead_planks',
    ['#biomesoplenty:dead_logs', Ingredient.of(saw)]).damageIngredient(Ingredient.of(saw))
   });

onEvent('recipes', event =>{
    event.shapeless('4x biomesoplenty:magic_planks', 
    ['#biomesoplenty:magic_logs', Ingredient.of(saw)]).damageIngredient(Ingredient.of(saw))
   });

onEvent('recipes', event =>{
    event.shapeless('4x biomesoplenty:umbran_planks',
    ['#biomesoplenty:umbran_logs', Ingredient.of(saw)]).damageIngredient(Ingredient.of(saw))
   });

onEvent('recipes', event =>{
    event.shapeless('4x biomesoplenty:hellbark_planks', 
    ['#biomesoplenty:hellbark_logs', Ingredient.of(saw)]).damageIngredient(Ingredient.of(saw))
   });;


//-----------------------------------------------------------------------------------------------

//vertical slab to planks


onEvent('recipes', event =>{
    event.shaped('1x minecraft:dark_oak_planks', [
        'SS'
      ], {
        S: 'quark:dark_oak_vertical_slab',
      })
});

onEvent('recipes', event =>{
    event.shaped('1x minecraft:oak_planks', [
        'SS'
      ], {
        S: 'quark:oak_vertical_slab',
      })
});

onEvent('recipes', event =>{
    event.shaped('1x minecraft:birch_planks', [
        'SS'
      ], {
        S: 'quark:birch_vertical_slab',
      })
});

onEvent('recipes', event =>{
    event.shaped('1x minecraft:spruce_planks', [
        'SS'
      ], {
        S: 'quark:spruce_vertical_slab',
      })
});

onEvent('recipes', event =>{
    event.shaped('1x minecraft:jungle_planks', [
        'SS'
      ], {
        S: 'quark:jungle_vertical_slab',
      })
});

onEvent('recipes', event =>{
    event.shaped('1x minecraft:acacia_planks', [
        'SS'
      ], {
        S: 'quark:acacia_vertical_slab',
      })
});

onEvent('recipes', event =>{
    event.shaped('1x minecraft:crimson_planks', [
        'SS'
      ], {
        S: 'quark:crimson_vertical_slab',
      })
});

onEvent('recipes', event =>{
    event.shaped('1x minecraft:warped_planks', [
        'SS'
      ], {
        S: 'quark:warped_vertical_slab',
      })
});  
//----------------------------------------------------------------------------------------------

// slab to planks
onEvent('recipes', event =>{
    event.shaped('1x minecraft:oak_planks', [
        'S',
        'S'
      ], {
        S: 'minecraft:oak_slab',
      })
});

onEvent('recipes', event =>{
    event.shaped('1x minecraft:dark_oak_planks', [
        'S',
        'S'
      ], {
        S: 'minecraft:dark_oak_slab',
      })
});

onEvent('recipes', event =>{
    event.shaped('1x minecraft:spruce_planks', [
        'S',
        'S'
      ], {
        S: 'minecraft:spruce_slab',
      })
});

onEvent('recipes', event =>{
    event.shaped('1x minecraft:birch_planks', [
        'S',
        'S'
      ], {
        S: 'minecraft:birch_slab',
      })
});

onEvent('recipes', event =>{
    event.shaped('1x minecraft:jungle_planks', [
        'S',
        'S'
      ], {
        S: 'minecraft:jungle_slab',
      })
});

onEvent('recipes', event =>{
    event.shaped('1x minecraft:acacia_planks', [
        'S',
        'S'
      ], {
        S: 'minecraft:acacia_slab',
      })
});

onEvent('recipes', event =>{
    event.shaped('1x minecraft:crimson_planks', [
        'S',
        'S'
      ], {
        S: 'minecraft:crimson_slab',
      })
});

onEvent('recipes', event =>{
    event.shaped('1x minecraft:warped_planks', [
        'S',
        'S'
      ], {
        S: 'minecraft:warped_slab',
      })
});
