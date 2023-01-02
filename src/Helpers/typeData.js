export const typeData = {
    "normal": {
        "attack": {
            "double": [],
            "half": ["rock", "steel"],
            "zero": ["ghost"]
        },
        "defense": {
            "half": [],
            "double": ["fighting"],
            "zero": ["ghost"]
        }
    },
    "fighting": {
        "attack": {
            "double": ["dark", "ice", "normal", "rock", "steel"],
            "half": ["bug", "fairy", "flying", "poison", "psychic"],
            "zero": ["ghost"]
        },
        "defense": {
            "half": ["bug", "dark", "rock"],
            "double": ["fairy", "flying", "psychic"],
            "zero": []
        }
    },
    "flying": {
        "attack": {
            "double": ["bug", "fighting", "grass"],
            "half": ["electric", "steel", "rock"],
            "zero": []
        },
        "defense": {
            "half": ["bug", "fighting", "grass"],
            "double": ["electric", "ice", "rock"],
            "zero": ["ground"]
        }
    },
    "poison": {
        "attack": {
            "double": ["grass", "fairy"],
            "half": ["poison", "ground", "rock", "fairy"],
            "zero": ["steel"]
        },
        "defense": {
            "half": ["fighting", "poison", "bug", "grass", "fairy"],
            "double": ["ground", "psychic"],
            "zero": []
        }
    },
    "ground": {
        "attack": {
            "double": ["electric", "fire", "poison", "rock", "steel"],
            "half": ["grass", "bug" ],
            "zero": ["flying"]
        },
        "defense": {
            "half": ["poison", "rock"],
            "double": ["grass", "ice", "water"],
            "zero": ["electric"]
        }
    },
    "rock": {
        "attack": {
            "double": ["bug", "fire", "flying", "ice"],
            "half": ["fighting", "ground", "steel"],
            "zero": []
        },
        "defense": {
            "half": ["fire", "flying", "normal", "poison"],
            "double": ["fighting", "grass", "ground", "steel", "water"],
            "zero": []
        }
    },
    "bug": {
        "attack": {
            "double": ["dark", "grass", "psychic"],
            "half": ["fairy", "fighting", "fire", "flying", "ghost", "poison", "steel" ],
            "zero": []
        },
        "defense": {
            "half": ["fighting", "grass", "ground"],
            "double": ["fire", "flying", "rock"],
            "zero": []
        }
    },
    "ghost": {
        "attack": {
            "double": ["ghost", "psychic"],
            "half": ["dark"],
            "zero": ["normal"]
        },
        "defense": {
            "half": ["bug", "poison"],
            "double": ["dark", "ghost"],
            "zero": ["normal", "fight"]
        }
    },
    "steel": {
        "attack": {
            "double": ["fairy", "rock", "ice"],
            "half": ["electric", "fire", "water", "steel"],
            "zero": []
        },
        "defense": {
            "half": ["bug", "dragon", "fairy", "flying", "grass", "ice", "normal", "psychic", "rock", "steel"],
            "double": ["fight", "fire", "ground"],
            "zero": ["poison"]
        }
    },
    "fire": {
        "attack": {
            "double": ["grass", "bug", "ice", "steel"],
            "half": ["dragon", "fire", "rock", "water"],
            "zero": []
        },
        "defense": {
            "half": ["bug", "fairy", "fire", "grass", "ice", "steel"],
            "double": ["ground", "rock", "water"],
            "zero": []
        }
    },
    "water": {
        "attack": {
            "double": ["fire", "rock", "ground"],
            "half": ["dragon", "grass", "water",],
            "zero": []
        },
        "defense": {
            "half": ["fire", "ice", "steel", "water"],
            "double": ["electric", "grass"],
            "zero": []
        }
    },
    "grass": {
        "attack": {
            "double": ["ground", "rock", "water"],
            "half": ["flying", "poison", "bug", "steel", "fire", "grass", "dragon" ],
            "zero": []
        },
        "defense": {
            "half": ["ground", "water", "grass", "electric"],
            "double": ["flying", "poison", "bug", "fire", "ice"],
            "zero": []
        }
    },
    "electric": {
        "attack": {
            "double": ["flying", "water",],
            "half": ["dragon", "electric", "grass" ],
            "zero": ["ground"]
        },
        "defense": {
            "half": ["electric", "flying", "steel"],
            "double": ["ground"],
            "zero": []
        }
    },
    "psychic": {
        "attack": {
            "double": ["fighting", "poison"],
            "half": ["psychic", "steel"],
            "zero": ["dark"]
        },
        "defense": {
            "half": ["fighting", "psychic"],
            "double": ["bug", "dark", "ghost"],
            "zero": []
        }
    },
    "ice": {
        "attack": {
            "double": ["dragon", "flying", "grass", "ground"],
            "half": ["fire", "ice", "water", "steel"],
            "zero": []
        },
        "defense": {
            "half": ["ice"],
            "double": ["fighting", "rock", "steel", "fire"],
            "zero": []
        }
    },
    "dragon": {
        "attack": {
            "double": ["dragon"],
            "half": ["steel"],
            "zero": ["fairy"]
        },
        "defense": {
            "half": ["electric", "fire", "grass", "water"],
            "double": ["dragon", "fairy", "ice"],
            "zero": []
        }
    },
    "dark": {
        "attack": {
            "double": ["ghost", "psychic"],
            "half": ["dark", "fairy", "fighting" ],
            "zero": []
        },
        "defense": {
            "half": ["dark", "ghost"],
            "double": ["bug", "fairy", "fighting"],
            "zero": ["psychic"]
        }
    },
    "fairy": {
        "attack": {
            "double": ["dark", "dragon", "fighting"],
            "half": ["poison", "fire", "steel"],
            "zero": []
        },
        "defense": {
            "half": ["bug", "dark", "fighting"],
            "double": ["poison", "steel"],
            "zero": ["dragon"]
        }
    },
};